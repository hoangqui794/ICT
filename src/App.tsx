import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { RoadmapOverview } from './components/RoadmapOverview';
import { LessonViewer } from './components/LessonViewer';
import { IndicatorCenter } from './components/IndicatorCenter';
import { ProgressTracker } from './components/ProgressTracker';
import { TradingCalendar } from './components/TradingCalendar';
import { CURRICULUM_DATA } from './data/curriculumData';

export const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'roadmap' | 'lesson' | 'indicator' | 'progress' | 'journal'>('roadmap');
  const [selectedModuleId, setSelectedModuleId] = useState<string>(CURRICULUM_DATA[0].id);
  const [selectedTopicId, setSelectedTopicId] = useState<string>(CURRICULUM_DATA[0].topics[0].id);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [lang, setLang] = useState<'vi' | 'en'>('vi');

  // LocalStorage state for completed exercises
  const [completedExercises, setCompletedExercises] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem('ict_completed_exercises');
      return saved ? JSON.parse(saved) : {};
    } catch (e) {
      return {};
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('ict_completed_exercises', JSON.stringify(completedExercises));
    } catch (e) {
      console.error('Failed to save progress to localStorage', e);
    }
  }, [completedExercises]);

  const handleToggleExercise = (exerciseText: string) => {
    setCompletedExercises(prev => ({
      ...prev,
      [exerciseText]: !prev[exerciseText]
    }));
  };

  const handleResetProgress = () => {
    const confirmMsg = lang === 'vi' 
      ? 'Bạn có chắc chắn muốn đặt lại tất cả tiến độ học tập không?' 
      : 'Are you sure you want to reset all your learning progress?';
    if (window.confirm(confirmMsg)) {
      setCompletedExercises({});
    }
  };

  const handleSelectModuleAndTopic = (moduleId: string, topicId?: string) => {
    setSelectedModuleId(moduleId);
    const mod = CURRICULUM_DATA.find(m => m.id === moduleId);
    if (mod) {
      setSelectedTopicId(topicId || mod.topics[0].id);
    }
    setActiveTab('lesson');
  };

  // Calculate totals
  const allExercises = CURRICULUM_DATA.flatMap(m => m.topics.flatMap(t => t.practicalExercisesVi));
  const completedCount = allExercises.filter(ex => completedExercises[ex]).length;
  const totalCount = allExercises.length;

  return (
    <div className="app-container">
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        completedCount={completedCount}
        totalCount={totalCount}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        lang={lang}
        setLang={setLang}
      />

      <main className="main-content">
        {activeTab === 'roadmap' && (
          <RoadmapOverview
            onSelectModule={handleSelectModuleAndTopic}
            onOpenIndicator={() => setActiveTab('indicator')}
            completedExercises={completedExercises}
            lang={lang}
          />
        )}

        {activeTab === 'lesson' && (
          <LessonViewer
            selectedModuleId={selectedModuleId}
            selectedTopicId={selectedTopicId}
            onSelectTopic={(mId, tId) => {
              setSelectedModuleId(mId);
              setSelectedTopicId(tId);
            }}
            completedExercises={completedExercises}
            onToggleExercise={handleToggleExercise}
            lang={lang}
          />
        )}

        {activeTab === 'indicator' && (
          <IndicatorCenter />
        )}

        {activeTab === 'progress' && (
          <ProgressTracker
            completedExercises={completedExercises}
            onToggleExercise={handleToggleExercise}
            onResetProgress={handleResetProgress}
            lang={lang}
          />
        )}

        {activeTab === 'journal' && (
          <TradingCalendar lang={lang} />
        )}
      </main>
    </div>
  );
};

export default App;
