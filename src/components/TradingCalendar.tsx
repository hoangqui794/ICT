import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Plus, X, Trash2, TrendingUp, TrendingDown, DollarSign, BarChart2, Calendar } from 'lucide-react';

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
  const [pnl, setPnl] = useState<number>(0);
  const [notes, setNotes] = useState('');

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

  const handleAdd = () => {
    if (!selectedDateStr || pnl === 0) return;
    setTrades(prev => [...prev, { id: Date.now().toString(), date: selectedDateStr, asset: '', direction: 'LONG', setup: '', pnl, notes }]);
    setPnl(0); setNotes('');
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
    <div style={{ padding: '20px 28px', width: '100%', height: 'calc(100vh - 90px)', display: 'flex', flexDirection: 'column', gap: '16px', boxSizing: 'border-box' }}>

      {/* ═══ TOP STATS BAR ═══ */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '16px', alignItems: 'center' }}>
        {/* Stats cards */}
        <div style={{ display: 'flex', gap: '12px' }}>
          {/* Monthly PnL */}
          <div style={{
            background: monthlyPnl >= 0
              ? 'linear-gradient(135deg, rgba(0,240,255,0.08) 0%, rgba(0,240,255,0.03) 100%)'
              : 'linear-gradient(135deg, rgba(244,114,182,0.08) 0%, rgba(244,114,182,0.03) 100%)',
            border: `1px solid ${monthlyPnl >= 0 ? 'rgba(0,240,255,0.2)' : 'rgba(244,114,182,0.2)'}`,
            borderRadius: 'var(--radius-md)',
            padding: '14px 20px',
            display: 'flex', alignItems: 'center', gap: '12px',
            minWidth: '180px'
          }}>
            <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: monthlyPnl >= 0 ? 'rgba(0,240,255,0.1)' : 'rgba(244,114,182,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <DollarSign size={18} color={monthlyPnl >= 0 ? 'var(--primary)' : 'var(--pink)'} />
            </div>
            <div>
              <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', letterSpacing: '0.08em', marginBottom: '2px' }}>
                {lang === 'vi' ? 'THÁNG NÀY' : 'THIS MONTH'}
              </div>
              <div style={{
                fontSize: '1.3rem', fontWeight: 900, fontFamily: 'var(--font-mono)',
                color: monthlyPnl >= 0 ? 'var(--primary)' : 'var(--pink)',
                textShadow: `0 0 16px ${monthlyPnl >= 0 ? 'rgba(0,240,255,0.4)' : 'rgba(244,114,182,0.4)'}`
              }}>
                {monthlyPnl !== 0 ? fmt(monthlyPnl) : '$0'}
              </div>
            </div>
          </div>
          {/* Win days */}
          <div style={{ background: 'rgba(0,255,157,0.05)', border: '1px solid rgba(0,255,157,0.15)', borderRadius: 'var(--radius-md)', padding: '14px 20px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(0,255,157,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <TrendingUp size={18} color="var(--emerald)" />
            </div>
            <div>
              <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', letterSpacing: '0.08em', marginBottom: '2px' }}>{lang === 'vi' ? 'NGÀY LỜI' : 'WIN DAYS'}</div>
              <div style={{ fontSize: '1.3rem', fontWeight: 900, color: 'var(--emerald)', fontFamily: 'var(--font-mono)' }}>{winDays}</div>
            </div>
          </div>
          {/* Loss days */}
          <div style={{ background: 'rgba(244,114,182,0.05)', border: '1px solid rgba(244,114,182,0.15)', borderRadius: 'var(--radius-md)', padding: '14px 20px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(244,114,182,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <TrendingDown size={18} color="var(--pink)" />
            </div>
            <div>
              <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', letterSpacing: '0.08em', marginBottom: '2px' }}>{lang === 'vi' ? 'NGÀY LỖ' : 'LOSS DAYS'}</div>
              <div style={{ fontSize: '1.3rem', fontWeight: 900, color: 'var(--pink)', fontFamily: 'var(--font-mono)' }}>{lossDays}</div>
            </div>
          </div>
          {/* Total entries */}
          <div style={{ background: 'rgba(185,0,255,0.05)', border: '1px solid rgba(185,0,255,0.15)', borderRadius: 'var(--radius-md)', padding: '14px 20px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(185,0,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <BarChart2 size={18} color="var(--purple)" />
            </div>
            <div>
              <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', letterSpacing: '0.08em', marginBottom: '2px' }}>{lang === 'vi' ? 'TỔNG LỢI' : 'ENTRIES'}</div>
              <div style={{ fontSize: '1.3rem', fontWeight: 900, color: 'var(--purple)', fontFamily: 'var(--font-mono)' }}>{monthTrades.length}</div>
            </div>
          </div>
        </div>

        {/* Month Navigation */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <button onClick={() => setCurrentDate(new Date(year, month - 1, 1))} style={{ width: '36px', height: '36px', background: 'var(--bg-card)', border: '1px solid var(--bg-card-border)', color: 'var(--text-secondary)', borderRadius: 'var(--radius-sm)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s' }}>
            <ChevronLeft size={18} />
          </button>
          <div style={{ textAlign: 'center', minWidth: '140px' }}>
            <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', letterSpacing: '0.1em', marginBottom: '2px' }}>{year}</div>
            <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#FFF' }}>{lang === 'vi' ? MONTHS_VI[month] : MONTHS_EN[month]}</div>
          </div>
          <button onClick={() => setCurrentDate(new Date(year, month + 1, 1))} style={{ width: '36px', height: '36px', background: 'var(--bg-card)', border: '1px solid var(--bg-card-border)', color: 'var(--text-secondary)', borderRadius: 'var(--radius-sm)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s' }}>
            <ChevronRight size={18} />
          </button>
          <button onClick={() => setCurrentDate(new Date())} style={{ padding: '6px 14px', background: 'rgba(0,240,255,0.05)', border: '1px solid rgba(0,240,255,0.25)', color: 'var(--primary)', borderRadius: 'var(--radius-sm)', cursor: 'pointer', fontSize: '0.8rem', fontWeight: 700, transition: 'all 0.2s', display: 'flex', alignItems: 'center', gap: '5px' }}>
            <Calendar size={13} />{lang === 'vi' ? 'Hôm Nay' : 'Today'}
          </button>
        </div>
      </div>

      {/* ═══ CALENDAR GRID ═══ */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', borderRadius: 'var(--radius-lg)', overflow: 'hidden', border: '1px solid var(--bg-card-border)', minHeight: 0 }}>
        {/* Day Headers */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr) 110px', background: 'rgba(6,11,25,0.8)' }}>
          {dayNames.map((d, i) => (
            <div key={d} style={{ padding: '10px 0', textAlign: 'center', fontSize: '0.72rem', fontWeight: 700, color: i >= 5 ? 'rgba(244,114,182,0.7)' : 'var(--text-muted)', fontFamily: 'var(--font-mono)', letterSpacing: '0.08em', borderBottom: '1px solid var(--bg-card-border)', borderRight: '1px solid var(--bg-card-border)' }}>
              {d}
            </div>
          ))}
          <div style={{ padding: '10px 0', textAlign: 'center', fontSize: '0.72rem', fontWeight: 800, color: 'var(--primary)', fontFamily: 'var(--font-mono)', letterSpacing: '0.08em', borderBottom: '1px solid var(--bg-card-border)', background: 'rgba(0,240,255,0.03)' }}>
            {lang === 'vi' ? 'TUẦN' : 'WEEK'}
          </div>
        </div>

        {/* Calendar Weeks */}
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, background: 'var(--bg-dark)' }}>
          {weeks.map((wk, wi) => {
            const weekPnl = wk.reduce<number>((s, d) => {
              if (!d) return s;
              return s + getDayPnl(`${year}-${String(month+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`);
            }, 0);
            return (
              <div key={wi} style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr) 110px', flex: 1, borderBottom: wi < weeks.length - 1 ? '1px solid var(--bg-card-border)' : 'none' }}>
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
                  if (isSel) cellBg = 'rgba(0,240,255,0.06)';
                  else if (dayPnl > 0) cellBg = 'rgba(0,240,255,0.03)';
                  else if (dayPnl < 0) cellBg = 'rgba(244,114,182,0.03)';
                  else if (isWeekend) cellBg = 'rgba(0,0,0,0.1)';

                  return (
                    <div key={ds} onClick={() => setSelectedDateStr(ds)}
                      style={{ borderRight: '1px solid var(--bg-card-border)', padding: '10px', cursor: 'pointer', background: cellBg, display: 'flex', flexDirection: 'column', gap: '6px', transition: 'background 0.2s', position: 'relative' }}>
                      
                      {/* Day number */}
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <span style={{
                          width: '28px', height: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                          borderRadius: '50%', fontSize: '0.9rem', fontWeight: 800,
                          background: isToday ? 'var(--primary)' : 'transparent',
                          color: isToday ? 'var(--bg-deep)' : isWeekend ? 'rgba(244,114,182,0.5)' : 'rgba(255,255,255,0.4)',
                          boxShadow: isToday ? '0 0 14px rgba(0,240,255,0.7)' : 'none',
                          flexShrink: 0
                        }}>{d}</span>
                        {count > 0 && (
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
                          padding: '3px 7px',
                          borderRadius: '4px',
                          background: dayPnl > 0 ? 'rgba(0,240,255,0.08)' : 'rgba(244,114,182,0.08)',
                          border: `1px solid ${dayPnl > 0 ? 'rgba(0,240,255,0.2)' : 'rgba(244,114,182,0.2)'}`,
                          fontSize: '0.78rem', fontWeight: 800, fontFamily: 'var(--font-mono)',
                          color: dayPnl > 0 ? 'var(--primary)' : 'var(--pink)',
                          textAlign: 'center',
                          textShadow: `0 0 8px ${dayPnl > 0 ? 'rgba(0,240,255,0.4)' : 'rgba(244,114,182,0.4)'}`
                        }}>
                          {fmt(dayPnl)}
                        </div>
                      )}
                    </div>
                  );
                })}

                {/* Weekly Summary */}
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
            width: '360px',
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
            <div style={{ padding: '18px 20px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
              <div style={{ marginBottom: '10px', fontSize: '0.7rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', letterSpacing: '0.08em' }}>
                {lang === 'vi' ? 'THÊM MỤC MỚI' : 'NEW ENTRY'}
              </div>
              <input
                type="number"
                placeholder={lang === 'vi' ? 'Số tiền ($)  — âm nếu lỗ' : 'Amount ($) — negative if loss'}
                value={pnl || ''}
                onChange={e => setPnl(Number(e.target.value))}
                onKeyDown={e => e.key === 'Enter' && handleAdd()}
                autoFocus
                style={{
                  width: '100%', boxSizing: 'border-box',
                  background: 'rgba(0,0,0,0.4)',
                  border: `1px solid ${pnl > 0 ? 'rgba(0,240,255,0.35)' : pnl < 0 ? 'rgba(244,114,182,0.35)' : 'rgba(255,255,255,0.08)'}`,
                  color: pnl > 0 ? 'var(--primary)' : pnl < 0 ? 'var(--pink)' : '#FFF',
                  padding: '11px 14px', borderRadius: '8px',
                  fontWeight: 900, fontSize: '1.25rem', textAlign: 'center',
                  outline: 'none', marginBottom: '10px',
                  fontFamily: 'var(--font-mono)',
                  transition: 'border-color 0.2s, color 0.2s'
                }}
              />
              <textarea
                placeholder={lang === 'vi' ? 'Ghi chú... (Enter để lưu)' : 'Notes... (Enter to save)'}
                value={notes}
                onChange={e => setNotes(e.target.value)}
                rows={2}
                style={{
                  width: '100%', boxSizing: 'border-box',
                  background: 'rgba(0,0,0,0.3)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  color: 'var(--text-primary)',
                  padding: '10px 14px', borderRadius: '8px',
                  fontSize: '0.88rem', outline: 'none', resize: 'none',
                  marginBottom: '10px', lineHeight: '1.5'
                }}
              />
              <button onClick={handleAdd} disabled={pnl === 0} style={{
                width: '100%',
                background: pnl !== 0 ? (pnl > 0 ? 'rgba(0,240,255,0.08)' : 'rgba(244,114,182,0.08)') : 'rgba(255,255,255,0.02)',
                border: `1px solid ${pnl !== 0 ? (pnl > 0 ? 'rgba(0,240,255,0.3)' : 'rgba(244,114,182,0.3)') : 'rgba(255,255,255,0.06)'}`,
                color: pnl !== 0 ? (pnl > 0 ? 'var(--primary)' : 'var(--pink)') : 'var(--text-muted)',
                padding: '10px', borderRadius: '8px',
                cursor: pnl !== 0 ? 'pointer' : 'not-allowed',
                fontWeight: 700, fontSize: '0.88rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                transition: 'all 0.2s'
              }}>
                <Plus size={15}/> {lang === 'vi' ? 'Lưu Ngay' : 'Save Entry'}
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
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: t.notes ? '6px' : 0 }}>
                    <span style={{
                      fontSize: '1rem', fontWeight: 900, fontFamily: 'var(--font-mono)',
                      color: t.pnl >= 0 ? 'var(--primary)' : 'var(--pink)'
                    }}>{fmt(t.pnl)}</span>
                    <button onClick={() => setTrades(prev => prev.filter(x => x.id !== t.id))} style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.15)', cursor: 'pointer', padding: '2px', display: 'flex', transition: 'color 0.2s' }}>
                      <Trash2 size={14}/>
                    </button>
                  </div>
                  {t.notes && <p style={{ margin: 0, fontSize: '0.83rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>{t.notes}</p>}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
