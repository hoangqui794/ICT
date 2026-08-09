import React, { useState, useEffect } from 'react';
import { CURRICULUM_DATA } from '../data/curriculumData';
import { CheckCircle2, Circle, RefreshCw } from 'lucide-react';

interface ProgressTrackerProps {
  completedExercises: Record<string, boolean>;
  onToggleExercise: (exerciseText: string) => void;
  onResetProgress: () => void;
  lang: 'vi' | 'en';
}

export const ProgressTracker: React.FC<ProgressTrackerProps> = ({
  completedExercises,
  onToggleExercise,
  onResetProgress,
  lang
}) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 960);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 960);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const allExercises = CURRICULUM_DATA.flatMap(m => 
    m.topics.flatMap(t => 
      t.practicalExercisesVi.map((ex, idx) => ({
        moduleTitle: lang === 'vi' ? m.titleVi : m.titleEn,
        moduleNumber: m.number,
        topicTitle: lang === 'vi' ? t.titleVi : t.titleEn,
        exerciseTextVi: ex,
        exerciseTextEn: t.practicalExercisesEn[idx] || ex
      }))
    )
  );

  const completedCount = allExercises.filter(ex => completedExercises[ex.exerciseTextVi]).length;
  const totalCount = allExercises.length;
  const percent = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '20px', paddingBottom: isMobile ? '40px' : '0' }}>
      {/* Overview Progress Card */}
      <div className="glass-card" style={{ padding: isMobile ? '16px' : '32px' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '16px', flexDirection: isMobile ? 'column' : 'row', gap: '16px' }}>
          <div>
            <div className="badge badge-green" style={{ marginBottom: '8px' }}>
              {lang === 'vi' ? 'Bảng Tổng Hợp Tiến Độ' : 'Progress Dashboard'}
            </div>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: isMobile ? '1.3rem' : '1.8rem', fontWeight: 800, color: '#FFF', lineHeight: '1.3' }}>
              {lang === 'vi' ? `Tiến Độ Học Tập Cá Nhân (${completedCount}/${totalCount} Bài Tập)` : `Personal Progress (${completedCount}/${totalCount} Tasks)`}
            </h1>
          </div>

          <button
            onClick={onResetProgress}
            className="nav-btn"
            style={{ 
              fontSize: '0.8rem', 
              color: '#EF4444', 
              borderColor: 'rgba(239,68,68,0.3)', 
              background: 'rgba(239,68,68,0.1)',
              padding: '6px 12px',
              alignSelf: isMobile ? 'flex-end' : 'auto'
            }}
          >
            <RefreshCw size={13} /> {lang === 'vi' ? 'Đặt Lại Tiến Độ' : 'Reset Progress'}
          </button>
        </div>

        {/* Big Progress Bar */}
        <div style={{ marginTop: '12px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '8px', flexDirection: isMobile ? 'column' : 'row', gap: '4px' }}>
            <span>{lang === 'vi' ? `Đã hoàn thành ${percent}% tổng lộ trình` : `Completed ${percent}% of total roadmap`}</span>
            <span style={{ color: '#10B981', fontWeight: 700 }}>{completedCount} / {totalCount} {lang === 'vi' ? 'bài tập' : 'tasks'}</span>
          </div>
          <div style={{ width: '100%', height: '10px', background: '#1E293B', borderRadius: '8px', overflow: 'hidden' }}>
            <div
              style={{
                width: `${percent}%`,
                height: '100%',
                background: 'linear-gradient(90deg, #10B981, #3B82F6)',
                borderRadius: '8px',
                transition: 'width 0.4s ease'
              }}
            />
          </div>
        </div>
      </div>

      {/* Exercises List Grouped By Module */}
      {CURRICULUM_DATA.map((moduleItem) => {
        const title = lang === 'vi' ? moduleItem.titleVi : moduleItem.titleEn;
        return (
          <div key={moduleItem.id} className="glass-card" style={{ padding: isMobile ? '16px' : '24px' }}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: isMobile ? '1.05rem' : '1.25rem', fontWeight: 700, marginBottom: '16px', color: '#FFF', lineHeight: '1.3' }}>
              {lang === 'vi' ? `Lộ Trình ${moduleItem.number}: ${title}` : `Roadmap ${moduleItem.number}: ${title}`}
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {moduleItem.topics.flatMap(t => 
                t.practicalExercisesVi.map((exVi, idx) => ({
                  topicTitle: lang === 'vi' ? t.titleVi : t.titleEn,
                  exerciseTextVi: exVi,
                  exerciseTextEn: t.practicalExercisesEn[idx] || exVi
                }))
              ).map((item, idx) => {
                const isChecked = !!completedExercises[item.exerciseTextVi];
                const text = lang === 'vi' ? item.exerciseTextVi : item.exerciseTextEn;
                return (
                  <div
                    key={idx}
                    className={`exercise-item ${isChecked ? 'checked' : ''}`}
                    onClick={() => onToggleExercise(item.exerciseTextVi)}
                    style={{ padding: '10px 12px' }}
                  >
                    {isChecked ? (
                      <CheckCircle2 size={18} color="#10B981" style={{ flexShrink: 0, marginTop: '2px' }} />
                    ) : (
                      <Circle size={18} color="var(--text-muted)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    )}
                    <div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--primary)', fontWeight: 600, marginBottom: '2px' }}>
                        {item.topicTitle}
                      </div>
                      <div style={{ fontSize: '0.85rem', color: isChecked ? 'var(--text-muted)' : 'var(--text-primary)', lineHeight: '1.4' }}>
                        {text}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};
