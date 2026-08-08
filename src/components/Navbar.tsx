import React from 'react';
import { BookOpen, Code, CheckSquare, Search, Award } from 'lucide-react';

interface NavbarProps {
  activeTab: 'roadmap' | 'lesson' | 'indicator' | 'progress' | 'journal';
  setActiveTab: (tab: 'roadmap' | 'lesson' | 'indicator' | 'progress' | 'journal') => void;
  completedCount: number;
  totalCount: number;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  lang: 'vi' | 'en';
  setLang: (lang: 'vi' | 'en') => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  completedCount,
  totalCount,
  searchQuery,
  setSearchQuery,
  lang,
  setLang
}) => {
  const percent = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

  return (
    <header className="navbar">
      <div className="navbar-inner">
        {/* Brand Logo */}
        <div className="brand-logo" onClick={() => setActiveTab('roadmap')} style={{ cursor: 'pointer' }}>
          <div className="brand-icon">
            <BookOpen size={18} color="#FFF" />
          </div>
          <div>
            <div style={{ fontSize: '1.05rem', lineHeight: '1.1', fontWeight: 800 }}>ICT Mastery</div>
            <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)', fontWeight: 500 }}>
              {lang === 'vi' ? '5 Lộ Trình Giao Dịch' : '5 Core Roadmaps'}
            </div>
          </div>
        </div>

        {/* Global Search Bar */}
        <div style={{ position: 'relative', width: '220px' }}>
          <Search size={15} color="var(--text-muted)" style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)' }} />
          <input
            type="text"
            placeholder={lang === 'vi' ? 'Tìm kiếm bài học...' : 'Search lessons...'}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              width: '100%',
              padding: '6px 10px 6px 32px',
              borderRadius: '20px',
              border: '1px solid var(--bg-card-border)',
              background: 'rgba(255,255,255,0.03)',
              color: '#FFF',
              fontSize: '0.8rem',
              outline: 'none'
            }}
          />
        </div>

        {/* Language Toggle Switcher */}
        <div className="lang-toggle-box">
          <button
            onClick={() => setLang('vi')}
            className={`lang-btn ${lang === 'vi' ? 'active' : ''}`}
          >
            🇻🇳 VI
          </button>
          <button
            onClick={() => setLang('en')}
            className={`lang-btn ${lang === 'en' ? 'active' : ''}`}
          >
            🇬🇧 EN
          </button>
        </div>

        {/* Compact Navigation Bar */}
        <nav className="nav-links">
          <button
            className={`nav-btn ${activeTab === 'roadmap' ? 'active' : ''}`}
            onClick={() => setActiveTab('roadmap')}
            title={lang === 'vi' ? '5 Lộ Trình Học Tập' : '5 Core Roadmaps'}
          >
            <BookOpen size={15} />
            <span>{lang === 'vi' ? '5 Lộ Trình' : 'Roadmaps'}</span>
          </button>

          <button
            className={`nav-btn ${activeTab === 'lesson' ? 'active' : ''}`}
            onClick={() => setActiveTab('lesson')}
            title={lang === 'vi' ? 'Bài Học & Sơ Đồ Biểu Đồ' : 'Lessons & Diagrams'}
          >
            <CheckSquare size={15} />
            <span>{lang === 'vi' ? 'Bài Học' : 'Lessons'}</span>
          </button>

          <button
            className={`nav-btn ${activeTab === 'journal' ? 'active' : ''}`}
            onClick={() => setActiveTab('journal')}
            title={lang === 'vi' ? 'Nhật Ký Giao Dịch' : 'Trading Journal'}
          >
            <BookOpen size={15} />
            <span>{lang === 'vi' ? 'Nhật Ký' : 'Journal'}</span>
          </button>

          <button
            className={`nav-btn ${activeTab === 'indicator' ? 'active' : ''}`}
            onClick={() => setActiveTab('indicator')}
            title={lang === 'vi' ? 'Mã Indicator TradingView' : 'TradingView PineScript'}
          >
            <Code size={15} />
            <span>PineScript</span>
          </button>

          <button
            className={`nav-btn ${activeTab === 'progress' ? 'active' : ''}`}
            onClick={() => setActiveTab('progress')}
            title={lang === 'vi' ? 'Bảng Tiến Độ Cá Nhân' : 'Progress Dashboard'}
          >
            <Award size={15} />
            <span>{lang === 'vi' ? 'Tiến Độ' : 'Progress'} ({completedCount}/{totalCount})</span>
          </button>
        </nav>

        {/* Overall Progress Tracker Pill */}
        <div className="overall-progress-box">
          <div style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--text-muted)' }}>
            {lang === 'vi' ? 'Hoàn thành' : 'Done'} <span style={{ color: 'var(--emerald)' }}>{percent}%</span>
          </div>
          <div className="progress-bar-bg">
            <div className="progress-bar-fill" style={{ width: `${percent}%` }}></div>
          </div>
        </div>
      </div>
    </header>
  );
};
