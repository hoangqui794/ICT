import React, { useState, useEffect } from 'react';
import { CURRICULUM_DATA, Topic, Module } from '../data/curriculumData';
import { SplitScreenReader } from './SplitScreenReader';
import { 
  FileText, 
  CheckSquare, 
  CheckCircle2, 
  Circle, 
  BookOpen, 
  ChevronRight,
  ChevronDown,
  PanelLeftClose,
  PanelLeftOpen,
  X
} from 'lucide-react';

interface LessonViewerProps {
  selectedModuleId: string;
  selectedTopicId: string;
  onSelectTopic: (moduleId: string, topicId: string) => void;
  completedExercises: Record<string, boolean>;
  onToggleExercise: (exerciseText: string) => void;
  lang: 'vi' | 'en';
}

export const LessonViewer: React.FC<LessonViewerProps> = ({
  selectedModuleId,
  selectedTopicId,
  onSelectTopic,
  completedExercises,
  onToggleExercise,
  lang
}) => {
  const [activeWorkspaceTab, setActiveWorkspaceTab] = useState<'web-article' | 'exercises'>('web-article');
  
  // Collapsible sidebar state
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);

  // Responsive state
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 960);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 960);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Collapse sidebar by default on mobile
  useEffect(() => {
    if (isMobile) {
      setIsSidebarOpen(false);
    } else {
      setIsSidebarOpen(true);
    }
  }, [isMobile]);

  // Track open module accordions
  const [openModules, setOpenModules] = useState<Record<string, boolean>>({
    [selectedModuleId]: true
  });

  const toggleModule = (modId: string) => {
    setOpenModules(prev => ({
      ...prev,
      [modId]: !prev[modId]
    }));
  };

  // Find active module & topic
  const activeModule: Module = CURRICULUM_DATA.find(m => m.id === selectedModuleId) || CURRICULUM_DATA[0];
  const activeTopic: Topic = activeModule.topics.find(t => t.id === selectedTopicId) || activeModule.topics[0];

  const title = lang === 'vi' ? activeTopic.titleVi : activeTopic.titleEn;

  return (
    <div className="lesson-layout" style={{ gridTemplateColumns: (!isMobile && isSidebarOpen) ? '280px 1fr' : '1fr' }}>
      {/* Sidebar Navigation */}
      {isSidebarOpen && (
        <>
          {isMobile && <div className="sidebar-backdrop" onClick={() => setIsSidebarOpen(false)} />}
          <aside className={`sidebar ${isMobile ? 'mobile-drawer open' : ''}`}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingLeft: '4px', marginBottom: '8px' }}>
              <div style={{ fontSize: '0.78rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--text-muted)' }}>
                {lang === 'vi' ? 'Danh Mục Lộ Trình' : 'Curriculum Modules'}
              </div>
              {isMobile && (
                <button 
                  onClick={() => setIsSidebarOpen(false)}
                  style={{ color: 'var(--text-muted)', background: 'rgba(255,255,255,0.05)', border: 'none', borderRadius: '50%', padding: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >
                  <X size={16} />
                </button>
              )}
            </div>

            {CURRICULUM_DATA.map((moduleItem) => {
              const isOpen = openModules[moduleItem.id] ?? (moduleItem.id === selectedModuleId);
              const modTitle = lang === 'vi' ? moduleItem.titleVi : moduleItem.titleEn;

              return (
                <div key={moduleItem.id} className="sidebar-accordion-group">
                  <button
                    className="sidebar-accordion-header"
                    onClick={() => toggleModule(moduleItem.id)}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span className="badge badge-blue" style={{ fontSize: '0.7rem', padding: '2px 8px' }}>
                        {moduleItem.number}
                      </span>
                      <span>{modTitle}</span>
                    </div>
                    {isOpen ? <ChevronDown size={15} color="var(--text-muted)" /> : <ChevronRight size={15} color="var(--text-muted)" />}
                  </button>

                  {isOpen && (
                    <div className="sidebar-accordion-body">
                      {moduleItem.topics.map((topic) => {
                        const isActive = topic.id === activeTopic.id;
                        const topicTitle = lang === 'vi' ? topic.titleVi : topic.titleEn;
                        const hasExercises = topic.practicalExercisesVi.length > 0;
                        const isTopicDone = hasExercises && topic.practicalExercisesVi.every(ex => completedExercises[ex]);

                        return (
                          <button
                            key={topic.id}
                            className={`sidebar-item ${isActive ? 'active' : ''}`}
                            onClick={() => {
                              onSelectTopic(moduleItem.id, topic.id);
                              if (isMobile) {
                                setIsSidebarOpen(false); // Auto close drawer on click
                              }
                            }}
                          >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flex: 1, minWidth: 0 }}>
                              <FileText size={14} style={{ flexShrink: 0 }} color={isActive ? 'var(--primary)' : 'var(--text-muted)'} />
                              <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                {topicTitle}
                              </span>
                            </div>
                            {isTopicDone && (
                              <CheckCircle2 size={14} color="var(--emerald)" style={{ flexShrink: 0 }} />
                            )}
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </aside>
        </>
      )}

      {/* Main Workspace Area */}
      <main className="lesson-workspace">
        {/* Workspace Controls Header */}
        <div className="glass-card" style={{ padding: '12px 18px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            {/* Sidebar Toggle Button */}
            <button
              onClick={() => setIsSidebarOpen(prev => !prev)}
              className="nav-btn"
              style={{
                padding: '6px 12px',
                background: isSidebarOpen ? 'rgba(255,255,255,0.04)' : 'rgba(56,189,248,0.15)',
                color: isSidebarOpen ? 'var(--text-secondary)' : 'var(--primary)',
                border: '1px solid rgba(255,255,255,0.1)'
              }}
              title={isSidebarOpen ? (lang === 'vi' ? 'Ẩn Lộ Trình' : 'Hide Sidebar') : (lang === 'vi' ? 'Mở Lộ Trình' : 'Show Sidebar')}
            >
              {isSidebarOpen ? <PanelLeftClose size={15} /> : <PanelLeftOpen size={15} />}
              <span>{isSidebarOpen ? (lang === 'vi' ? 'Ẩn Lộ Trình' : 'Hide Sidebar') : (lang === 'vi' ? 'Danh Mục Lộ Trình' : 'Curriculum')}</span>
            </button>

            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
              {!isMobile && (
                <>
                  <span>{lang === 'vi' ? activeModule.titleVi : activeModule.titleEn}</span>
                  <ChevronRight size={14} />
                </>
              )}
              <span style={{ color: 'var(--primary)', fontWeight: 700 }}>{title}</span>
            </div>
          </div>

          {/* View Mode Switcher */}
          <div className="tab-row" style={{ margin: 0 }}>
            <button
              className={`tab-btn ${activeWorkspaceTab === 'web-article' ? 'active' : ''}`}
              onClick={() => setActiveWorkspaceTab('web-article')}
            >
              <BookOpen size={15} />
              <span>{lang === 'vi' ? '📖 Học Tập' : '📖 Study'}</span>
            </button>

            <button
              className={`tab-btn ${activeWorkspaceTab === 'exercises' ? 'active' : ''}`}
              onClick={() => setActiveWorkspaceTab('exercises')}
            >
              <CheckSquare size={15} />
              <span>{lang === 'vi' ? '✍️ Bài Tập' : '✍️ Exercises'}</span>
            </button>
          </div>
        </div>

        {/* View 1: Split-Screen Interactive Reader */}
        {activeWorkspaceTab === 'web-article' && (
          <SplitScreenReader
            topic={activeTopic}
            moduleItem={activeModule}
            lang={lang}
            completedExercises={completedExercises}
            onToggleExercise={onToggleExercise}
          />
        )}

        {/* View 2: Exercises */}
        {activeWorkspaceTab === 'exercises' && (
          <div className="glass-card article-section-card">
            <h3 className="article-heading">
              <CheckSquare size={22} color="var(--emerald)" />
              {lang === 'vi' ? `Danh Sách Bài Tập: ${title}` : `Exercise Checklist: ${title}`}
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.98rem', marginBottom: '24px' }}>
              {lang === 'vi'
                ? 'Mở phần mềm TradingView, thực hiện yêu cầu và đánh dấu hoàn thành để lưu tiến độ:'
                : 'Open TradingView chart, execute the task, and check off items to save progress:'}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {(lang === 'vi' ? activeTopic.practicalExercisesVi : activeTopic.practicalExercisesEn).map((ex, i) => {
                const isChecked = !!completedExercises[ex];
                return (
                  <div
                    key={i}
                    className={`exercise-item ${isChecked ? 'checked' : ''}`}
                    onClick={() => onToggleExercise(ex)}
                  >
                    {isChecked ? (
                      <CheckCircle2 size={20} color="var(--emerald)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    ) : (
                      <Circle size={20} color="var(--text-muted)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    )}
                    <span style={{ fontSize: '0.98rem', color: isChecked ? 'var(--text-muted)' : 'var(--text-primary)' }}>
                      {ex}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </main>
    </div>
  );
};
