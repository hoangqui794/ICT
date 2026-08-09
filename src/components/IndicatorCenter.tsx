import React, { useState, useEffect } from 'react';
import { INDICATOR_DATA } from '../data/indicatorData';
import { Code, Copy, Check, HelpCircle } from 'lucide-react';

export const IndicatorCenter: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 960);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 960);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(INDICATOR_DATA.pineScriptCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '20px', paddingBottom: isMobile ? '40px' : '0' }}>
      {/* Header Banner */}
      <div className="glass-card" style={{ padding: isMobile ? '16px' : '32px' }}>
        <div className="badge badge-purple" style={{ marginBottom: '12px' }}>
          Pine Script v5 Indicator
        </div>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: isMobile ? '1.4rem' : '2rem', fontWeight: 800, marginBottom: '12px', color: '#FFF', lineHeight: 1.25 }}>
          {INDICATOR_DATA.name}
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: isMobile ? '0.9rem' : '1.05rem', lineHeight: 1.6, marginBottom: '20px' }}>
          {INDICATOR_DATA.description}
        </p>

        {/* Feature List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {INDICATOR_DATA.features.map((feat, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: isMobile ? '0.85rem' : '0.92rem', color: 'var(--text-primary)' }}>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#8B5CF6', marginTop: '6px', flexShrink: 0 }} />
              <span>{feat}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Code Display Area */}
      <div className="code-block-container">
        <div className="code-header" style={{ flexDirection: isMobile ? 'column' : 'row', alignItems: isMobile ? 'stretch' : 'center', gap: isMobile ? '10px' : '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: '#94A3B8', fontWeight: 600 }}>
            <Code size={16} color="#A78BFA" />
            <span>Indicator TradingView (PineScript v5)</span>
          </div>

          <button
            onClick={handleCopyCode}
            className="btn-primary"
            style={{
              padding: '6px 14px',
              fontSize: '0.8rem',
              justifyContent: 'center',
              background: copied ? 'linear-gradient(135deg, #10B981, #059669)' : 'linear-gradient(135deg, #8B5CF6, #7C3AED)',
              boxShadow: 'none'
            }}
          >
            {copied ? <Check size={14} /> : <Copy size={14} />}
            <span>{copied ? 'Đã Sao Chép Code!' : 'Sao Chép Mã PineScript'}</span>
          </button>
        </div>

        <pre className="code-content" style={{ maxHeight: isMobile ? '300px' : '450px' }}>
          <code>{INDICATOR_DATA.pineScriptCode}</code>
        </pre>
      </div>

      {/* TradingView Usage Instructions */}
      <div className="glass-card" style={{ padding: isMobile ? '16px' : '24px' }}>
        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: isMobile ? '1.05rem' : '1.2rem', fontWeight: 700, marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px', color: '#FFF' }}>
          <HelpCircle size={18} color="var(--primary)" />
          Hướng Dẫn Cài Đặt Vào TradingView (3 Bước)
        </h3>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '16px' }}>
          <div style={{ background: 'rgba(255,255,255,0.02)', padding: '14px', borderRadius: 'var(--radius-md)', border: '1px solid rgba(255,255,255,0.05)' }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '4px' }}>BƯỚC 1</div>
            <div style={{ fontSize: '0.88rem', fontWeight: 600, color: '#FFF' }}>Mở Pine Editor trên TradingView</div>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '4px', lineHeight: 1.4 }}>
              Mở biểu đồ TradingView &rarr; Nhấp vào tab <b>Pine Editor</b> ở góc dưới màn hình.
            </p>
          </div>

          <div style={{ background: 'rgba(255,255,255,0.02)', padding: '14px', borderRadius: 'var(--radius-md)', border: '1px solid rgba(255,255,255,0.05)' }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '4px' }}>BƯỚC 2</div>
            <div style={{ fontSize: '0.88rem', fontWeight: 600, color: '#FFF' }}>Dán mã PineScript</div>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '4px', lineHeight: 1.4 }}>
              Xóa hết mã mặc định, dán đoạn mã vừa sao chép ở trên vào Pine Editor.
            </p>
          </div>

          <div style={{ background: 'rgba(255,255,255,0.02)', padding: '14px', borderRadius: 'var(--radius-md)', border: '1px solid rgba(255,255,255,0.05)' }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '4px' }}>BƯỚC 3</div>
            <div style={{ fontSize: '0.88rem', fontWeight: 600, color: '#FFF' }}>Lưu & Thêm vào biểu đồ</div>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '4px', lineHeight: 1.4 }}>
              Nhấp <b>Save</b> &rarr; Nhấp <b>Add to chart (Thêm vào biểu đồ)</b> để sử dụng.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
