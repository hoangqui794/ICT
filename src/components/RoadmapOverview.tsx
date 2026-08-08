import React from 'react';
import { CURRICULUM_DATA, Module } from '../data/curriculumData';
import { Droplets, Compass, RefreshCw, Target, ShieldAlert, ChevronRight, FileText, CheckCircle2, Code } from 'lucide-react';

interface RoadmapOverviewProps {
  onSelectModule: (moduleId: string, topicId?: string) => void;
  onOpenIndicator: () => void;
  completedExercises: Record<string, boolean>;
  lang: 'vi' | 'en';
}

export const RoadmapOverview: React.FC<RoadmapOverviewProps> = ({
  onSelectModule,
  onOpenIndicator,
  completedExercises,
  lang
}) => {
  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'Droplets': return <Droplets size={24} color="#3B82F6" />;
      case 'Compass': return <Compass size={24} color="#10B981" />;
      case 'RefreshCw': return <RefreshCw size={24} color="#F59E0B" />;
      case 'Target': return <Target size={24} color="#8B5CF6" />;
      case 'ShieldAlert': return <ShieldAlert size={24} color="#EC4899" />;
      default: return <Droplets size={24} color="#3B82F6" />;
    }
  };

  const getBadgeClass = (index: number) => {
    const badges = ['badge-blue', 'badge-green', 'badge-gold', 'badge-purple', 'badge-pink'];
    return badges[index % badges.length];
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="badge badge-blue" style={{ marginBottom: '12px' }}>
          {lang === 'vi' ? '✨ Lộ Trình Học ICT Chuẩn 5 Bước' : '✨ Official 5-Step ICT Mastery Roadmap'}
        </div>
        <h1 className="hero-title">
          {lang === 'vi' ? 'Phương Pháp Giao Dịch ICT (Inner Circle Trader)' : 'Inner Circle Trader (ICT) Methodology'}
        </h1>
        <p className="hero-subtitle">
          {lang === 'vi'
            ? 'Lộ trình làm chủ tư duy đọc thanh khoản, xác định Daily Bias, nhận biết Market Structure Shift và xây dựng chiến lược quản trị rủi ro chuyên nghiệp.'
            : 'Master liquidity reading, daily bias determination, market structure shifts, and mechanical risk management models.'}
        </p>
      </section>

      {/* Quick Tool Banner */}
      <div 
        className="glass-card" 
        style={{ 
          padding: '20px 28px', 
          marginBottom: '32px', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between',
          background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1))',
          borderColor: 'rgba(59, 130, 246, 0.3)',
          flexWrap: 'wrap',
          gap: '16px'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ padding: '12px', background: 'rgba(59, 130, 246, 0.2)', borderRadius: '12px' }}>
            <Code size={24} color="#60A5FA" />
          </div>
          <div>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#FFF' }}>
              {lang === 'vi' ? 'Indicator TradingView Mã Nguồn Thuần (PineScript v5)' : 'Pure PineScript v5 TradingView Indicator'}
            </h4>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
              {lang === 'vi'
                ? 'Tự động vẽ Hộp phiên (Asia, London, NY) + 8 Khung ICT Macros & HTF Panel'
                : 'Auto-draw Session Boxes (Asia, London, NY) + 8 ICT Macros & HTF Panel'}
            </p>
          </div>
        </div>
        <button className="btn-primary" onClick={onOpenIndicator}>
          {lang === 'vi' ? 'Xem & Copy Code' : 'View & Copy Code'} <ChevronRight size={16} />
        </button>
      </div>

      {/* 5 Modules Grid */}
      <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 700, marginBottom: '16px' }}>
        {lang === 'vi' ? '5 Lộ Trình Học Tập Cốt Lõi' : '5 Core Learning Modules'}
      </h3>
      <div className="roadmap-grid">
        {CURRICULUM_DATA.map((moduleItem: Module, idx: number) => {
          const title = lang === 'vi' ? moduleItem.titleVi : moduleItem.titleEn;
          const subtitle = lang === 'vi' ? moduleItem.subtitleVi : moduleItem.subtitleEn;

          const totalModuleExercises = moduleItem.topics.flatMap(t => t.practicalExercisesVi).length;
          const completedModuleExercises = moduleItem.topics.flatMap(t => t.practicalExercisesVi).filter(ex => completedExercises[ex]).length;
          const isModuleDone = totalModuleExercises > 0 && completedModuleExercises === totalModuleExercises;

          return (
            <div
              key={moduleItem.id}
              className="glass-card module-card"
              onClick={() => onSelectModule(moduleItem.id, moduleItem.topics[0]?.id)}
            >
              <div>
                <div className="module-header">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ 
                      padding: '10px', 
                      background: 'rgba(255,255,255,0.03)', 
                      borderRadius: '12px',
                      border: '1px solid rgba(255,255,255,0.06)'
                    }}>
                      {getIconComponent(moduleItem.icon)}
                    </div>
                    <span className={`badge ${getBadgeClass(idx)}`}>
                      {lang === 'vi' ? `Lộ Trình ${moduleItem.number}` : `Roadmap ${moduleItem.number}`}
                    </span>
                  </div>
                  <span className="module-number">{moduleItem.number}</span>
                </div>

                <h3 className="module-title">{title}</h3>
                <p className="module-subtitle">{subtitle}</p>

                {/* Sub-topics preview list */}
                <div className="module-topic-list">
                  {moduleItem.topics.map((topic) => (
                    <div key={topic.id} className="module-topic-item">
                      <FileText size={14} color="var(--primary)" />
                      <span style={{ flex: 1, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        {lang === 'vi' ? topic.titleVi : topic.titleEn}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="module-footer">
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                  <CheckCircle2 size={15} color={isModuleDone ? '#10B981' : 'var(--text-dim)'} />
                  <span>
                    {lang === 'vi' 
                      ? `${completedModuleExercises}/${totalModuleExercises} Bài tập hoàn thành` 
                      : `${completedModuleExercises}/${totalModuleExercises} Completed`}
                  </span>
                </div>
                <span className="module-action-btn">
                  {lang === 'vi' ? 'Vào Học' : 'Start Lesson'} <ChevronRight size={16} />
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
