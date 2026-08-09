import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Plus, X, Trash2, TrendingUp, TrendingDown, DollarSign, BarChart2, Calendar, Code } from 'lucide-react';

export interface TradeEntry {
  id: string;
  date: string;
  asset: string;
  direction: 'LONG' | 'SHORT';
  setup: string;
  pnl: number;
  notes: string;
}

interface TradingCalendarProps {
  lang: 'vi' | 'en';
}

export const TradingCalendar: React.FC<TradingCalendarProps> = ({ lang }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [trades, setTrades] = useState<TradeEntry[]>(() => {
    try { return JSON.parse(localStorage.getItem('ict_trading_journal') || '[]'); }
    catch { return []; }
  });
  const [selectedDateStr, setSelectedDateStr] = useState<string | null>(null);
  
  // Trade detail states
  const [pnl, setPnl] = useState<number>(0);
  const [notes, setNotes] = useState('');
  const [asset, setAsset] = useState('');
  const [direction, setDirection] = useState<'LONG' | 'SHORT'>('LONG');
  const [setup, setSetup] = useState('');

  // AI Copilot states
  const [aiText, setAiText] = useState('');
  const [isParsing, setIsParsing] = useState(false);
  const [showAiConfig, setShowAiConfig] = useState(false);
  const [geminiKey, setGeminiKey] = useState(() => localStorage.getItem('ict_gemini_api_key') || '');

  // Mobile layout state
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 960);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 960);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    try { localStorage.setItem('ict_trading_journal', JSON.stringify(trades)); }
    catch { /* ignore */ }
  }, [trades]);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDay = new Date(year, month, 1).getDay();
  const startOffset = firstDay === 0 ? 6 : firstDay - 1;

  const MONTHS_VI = ['Tháng 1','Tháng 2','Tháng 3','Tháng 4','Tháng 5','Tháng 6','Tháng 7','Tháng 8','Tháng 9','Tháng 10','Tháng 11','Tháng 12'];
  const MONTHS_EN = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  const DAYS_VI = ['T2','T3','T4','T5','T6','T7','CN'];
  const DAYS_EN = ['MON','TUE','WED','THU','FRI','SAT','SUN'];

  const getEntries = (d: string) => trades.filter(t => t.date === d);
  const getDayPnl = (d: string) => getEntries(d).reduce((s, t) => s + t.pnl, 0);
  const todayStr = new Date().toISOString().split('T')[0];

  const monthPrefix = `${year}-${String(month + 1).padStart(2, '0')}`;
  const monthTrades = trades.filter(t => t.date.startsWith(monthPrefix));
  const monthlyPnl = monthTrades.reduce((s, t) => s + t.pnl, 0);
  const winDays = new Set(monthTrades.filter(t => t.pnl > 0).map(t => t.date)).size;
  const lossDays = new Set(monthTrades.filter(t => t.pnl < 0).map(t => t.date)).size;

  // Local AI parser backup
  const parseLocally = (text: string) => {
    const lower = text.toLowerCase();
    
    // 1. Direction detection
    let dir: 'LONG' | 'SHORT' = 'LONG';
    if (lower.includes('short') || lower.includes('sell') || lower.includes('bán') || lower.includes('sọc') || lower.includes('shorted') || lower.includes('giảm')) {
      dir = 'SHORT';
    }
    setDirection(dir);

    // 2. Asset detection
    const assets = ['BTC', 'ETH', 'GOLD', 'XAUUSD', 'EURUSD', 'GBPUSD', 'NQ', 'ES', 'US30', 'NASDAQ', 'SPX', 'COIN'];
    let matchedAsset = '';
    for (const a of assets) {
      const regex = new RegExp(`\\b${a}\\b`, 'i');
      if (regex.test(text)) {
        matchedAsset = a;
        break;
      }
    }
    if (matchedAsset) setAsset(matchedAsset.toUpperCase());

    // 3. Setup detection
    const setups = ['OTE', 'FVG', 'BREAKER', 'MITIGATION', 'SILVER BULLET', 'KILLZONE', 'ORDERBLOCK', 'OB'];
    let matchedSetup = '';
    for (const s of setups) {
      const regex = new RegExp(`\\b${s}\\b`, 'i');
      if (regex.test(text)) {
        matchedSetup = s;
        break;
      }
    }
    if (matchedSetup) setSetup(matchedSetup.toUpperCase());

    // 4. PnL extraction (+1200$, thắng 500k, âm 300)
    let extractedPnl = 0;
    const isLoss = lower.includes('lỗ') || lower.includes('thua') || lower.includes('loss') || lower.includes('-');
    const rawNumMatch = text.replace(/-\s*/, '').match(/\d+(\.\d+)?/);
    
    if (rawNumMatch) {
      let val = parseFloat(rawNumMatch[0]);
      const kMatch = text.match(/\d+(\.\d+)?k/i);
      if (kMatch) val = val * 1000;
      extractedPnl = isLoss ? -val : val;
    }
    
    if (extractedPnl) setPnl(extractedPnl);

    // 5. Notes
    setNotes(text);
  };

  const handleAiParse = async () => {
    if (!aiText.trim()) return;
    setIsParsing(true);

    if (geminiKey.trim()) {
      try {
        const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${geminiKey}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [{
              parts: [{
                text: `Analyze this trading journal entry text and extract the details in JSON format:
                "${aiText}"

                Response MUST follow this strict JSON schema (no markdown formatting, no backticks, just raw JSON):
                {
                  "asset": string (e.g. "NQ", "GOLD", "BTC", uppercase),
                  "direction": "LONG" | "SHORT" (default to "LONG" if not specified),
                  "setup": string (e.g. "OTE", "FVG", "Breaker", etc., max 2 words),
                  "pnl": number (positive for profit, negative for loss. Extract from expressions like "+500", "lời 2k" -> 2000, "lỗ 300$" -> -300),
                  "notes": string (brief summary of notes/reflection)
                }`
              }]
            }],
            generationConfig: {
              responseMimeType: "application/json"
            }
          })
        });

        if (!res.ok) throw new Error('Gemini request failed');
        const data = await res.json();
        const jsonText = data.candidates?.[0]?.content?.parts?.[0]?.text;
        if (jsonText) {
          const parsed = JSON.parse(jsonText.trim());
          if (parsed.asset) setAsset(parsed.asset.toUpperCase());
          if (parsed.direction) setDirection(parsed.direction);
          if (parsed.setup) setSetup(parsed.setup.toUpperCase());
          if (parsed.pnl !== undefined) setPnl(parsed.pnl);
          if (parsed.notes) setNotes(parsed.notes);
        }
      } catch (err) {
        console.error('Gemini API parse failed, using local parser:', err);
        parseLocally(aiText);
      }
    } else {
      parseLocally(aiText);
    }
    setIsParsing(false);
  };

  const handleAdd = () => {
    if (!selectedDateStr || pnl === 0) return;
    setTrades(prev => [...prev, { 
      id: Date.now().toString(), 
      date: selectedDateStr, 
      asset: asset.toUpperCase().trim(), 
      direction, 
      setup: setup.toUpperCase().trim(), 
      pnl, 
      notes 
    }]);
    
    // Reset form states
    setPnl(0); 
    setNotes(''); 
    setAsset(''); 
    setSetup(''); 
    setDirection('LONG');
    setAiText('');
  };

  // Build weeks array
  const weeks: (number | null)[][] = [];
  let week: (number | null)[] = Array(startOffset).fill(null);
  for (let i = 1; i <= daysInMonth; i++) {
    week.push(i);
    if (week.length === 7) { weeks.push(week); week = []; }
  }
  if (week.length > 0) { while (week.length < 7) week.push(null); weeks.push(week); }

  const fmt = (v: number) => {
    const abs = Math.abs(v).toLocaleString();
    return v >= 0 ? `+$${abs}` : `-$${abs}`;
  };

  const dayNames = lang === 'vi' ? DAYS_VI : DAYS_EN;

  return (
    <div style={{ 
      padding: isMobile ? '10px' : '20px 28px', 
      width: '100%', 
      height: isMobile ? 'auto' : 'calc(100vh - 90px)', 
      display: 'flex', 
      flexDirection: 'column', 
      gap: isMobile ? '12px' : '16px', 
      boxSizing: 'border-box',
      paddingBottom: isMobile ? '40px' : '0'
    }}>

      {/* ═══ TOP STATS BAR ═══ */}
      <div style={{ 
        display: 'flex', 
        flexDirection: isMobile ? 'column' : 'row', 
        justifyContent: 'space-between', 
        gap: '12px', 
        alignItems: isMobile ? 'stretch' : 'center' 
      }}>
        {/* Stats cards */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(4, 1fr)', 
          gap: isMobile ? '8px' : '12px' 
        }}>
          {/* Monthly PnL */}
          <div style={{
            background: monthlyPnl >= 0
              ? 'linear-gradient(135deg, rgba(0,240,255,0.08) 0%, rgba(0,240,255,0.03) 100%)'
              : 'linear-gradient(135deg, rgba(244,114,182,0.08) 0%, rgba(244,114,182,0.03) 100%)',
            border: `1px solid ${monthlyPnl >= 0 ? 'rgba(0,240,255,0.2)' : 'rgba(244,114,182,0.2)'}`,
            borderRadius: 'var(--radius-md)',
            padding: isMobile ? '8px 12px' : '14px 20px',
            display: 'flex', alignItems: 'center', gap: isMobile ? '8px' : '12px',
          }}>
            <div style={{ width: isMobile ? '28px' : '36px', height: isMobile ? '28px' : '36px', borderRadius: '50%', background: monthlyPnl >= 0 ? 'rgba(0,240,255,0.1)' : 'rgba(244,114,182,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <DollarSign size={isMobile ? 14 : 18} color={monthlyPnl >= 0 ? 'var(--primary)' : 'var(--pink)'} />
            </div>
            <div>
              <div style={{ fontSize: '0.62rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', letterSpacing: '0.08em', marginBottom: '2px' }}>
                {lang === 'vi' ? 'THÁNG NÀY' : 'THIS MONTH'}
              </div>
              <div style={{
                fontSize: isMobile ? '0.95rem' : '1.3rem', fontWeight: 900, fontFamily: 'var(--font-mono)',
                color: monthlyPnl >= 0 ? 'var(--primary)' : 'var(--pink)',
                textShadow: `0 0 16px ${monthlyPnl >= 0 ? 'rgba(0,240,255,0.4)' : 'rgba(244,114,182,0.4)'}`
              }}>
                {monthlyPnl !== 0 ? fmt(monthlyPnl) : '$0'}
              </div>
            </div>
          </div>
          {/* Win days */}
          <div style={{ background: 'rgba(0,255,157,0.05)', border: '1px solid rgba(0,255,157,0.15)', borderRadius: 'var(--radius-md)', padding: isMobile ? '8px 12px' : '14px 20px', display: 'flex', alignItems: 'center', gap: isMobile ? '8px' : '12px' }}>
            <div style={{ width: isMobile ? '28px' : '36px', height: isMobile ? '28px' : '36px', borderRadius: '50%', background: 'rgba(0,255,157,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <TrendingUp size={isMobile ? 14 : 18} color="var(--emerald)" />
            </div>
            <div>
              <div style={{ fontSize: '0.62rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', letterSpacing: '0.08em', marginBottom: '2px' }}>{lang === 'vi' ? 'NGÀY LỜI' : 'WIN DAYS'}</div>
              <div style={{ fontSize: isMobile ? '0.95rem' : '1.3rem', fontWeight: 900, color: 'var(--emerald)', fontFamily: 'var(--font-mono)' }}>{winDays}</div>
            </div>
          </div>
          {/* Loss days */}
          <div style={{ background: 'rgba(244,114,182,0.05)', border: '1px solid rgba(244,114,182,0.15)', borderRadius: 'var(--radius-md)', padding: isMobile ? '8px 12px' : '14px 20px', display: 'flex', alignItems: 'center', gap: isMobile ? '8px' : '12px' }}>
            <div style={{ width: isMobile ? '28px' : '36px', height: isMobile ? '28px' : '36px', borderRadius: '50%', background: 'rgba(244,114,182,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <TrendingDown size={isMobile ? 14 : 18} color="var(--pink)" />
            </div>
            <div>
              <div style={{ fontSize: '0.62rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', letterSpacing: '0.08em', marginBottom: '2px' }}>{lang === 'vi' ? 'NGÀY LỖ' : 'LOSS DAYS'}</div>
              <div style={{ fontSize: isMobile ? '0.95rem' : '1.3rem', fontWeight: 900, color: 'var(--pink)', fontFamily: 'var(--font-mono)' }}>{lossDays}</div>
            </div>
          </div>
          {/* Total entries */}
          <div style={{ background: 'rgba(185,0,255,0.05)', border: '1px solid rgba(185,0,255,0.15)', borderRadius: 'var(--radius-md)', padding: isMobile ? '8px 12px' : '14px 20px', display: 'flex', alignItems: 'center', gap: isMobile ? '8px' : '12px' }}>
            <div style={{ width: isMobile ? '28px' : '36px', height: isMobile ? '28px' : '36px', borderRadius: '50%', background: 'rgba(185,0,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <BarChart2 size={isMobile ? 14 : 18} color="var(--purple)" />
            </div>
            <div>
              <div style={{ fontSize: '0.62rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', letterSpacing: '0.08em', marginBottom: '2px' }}>{lang === 'vi' ? 'TỔNG LỢI' : 'ENTRIES'}</div>
              <div style={{ fontSize: isMobile ? '0.95rem' : '1.3rem', fontWeight: 900, color: 'var(--purple)', fontFamily: 'var(--font-mono)' }}>{monthTrades.length}</div>
            </div>
          </div>
        </div>

        {/* Month Navigation */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px', marginTop: isMobile ? '8px' : '0' }}>
          <div style={{ display: 'flex', gap: '6px' }}>
            <button onClick={() => setCurrentDate(new Date(year, month - 1, 1))} style={{ width: '32px', height: '32px', background: 'var(--bg-card)', border: '1px solid var(--bg-card-border)', color: 'var(--text-secondary)', borderRadius: 'var(--radius-sm)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <ChevronLeft size={16} />
            </button>
            <button onClick={() => setCurrentDate(new Date(year, month + 1, 1))} style={{ width: '32px', height: '32px', background: 'var(--bg-card)', border: '1px solid var(--bg-card-border)', color: 'var(--text-secondary)', borderRadius: 'var(--radius-sm)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <ChevronRight size={16} />
            </button>
          </div>
          
          <div style={{ textAlign: 'center', flex: 1, minWidth: '90px' }}>
            <div style={{ fontSize: '0.6rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', letterSpacing: '0.1em' }}>{year}</div>
            <div style={{ fontSize: '0.92rem', fontWeight: 800, color: '#FFF' }}>{lang === 'vi' ? MONTHS_VI[month] : MONTHS_EN[month]}</div>
          </div>

          <button onClick={() => setCurrentDate(new Date())} style={{ padding: '6px 10px', background: 'rgba(0,240,255,0.05)', border: '1px solid rgba(0,240,255,0.25)', color: 'var(--primary)', borderRadius: 'var(--radius-sm)', cursor: 'pointer', fontSize: '0.75rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '4px' }}>
            <Calendar size={12} />{lang === 'vi' ? 'Hôm Nay' : 'Today'}
          </button>
        </div>
      </div>

      {/* ═══ CALENDAR GRID ═══ */}
      <div style={{ 
        flex: 1, 
        display: 'flex', 
        flexDirection: 'column', 
        borderRadius: 'var(--radius-lg)', 
        overflow: 'hidden', 
        border: '1px solid var(--bg-card-border)', 
        minHeight: isMobile ? '400px' : '0' 
      }}>
        {/* Day Headers */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: isMobile ? 'repeat(7, 1fr)' : 'repeat(7, 1fr) 110px', 
          background: 'rgba(6,11,25,0.8)' 
        }}>
          {dayNames.map((d, i) => (
            <div key={d} style={{ padding: '8px 0', textAlign: 'center', fontSize: '0.68rem', fontWeight: 700, color: i >= 5 ? 'rgba(244,114,182,0.7)' : 'var(--text-muted)', fontFamily: 'var(--font-mono)', letterSpacing: '0.08em', borderBottom: '1px solid var(--bg-card-border)', borderRight: '1px solid var(--bg-card-border)' }}>
              {d}
            </div>
          ))}
          {!isMobile && (
            <div style={{ padding: '10px 0', textAlign: 'center', fontSize: '0.72rem', fontWeight: 800, color: 'var(--primary)', fontFamily: 'var(--font-mono)', letterSpacing: '0.08em', borderBottom: '1px solid var(--bg-card-border)', background: 'rgba(0,240,255,0.03)' }}>
              {lang === 'vi' ? 'TUẦN' : 'WEEK'}
            </div>
          )}
        </div>

        {/* Calendar Weeks */}
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, background: 'var(--bg-dark)' }}>
          {weeks.map((wk, wi) => {
            const weekPnl = wk.reduce<number>((s, d) => {
              if (!d) return s;
              return s + getDayPnl(`${year}-${String(month+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`);
            }, 0);
            return (
              <div key={wi} style={{ 
                display: 'grid', 
                gridTemplateColumns: isMobile ? 'repeat(7, 1fr)' : 'repeat(7, 1fr) 110px', 
                flex: 1, 
                borderBottom: wi < weeks.length - 1 ? '1px solid var(--bg-card-border)' : 'none' 
              }}>
                {wk.map((d, di) => {
                  if (!d) return (
                    <div key={`e${wi}-${di}`} style={{ borderRight: '1px solid var(--bg-card-border)', background: 'rgba(0,0,0,0.2)' }} />
                  );
                  const ds = `${year}-${String(month+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`;
                  const dayPnl = getDayPnl(ds);
                  const count = getEntries(ds).length;
                  const isToday = ds === todayStr;
                  const isSel = ds === selectedDateStr;
                  const isWeekend = di >= 5;

                  let cellBg = 'transparent';
                  if (isSel) cellBg = 'rgba(0,240,255,0.08)';
                  else if (dayPnl > 0) cellBg = 'rgba(0,240,255,0.03)';
                  else if (dayPnl < 0) cellBg = 'rgba(244,114,182,0.03)';
                  else if (isWeekend) cellBg = 'rgba(0,0,0,0.1)';

                  return (
                    <div key={ds} onClick={() => setSelectedDateStr(ds)}
                      style={{ 
                        borderRight: '1px solid var(--bg-card-border)', 
                        padding: isMobile ? '6px 4px' : '10px', 
                        cursor: 'pointer', 
                        background: cellBg, 
                        display: 'flex', 
                        flexDirection: 'column', 
                        gap: isMobile ? '4px' : '6px', 
                        transition: 'background 0.2s', 
                        position: 'relative',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        minHeight: isMobile ? '55px' : 'auto'
                      }}>
                      
                      {/* Day number */}
                      <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{
                          width: isMobile ? '20px' : '28px', 
                          height: isMobile ? '20px' : '28px', 
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          borderRadius: '50%', fontSize: isMobile ? '0.75rem' : '0.9rem', fontWeight: 800,
                          background: isToday ? 'var(--primary)' : 'transparent',
                          color: isToday ? 'var(--bg-deep)' : isWeekend ? 'rgba(244,114,182,0.5)' : 'rgba(255,255,255,0.4)',
                          boxShadow: isToday ? '0 0 14px rgba(0,240,255,0.7)' : 'none',
                          flexShrink: 0
                        }}>{d}</span>
                        {count > 0 && !isMobile && (
                          <div style={{ display: 'flex', gap: '3px', marginTop: '4px' }}>
                            {Array.from({ length: Math.min(count, 3) }).map((_, i) => (
                              <div key={i} style={{ width: '5px', height: '5px', borderRadius: '50%', background: dayPnl >= 0 ? 'var(--primary)' : 'var(--pink)', boxShadow: `0 0 4px ${dayPnl >= 0 ? 'var(--primary)' : 'var(--pink)'}` }} />
                            ))}
                          </div>
                        )}
                      </div>

                      {/* PnL display */}
                      {dayPnl !== 0 && (
                        <div style={{
                          marginTop: 'auto',
                          padding: isMobile ? '1px 2px' : '3px 7px',
                          borderRadius: '4px',
                          background: dayPnl > 0 ? 'rgba(0,240,255,0.08)' : 'rgba(244,114,182,0.08)',
                          border: `1px solid ${dayPnl > 0 ? 'rgba(0,240,255,0.2)' : 'rgba(244,114,182,0.2)'}`,
                          fontSize: isMobile ? '0.58rem' : '0.78rem', fontWeight: 800, fontFamily: 'var(--font-mono)',
                          color: dayPnl > 0 ? 'var(--primary)' : 'var(--pink)',
                          textAlign: 'center',
                          width: '100%',
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis'
                        }}>
                          {isMobile ? (dayPnl > 0 ? `+$${Math.round(dayPnl/100)/10}k` : `-$${Math.round(Math.abs(dayPnl)/100)/10}k`).replace('.0k', 'k') : fmt(dayPnl)}
                        </div>
                      )}
                    </div>
                  );
                })}

                {/* Weekly Summary (Desktop Only) */}
                {!isMobile && (
                  <div style={{
                    background: 'rgba(0,240,255,0.02)',
                    borderLeft: '1px solid rgba(0,240,255,0.12)',
                    display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '4px',
                    padding: '8px'
                  }}>
                    {weekPnl !== 0 ? (
                      <>
                        <div style={{ color: weekPnl > 0 ? 'var(--primary)' : 'var(--pink)', opacity: 0.7 }}>
                          {weekPnl > 0 ? <TrendingUp size={14}/> : <TrendingDown size={14}/>}
                        </div>
                        <div style={{
                          fontSize: '0.82rem', fontWeight: 800, fontFamily: 'var(--font-mono)',
                          color: weekPnl > 0 ? 'var(--primary)' : 'var(--pink)',
                          textShadow: `0 0 10px ${weekPnl > 0 ? 'rgba(0,240,255,0.4)' : 'rgba(244,114,182,0.4)'}`,
                          textAlign: 'center'
                        }}>
                          {fmt(weekPnl)}
                        </div>
                      </>
                    ) : (
                      <span style={{ color: 'rgba(255,255,255,0.08)', fontSize: '1.2rem', lineHeight: 1 }}>—</span>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* ═══ SIDE DRAWER ═══ */}
      {selectedDateStr && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 9999, display: 'flex' }} onClick={() => setSelectedDateStr(null)}>
          <div style={{ flex: 1, background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(6px)' }} />
          <div onClick={e => e.stopPropagation()} style={{
            width: isMobile ? '100%' : '360px',
            maxWidth: '360px',
            background: 'linear-gradient(160deg, #0D1635 0%, #060B19 100%)',
            borderLeft: '1px solid rgba(0,240,255,0.2)',
            display: 'flex', flexDirection: 'column',
            boxShadow: '-30px 0 60px rgba(0,0,0,0.5)',
            animation: 'fade-in-up 0.35s cubic-bezier(0.16,1,0.3,1)'
          }}>
            {/* Drawer header */}
            <div style={{ padding: '22px 20px', borderBottom: '1px solid rgba(0,240,255,0.1)', background: 'rgba(0,240,255,0.02)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                <div style={{ fontSize: '0.65rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', letterSpacing: '0.1em' }}>
                  {selectedDateStr}
                </div>
                <button onClick={() => setSelectedDateStr(null)} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '6px', color: 'var(--text-secondary)', cursor: 'pointer', padding: '5px', display: 'flex' }}>
                  <X size={15}/>
                </button>
              </div>
              {(() => {
                const dp = getDayPnl(selectedDateStr);
                return dp !== 0 ? (
                  <div style={{ fontSize: '2rem', fontWeight: 900, fontFamily: 'var(--font-mono)', color: dp > 0 ? 'var(--primary)' : 'var(--pink)', textShadow: `0 0 20px ${dp > 0 ? 'rgba(0,240,255,0.5)' : 'rgba(244,114,182,0.5)'}`, lineHeight: 1 }}>
                    {fmt(dp)}
                  </div>
                ) : (
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{lang === 'vi' ? 'Chưa có dữ liệu' : 'No entries'}</div>
                );
              })()}
            </div>

            {/* Form */}
            <div style={{ padding: '18px 20px', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              
              {/* ══ AI COPILOT SECTION ══ */}
              <div style={{ background: 'rgba(0, 240, 255, 0.03)', padding: '12px', borderRadius: 'var(--radius-md)', border: '1px solid rgba(0, 240, 255, 0.15)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.72rem', color: 'var(--primary)', fontWeight: 800, fontFamily: 'var(--font-mono)', letterSpacing: '0.05em' }}>
                    <span style={{ display: 'inline-block', width: '6px', height: '6px', borderRadius: '50%', background: 'var(--primary)', boxShadow: '0 0 8px var(--primary)' }}></span>
                    GEMINI AI ASSISTANT
                  </div>
                  <button onClick={() => setShowAiConfig(!showAiConfig)} style={{ fontSize: '0.65rem', color: 'var(--text-secondary)', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '2px' }}>
                    {geminiKey ? '🔑 Có Key' : '⚙️ Nhập Key'}
                  </button>
                </div>

                {showAiConfig && (
                  <div style={{ background: 'rgba(0,0,0,0.4)', padding: '10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', flexDirection: 'column', gap: '6px', marginTop: '4px' }}>
                    <div style={{ fontSize: '0.62rem', color: 'var(--text-muted)' }}>CẤU HÌNH API KEY (Lưu cục bộ)</div>
                    <input
                      type="password"
                      placeholder="Dán Gemini API Key vào đây..."
                      value={geminiKey}
                      onChange={e => {
                        setGeminiKey(e.target.value);
                        localStorage.setItem('ict_gemini_api_key', e.target.value);
                      }}
                      style={{ width: '100%', padding: '6px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(0,0,0,0.5)', color: '#FFF', fontSize: '0.72rem', outline: 'none' }}
                    />
                    <div style={{ fontSize: '0.58rem', color: 'var(--text-muted)', lineHeight: '1.3' }}>
                      API Key được lưu bảo mật trong Trình duyệt của bạn. Lấy key miễn phí tại Google AI Studio.
                    </div>
                  </div>
                )}

                <textarea
                  placeholder={lang === 'vi' ? "Nhập nhật ký tự do, ví dụ: 'Long NQ thắng 1200$ theo mô hình OTE quét SSL ngày hôm nay'..." : "Enter unstructured trade details..."}
                  value={aiText}
                  onChange={e => setAiText(e.target.value)}
                  rows={3}
                  style={{
                    width: '100%', boxSizing: 'border-box',
                    background: 'rgba(0,0,0,0.3)',
                    border: '1px solid rgba(255,255,255,0.07)',
                    color: '#FFF',
                    padding: '8px 12px', borderRadius: '8px',
                    fontSize: '0.8rem', outline: 'none', resize: 'none',
                    lineHeight: '1.4'
                  }}
                />

                <button 
                  onClick={handleAiParse} 
                  disabled={isParsing || !aiText.trim()} 
                  style={{
                    background: 'var(--primary-gradient)',
                    border: 'none',
                    color: '#000',
                    padding: '8px',
                    borderRadius: '8px',
                    fontWeight: 800,
                    fontSize: '0.75rem',
                    cursor: (isParsing || !aiText.trim()) ? 'not-allowed' : 'pointer',
                    opacity: (isParsing || !aiText.trim()) ? 0.6 : 1,
                    transition: 'all 0.2s',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px'
                  }}
                >
                  {isParsing ? (
                    <span>{lang === 'vi' ? 'Đang phân tích...' : 'Analyzing...'}</span>
                  ) : (
                    <>
                      <Code size={14} />
                      <span>{lang === 'vi' ? 'Phân Tích & Tự Điền Lệnh' : 'Analyze & Autofill Trade'}</span>
                    </>
                  )}
                </button>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '6px' }}>
                <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', letterSpacing: '0.08em' }}>
                  {lang === 'vi' ? 'CHI TIẾT LỆNH GIAO DỊCH' : 'TRADE DETAILS'}
                </div>

                {/* Direction Toggle & Asset Input */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '10px' }}>
                  {/* Direction Toggle */}
                  <div style={{ display: 'flex', background: 'rgba(0,0,0,0.3)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.08)', padding: '2px' }}>
                    <button
                      onClick={() => setDirection('LONG')}
                      style={{
                        flex: 1,
                        background: direction === 'LONG' ? 'rgba(0, 240, 255, 0.15)' : 'transparent',
                        border: 'none',
                        borderRadius: '6px',
                        color: direction === 'LONG' ? 'var(--primary)' : 'var(--text-secondary)',
                        fontSize: '0.75rem',
                        fontWeight: 800,
                        padding: '6px 0',
                        cursor: 'pointer'
                      }}
                    >
                      LONG
                    </button>
                    <button
                      onClick={() => setDirection('SHORT')}
                      style={{
                        flex: 1,
                        background: direction === 'SHORT' ? 'rgba(244, 114, 182, 0.15)' : 'transparent',
                        border: 'none',
                        borderRadius: '6px',
                        color: direction === 'SHORT' ? 'var(--pink)' : 'var(--text-secondary)',
                        fontSize: '0.75rem',
                        fontWeight: 800,
                        padding: '6px 0',
                        cursor: 'pointer'
                      }}
                    >
                      SHORT
                    </button>
                  </div>

                  {/* Asset Input */}
                  <input
                    type="text"
                    placeholder="Asset (e.g. NQ, BTC)"
                    value={asset}
                    onChange={e => setAsset(e.target.value.toUpperCase())}
                    style={{
                      width: '100%', boxSizing: 'border-box',
                      background: 'rgba(0,0,0,0.3)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      color: '#FFF',
                      padding: '6px 12px', borderRadius: '8px',
                      fontSize: '0.8rem', outline: 'none', fontWeight: 700
                    }}
                  />
                </div>

                {/* Setup & PnL Input */}
                <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '10px' }}>
                  {/* Setup Input */}
                  <input
                    type="text"
                    placeholder="Setup (e.g. OTE, FVG)"
                    value={setup}
                    onChange={e => setSetup(e.target.value.toUpperCase())}
                    style={{
                      width: '100%', boxSizing: 'border-box',
                      background: 'rgba(0,0,0,0.3)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      color: '#FFF',
                      padding: '6px 12px', borderRadius: '8px',
                      fontSize: '0.8rem', outline: 'none', fontWeight: 700
                    }}
                  />

                  {/* PnL Input */}
                  <input
                    type="number"
                    placeholder={lang === 'vi' ? 'PnL ($) e.g. -200' : 'PnL ($) e.g. 1500'}
                    value={pnl || ''}
                    onChange={e => setPnl(Number(e.target.value))}
                    style={{
                      width: '100%', boxSizing: 'border-box',
                      background: 'rgba(0,0,0,0.3)',
                      border: `1px solid ${pnl > 0 ? 'rgba(0, 240, 255, 0.3)' : pnl < 0 ? 'rgba(244, 114, 182, 0.3)' : 'rgba(255,255,255,0.08)'}`,
                      color: pnl > 0 ? 'var(--primary)' : pnl < 0 ? 'var(--pink)' : '#FFF',
                      padding: '6px 12px', borderRadius: '8px',
                      fontSize: '0.8rem', outline: 'none', fontWeight: 800, textAlign: 'center',
                      fontFamily: 'var(--font-mono)'
                    }}
                  />
                </div>

                {/* Notes Input */}
                <textarea
                  placeholder={lang === 'vi' ? 'Ghi chú thêm...' : 'Additional notes...'}
                  value={notes}
                  onChange={e => setNotes(e.target.value)}
                  rows={2}
                  style={{
                    width: '100%', boxSizing: 'border-box',
                    background: 'rgba(0,0,0,0.3)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    color: 'var(--text-primary)',
                    padding: '8px 12px', borderRadius: '8px',
                    fontSize: '0.8rem', outline: 'none', resize: 'none',
                    lineHeight: '1.4'
                  }}
                />
              </div>

              <button onClick={handleAdd} disabled={pnl === 0} style={{
                width: '100%',
                background: pnl !== 0 ? (pnl > 0 ? 'rgba(0,240,255,0.08)' : 'rgba(244,114,182,0.08)') : 'rgba(255,255,255,0.02)',
                border: `1px solid ${pnl !== 0 ? (pnl > 0 ? 'rgba(0,240,255,0.3)' : 'rgba(244,114,182,0.3)') : 'rgba(255,255,255,0.06)'}`,
                color: pnl !== 0 ? (pnl > 0 ? 'var(--primary)' : 'var(--pink)') : 'var(--text-muted)',
                padding: '10px', borderRadius: '8px',
                cursor: pnl !== 0 ? 'pointer' : 'not-allowed',
                fontWeight: 800, fontSize: '0.82rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                transition: 'all 0.2s', marginTop: '6px'
              }}>
                <Plus size={15}/> {lang === 'vi' ? 'Lưu Lệnh Vào Nhật Ký' : 'Save Entry to Journal'}
              </button>
            </div>

            {/* Entry list */}
            <div style={{ flex: 1, overflowY: 'auto', padding: '14px 20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {getEntries(selectedDateStr).length === 0 ? (
                <div style={{ textAlign: 'center', color: 'rgba(255,255,255,0.1)', fontSize: '0.85rem', marginTop: '24px', fontStyle: 'italic' }}>
                  {lang === 'vi' ? '— Chưa có mục nào —' : '— No entries yet —'}
                </div>
              ) : getEntries(selectedDateStr).map(t => (
                <div key={t.id} style={{
                  background: t.pnl >= 0 ? 'rgba(0,240,255,0.04)' : 'rgba(244,114,182,0.04)',
                  border: `1px solid ${t.pnl >= 0 ? 'rgba(0,240,255,0.12)' : 'rgba(244,114,182,0.12)'}`,
                  borderRadius: '8px', padding: '12px 14px',
                  borderLeft: `3px solid ${t.pnl >= 0 ? 'var(--primary)' : 'var(--pink)'}`
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <span style={{
                        fontSize: '0.62rem', fontWeight: 800,
                        background: t.direction === 'LONG' ? 'rgba(0, 240, 255, 0.12)' : 'rgba(244, 114, 182, 0.12)',
                        color: t.direction === 'LONG' ? 'var(--primary)' : 'var(--pink)',
                        padding: '2px 5px', borderRadius: '4px', fontFamily: 'var(--font-mono)'
                      }}>{t.direction}</span>
                      {t.asset && (
                        <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#FFF' }}>{t.asset}</span>
                      )}
                      {t.setup && (
                        <span style={{ fontSize: '0.68rem', color: 'var(--text-secondary)', background: 'rgba(255,255,255,0.04)', padding: '2px 5px', borderRadius: '4px' }}>{t.setup}</span>
                      )}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{
                        fontSize: '0.92rem', fontWeight: 900, fontFamily: 'var(--font-mono)',
                        color: t.pnl >= 0 ? 'var(--primary)' : 'var(--pink)'
                      }}>{fmt(t.pnl)}</span>
                      <button onClick={() => setTrades(prev => prev.filter(x => x.id !== t.id))} style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.15)', cursor: 'pointer', padding: '2px', display: 'flex', transition: 'color 0.2s' }}>
                        <Trash2 size={14}/>
                      </button>
                    </div>
                  </div>
                  {t.notes && <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: '1.4' }}>{t.notes}</p>}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
