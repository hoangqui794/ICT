import React, { useState } from 'react';
import { RICH_LESSON_ARTICLES, RichLessonArticle } from '../data/richLessonArticles';
import { Topic, Module } from '../data/curriculumData';
import { 
  BookOpen, 
  Sparkles, 
  Image as ImageIcon, 
  Lightbulb, 
  CheckCircle2, 
  Circle, 
  Clock, 
  ChevronRight, 
  Globe,
  HelpCircle,
  Zap,
  Info
} from 'lucide-react';

interface NativeLessonArticleProps {
  topic: Topic;
  moduleItem: Module;
  lang: 'vi' | 'en';
  completedExercises: Record<string, boolean>;
  onToggleExercise: (exerciseText: string) => void;
}

export const NativeLessonArticle: React.FC<NativeLessonArticleProps> = ({
  topic,
  moduleItem,
  lang,
  completedExercises,
  onToggleExercise
}) => {
  const [selectedZoomImg, setSelectedZoomImg] = useState<string | null>(null);

  const title = lang === 'vi' ? topic.titleVi : topic.titleEn;
  const description = lang === 'vi' ? topic.descriptionVi : topic.descriptionEn;
  const keyTakeaways = lang === 'vi' ? topic.keyTakeawaysVi : topic.keyTakeawaysEn;
  const practicalExercises = lang === 'vi' ? topic.practicalExercisesVi : topic.practicalExercisesEn;

  const articleData: RichLessonArticle | undefined = RICH_LESSON_ARTICLES[topic.pdfFileName];

  return (
    <article className="article-container">
      {/* Article Hero Card */}
      <div className="article-hero-card">
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
          <span className="badge badge-blue">
            {lang === 'vi' ? `Lộ trình ${moduleItem.number}` : `Roadmap ${moduleItem.number}`}
          </span>
          <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>•</span>
          <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
            {lang === 'vi' ? moduleItem.titleVi : moduleItem.titleEn}
          </span>
        </div>

        <h1 className="article-title">{title}</h1>
        <p className="article-desc">{description}</p>

        {/* Article Meta Bar */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px', fontSize: '0.88rem', color: 'var(--text-muted)', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '20px', marginTop: '24px', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Clock size={16} color="var(--primary)" />
            <span>{lang === 'vi' ? 'Thời gian đọc: 6-8 phút' : 'Est. Read Time: 6-8 mins'}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <BookOpen size={16} color="var(--emerald)" />
            <span>{lang === 'vi' ? 'Bài học web native có sơ đồ đính kèm' : 'Native web article & diagrams'}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Globe size={16} color="var(--amber)" />
            <span>{lang === 'vi' ? 'Hỗ trợ Song ngữ 🇻🇳 VI / 🇬🇧 EN' : 'Bilingual 🇻🇳 VI / 🇬🇧 EN'}</span>
          </div>
        </div>
      </div>

      {/* Core Rules Callout Banner */}
      <div className="glass-card" style={{ padding: '32px', borderLeft: '4px solid var(--primary)' }}>
        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', fontWeight: 700, marginBottom: '18px', display: 'flex', alignItems: 'center', gap: '10px', color: '#FFF' }}>
          <Lightbulb size={22} color="var(--primary)" />
          {lang === 'vi' ? 'Quy Tắc Cốt Lõi Cần Nhớ Trong Bài' : 'Core Trading Rules & Principles'}
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {keyTakeaways.map((takeaway, idx) => (
            <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '14px', background: 'rgba(255,255,255,0.02)', padding: '14px 18px', borderRadius: 'var(--radius-md)', border: '1px solid rgba(255,255,255,0.04)' }}>
              <span style={{ 
                width: '24px', 
                height: '24px', 
                borderRadius: '50%', 
                background: 'rgba(56,189,248,0.15)', 
                color: 'var(--primary)', 
                fontSize: '0.8rem',
                fontWeight: 800,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                {idx + 1}
              </span>
              <span style={{ fontSize: '0.98rem', color: 'var(--text-primary)', lineHeight: 1.6 }}>
                {takeaway}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Main Native Article Content Sections */}
      {articleData && articleData.sections.map((sec, idx) => {
        const heading = lang === 'vi' ? sec.headingVi : sec.headingEn;
        const paragraphs = lang === 'vi' ? sec.contentVi : sec.contentEn;
        const caption = lang === 'vi' ? sec.captionVi : sec.captionEn;
        const highlightBox = lang === 'vi' ? sec.highlightBoxVi : sec.highlightBoxEn;

        return (
          <div key={idx} className="article-section-card">
            <h2 className="article-heading">
              <span style={{ width: '8px', height: '24px', borderRadius: '4px', background: 'var(--primary)' }} />
              {heading}
            </h2>

            {/* Paragraph Text Content */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {paragraphs.map((pText, pIdx) => (
                <p key={pIdx} className="article-paragraph">
                  {pText}
                </p>
              ))}
            </div>

            {/* GitHub Style Callout Box */}
            {highlightBox && (
              <div className="callout-box callout-amber">
                <Zap size={20} color="var(--amber)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>{highlightBox}</div>
              </div>
            )}

            {/* High-End Diagram Card Frame */}
            {sec.imageUrl && (
              <div className="diagram-frame">
                <img
                  src={sec.imageUrl}
                  alt={heading}
                  className="diagram-img"
                  onClick={() => setSelectedZoomImg(sec.imageUrl || null)}
                />
                {caption && (
                  <div className="diagram-caption">
                    <ImageIcon size={15} color="var(--primary)" />
                    <span>{caption} (Click để mở lớn full màn hình)</span>
                  </div>
                )}
              </div>
            )}
          </div>
        );
      })}

      {/* Practical Exercises Checklist Section */}
      <div className="glass-card" style={{ padding: '32px', borderLeft: '4px solid var(--emerald)' }}>
        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', fontWeight: 700, marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '10px', color: '#FFF' }}>
          <Sparkles size={22} color="var(--emerald)" />
          {lang === 'vi' ? 'Bài Tập Thực Hành Bài Học' : 'Practical Exercise Checklist'}
        </h3>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '20px' }}>
          {lang === 'vi' ? 'Thực hành trên chart TradingView và tích hoàn thành bài học:' : 'Practice on your TradingView charts and mark completed:'}
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {practicalExercises.map((ex, i) => {
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

      {/* Image Modal for Fullscreen Zoom */}
      {selectedZoomImg && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 9999,
            background: 'rgba(5, 8, 14, 0.92)',
            backdropFilter: 'blur(12px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px',
            cursor: 'zoom-out'
          }}
          onClick={() => setSelectedZoomImg(null)}
        >
          <img
            src={selectedZoomImg}
            alt="Zoomed diagram"
            style={{ maxWidth: '96vw', maxHeight: '96vh', objectFit: 'contain', borderRadius: '16px', boxShadow: '0 20px 60px rgba(0,0,0,0.9)' }}
          />
        </div>
      )}
    </article>
  );
};
