import React, { useState } from 'react';
import { INDICATOR_DATA } from '../data/indicatorData';
import { Code, Copy, Check, ExternalLink, HelpCircle, Info } from 'lucide-react';

export const IndicatorCenter: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(INDICATOR_DATA.pineScriptCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* Header Banner */}
      <div className="glass-card" style={{ padding: '32px' }}>
        <div className="badge badge-purple" style={{ marginBottom: '12px' }}>
          Pine Script v5 Indicator
        </div>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 800, marginBottom: '12px', color: '#FFF' }}>
          {INDICATOR_DATA.name}
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '24px' }}>
          {INDICATOR_DATA.description}
        </p>

        {/* Feature List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {INDICATOR_DATA.features.map((feat, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.92rem', color: 'var(--text-main)' }}>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#8B5CF6', marginTop: '8px', flexShrink: 0 }} />
              <span>{feat}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Code Display Area */}
      <div className="code-block-container">
        <div className="code-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', color: '#94A3B8', fontWeight: 600 }}>
            <Code size={16} color="#A78BFA" />
            <span>Indicator TradingView (PineScript v5)</span>
          </div>

          <button
            onClick={handleCopyCode}
            className="btn-primary"
            style={{
              padding: '6px 14px',
              fontSize: '0.85rem',
              background: copied ? 'linear-gradient(135deg, #10B981, #059669)' : 'linear-gradient(135deg, #8B5CF6, #7C3AED)'
            }}
          >
            {copied ? <Check size={14} /> : <Copy size={14} />}
            <span>{copied ? 'Đã Sao Chép Code!' : 'Sao Chép Mã PineScript'}</span>
          </button>
        </div>

        <pre className="code-content">
          <code>{INDICATOR_DATA.pineScriptCode}</code>
        </pre>
      </div>

      {/* TradingView Usage Instructions */}
      <div className="glass-card" style={{ padding: '24px' }}>
        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 700, marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <HelpCircle size={18} color="var(--primary)" />
          Hướng Dẫn Cài Đặt Vào TradingView (3 Bước Đơn Giản)
        </h3>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px' }}>
          <div style={{ background: 'rgba(255,255,255,0.02)', padding: '16px', borderRadius: 'var(--radius-md)', border: '1px solid rgba(255,255,255,0.05)' }}>
            <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '4px' }}>BƯỚC 1</div>
            <div style={{ fontSize: '0.9rem', fontWeight: 600, color: '#FFF' }}>Mở Pine Editor trên TradingView</div>
            <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginTop: '4px' }}>
              Mở biểu đồ TradingView $\rightarrow$ Nhấp vào tab <b>Pine Editor</b> ở góc dưới màn hình.
            </p>
          </div>

          <div style={{ background: 'rgba(255,255,255,0.02)', padding: '16px', borderRadius: 'var(--radius-md)', border: '1px solid rgba(255,255,255,0.05)' }}>
            <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '4px' }}>BƯỚC 2</div>
            <div style={{ fontSize: '0.9rem', fontWeight: 600, color: '#FFF' }}>Dán mã PineScript</div>
            <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginTop: '4px' }}>
              Xóa hết mã mặc định, dán đoạn mã vừa sao chép ở trên vào Pine Editor.
            </p>
          </div>

          <div style={{ background: 'rgba(255,255,255,0.02)', padding: '16px', borderRadius: 'var(--radius-md)', border: '1px solid rgba(255,255,255,0.05)' }}>
            <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '4px' }}>BƯỚC 3</div>
            <div style={{ fontSize: '0.9rem', fontWeight: 600, color: '#FFF' }}>Lưu & Thêm vào biểu đồ</div>
            <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginTop: '4px' }}>
              Nhấp <b>Save</b> $\rightarrow$ Nhấp <b>Add to chart (Thêm vào biểu đồ)</b> để sử dụng.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
