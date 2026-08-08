import React, { useState, useRef, useEffect } from 'react';
import { Topic, Module } from '../data/curriculumData';
import { Youtube, FileText, GripVertical, Lightbulb, X } from 'lucide-react';

interface SplitScreenReaderProps {
  topic: Topic;
  moduleItem: Module;
  lang: 'vi' | 'en';
  completedExercises: Record<string, boolean>;
  onToggleExercise: (exerciseText: string) => void;
}

export const SplitScreenReader: React.FC<SplitScreenReaderProps> = ({
  topic,
  moduleItem,
  lang
}) => {
  const title = lang === 'vi' ? topic.titleVi : topic.titleEn;

  // Ensure clean un-encoded URL path to static PDF file in public/pdfs/
  const pdfUrl = `/pdfs/${topic.pdfFileName.replace(/ /g, '%20')}`;

  const containerRef = useRef<HTMLDivElement>(null);
  const [leftWidth, setLeftWidth] = useState(50); // percentage
  const [isDragging, setIsDragging] = useState(false);
  const [showSummary, setShowSummary] = useState(false);

  useEffect(() => {
    let animationFrameId: number;

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging || !containerRef.current) return;
      
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(() => {
        const containerRect = containerRef.current!.getBoundingClientRect();
        const newLeftWidth = ((e.clientX - containerRect.left) / containerRect.width) * 100;
        if (newLeftWidth >= 20 && newLeftWidth <= 80) {
          setLeftWidth(newLeftWidth);
        }
      });
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      cancelAnimationFrame(animationFrameId);
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove, { passive: true });
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      cancelAnimationFrame(animationFrameId);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '100%', height: 'calc(100vh - 100px)' }}>
      {/* DUAL STUDIO: LEFT = RAW PDF FILE, RIGHT = EMBEDDED YOUTUBE VIDEO */}
      <div 
        ref={containerRef}
        style={{ 
          display: 'flex',
          width: '100%', 
          flex: 1, 
          minHeight: 0,
          position: 'relative'
        }}
      >
        
        {/* LEFT COLUMN: Direct Embedded PDF Document */}
        <div className="glass-card" style={{ width: `calc(${leftWidth}% - 6px)`, padding: '8px', display: 'flex', flexDirection: 'column', gap: '6px', height: '100%', transition: isDragging ? 'none' : 'width 0.3s cubic-bezier(0.16, 1, 0.3, 1)', willChange: 'width' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingLeft: '4px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem', fontWeight: 700, color: '#FFF' }}>
              <FileText size={16} color="var(--primary)" />
              <span>{lang === 'vi' ? 'Tài Liệu File PDF Gốc' : 'Original PDF Document'}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <button 
                onClick={() => setShowSummary(true)}
                className="badge badge-blue" 
                style={{ background: 'rgba(212, 175, 55, 0.15)', color: 'var(--primary)', border: '1px solid rgba(212, 175, 55, 0.3)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px', padding: '4px 10px' }}
              >
                <Lightbulb size={12} />
                {lang === 'vi' ? 'Xem Tóm Tắt' : 'View Summary'}
              </button>
              <a
                href={pdfUrl}
                target="_blank"
                rel="noreferrer"
                style={{ fontSize: '0.75rem', color: 'var(--primary)', fontWeight: 600, paddingRight: '4px' }}
              >
                {lang === 'vi' ? 'Mở PDF Cửa Sổ Mới ↗' : 'Open PDF New Tab ↗'}
              </a>
            </div>
          </div>

          <div 
            style={{ 
              flex: 1, 
              minHeight: 0, 
              position: 'relative', 
              background: '#000000', 
              borderRadius: 'var(--radius-md)', 
              overflow: 'hidden', 
              border: '1px solid rgba(255,255,255,0.1)'
            }}
          >
            <iframe
              src={`${pdfUrl}#toolbar=1&navpanes=0`}
              title={topic.pdfFileName}
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0, pointerEvents: isDragging ? 'none' : 'auto' }}
            />
          </div>
        </div>

        {/* DIVIDER RESIZE HANDLE */}
        <div
          onMouseDown={() => setIsDragging(true)}
          style={{
            width: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'col-resize',
            zIndex: 10
          }}
        >
          <div 
            style={{ 
              width: '4px', 
              height: '40px', 
              background: isDragging ? 'var(--primary)' : 'rgba(255,255,255,0.2)', 
              borderRadius: '2px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              transition: 'background 0.2s'
            }}
          >
             <GripVertical size={10} color={isDragging ? '#FFF' : 'rgba(255,255,255,0.5)'} style={{ marginLeft: '-3px' }} />
          </div>
        </div>

        {/* RIGHT COLUMN: Direct Embedded YouTube Video */}
        <div className="glass-card" style={{ width: `calc(${100 - leftWidth}% - 6px)`, padding: '8px', display: 'flex', flexDirection: 'column', gap: '6px', height: '100%', transition: isDragging ? 'none' : 'width 0.3s cubic-bezier(0.16, 1, 0.3, 1)', willChange: 'width' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingLeft: '4px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem', fontWeight: 700, color: '#FFF' }}>
              <Youtube size={16} color="#EF4444" />
              <span>{lang === 'vi' ? 'Video Bài Giảng YouTube' : 'YouTube Tutorial'}</span>
            </div>
            <span style={{ fontSize: '0.72rem', color: '#EF4444', fontWeight: 700, paddingRight: '4px' }}>
              🔴 HD
            </span>
          </div>

          {topic.youtubeVideoId ? (
            <div 
              style={{ 
                flex: 1, 
                minHeight: 0, 
                position: 'relative', 
                background: '#000000', 
                borderRadius: 'var(--radius-md)', 
                overflow: 'hidden', 
                border: '1px solid rgba(239, 68, 68, 0.25)'
              }}
            >
              <iframe
                src={`https://www.youtube.com/embed/${topic.youtubeVideoId}?autoplay=1&rel=0`}
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0, pointerEvents: isDragging ? 'none' : 'auto' }}
              />
            </div>
          ) : (
            <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
              {lang === 'vi' ? 'Không có video bài học' : 'No video'}
            </div>
          )}
        </div>

        {/* DRAGGING OVERLAY */}
        {isDragging && (
          <div style={{ position: 'fixed', inset: 0, zIndex: 9999, cursor: 'col-resize' }} />
        )}
      </div>

      {/* SUMMARY MODAL OVERLAY */}
      {showSummary && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 99999, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(4px)' }}>
          <div className="glass-card" style={{ width: '90%', maxWidth: '600px', maxHeight: '85vh', overflowY: 'auto', padding: '30px', position: 'relative', borderTop: '4px solid var(--primary)' }}>
            <button 
              onClick={() => setShowSummary(false)} 
              style={{ position: 'absolute', top: '20px', right: '20px', background: 'rgba(255,255,255,0.1)', border: 'none', borderRadius: '50%', padding: '6px', cursor: 'pointer', color: '#FFF' }}
            >
              <X size={20} />
            </button>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
              <Lightbulb size={24} color="var(--primary)" />
              <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#FFF', margin: 0 }}>
                {lang === 'vi' ? 'Tóm Tắt & Điểm Cần Nhớ' : 'Summary & Key Takeaways'}
              </h2>
            </div>
            
            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.6, marginBottom: '24px' }}>
              {lang === 'vi' ? topic.descriptionVi : topic.descriptionEn}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {(lang === 'vi' ? topic.keyTakeawaysVi : topic.keyTakeawaysEn).map((takeaway, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '14px', background: 'rgba(255,255,255,0.03)', padding: '16px', borderRadius: 'var(--radius-md)', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <span style={{ 
                    width: '26px', 
                    height: '26px', 
                    borderRadius: '50%', 
                    background: 'rgba(212, 175, 55, 0.15)', 
                    color: 'var(--primary)', 
                    fontSize: '0.85rem',
                    fontWeight: 800,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    {idx + 1}
                  </span>
                  <p style={{ margin: 0, fontSize: '0.95rem', color: 'var(--text-primary)', lineHeight: 1.5 }}>
                    {takeaway}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
