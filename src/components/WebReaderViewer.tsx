import React, { useState } from 'react';
import { PDF_CONTENT_DATA, PdfDocumentContent } from '../data/pdfContentData';
import { Layers, Image as ImageIcon, ChevronLeft, ChevronRight, Eye, ExternalLink, Globe } from 'lucide-react';

interface WebReaderViewerProps {
  pdfFileName: string;
  topicTitle: string;
  lang: 'vi' | 'en';
}

export const WebReaderViewer: React.FC<WebReaderViewerProps> = ({
  pdfFileName,
  topicTitle,
  lang
}) => {
  const [currentPageIndex, setCurrentPageIndex] = useState<number>(0);
  const [viewMode, setViewMode] = useState<'grid' | 'slideshow'>('slideshow');
  const [selectedZoomImg, setSelectedZoomImg] = useState<string | null>(null);

  const docContent: PdfDocumentContent | undefined = PDF_CONTENT_DATA[pdfFileName];

  if (!docContent || !docContent.pages || docContent.pages.length === 0) {
    return (
      <div className="glass-card" style={{ padding: '32px', textAlign: 'center' }}>
        <p style={{ color: 'var(--text-muted)' }}>
          {lang === 'vi' 
            ? 'Chưa tìm thấy dữ liệu trang được trích xuất cho file này. Bạn có thể mở trực tiếp PDF.' 
            : 'Extracted page content for this PDF is not available. You can view the raw PDF.'}
        </p>
      </div>
    );
  }

  const currentPage = docContent.pages[currentPageIndex];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {/* Top Controls Bar */}
      <div className="glass-card" style={{ padding: '14px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <ImageIcon size={20} color="var(--primary)" />
          <div>
            <div style={{ fontWeight: 700, fontSize: '0.95rem', color: '#FFF' }}>
              {lang === 'vi' ? 'Trình Đọc Biểu Đồ & Bài Học Trực Quan Web' : 'Web Visual Lesson & Chart Reader'}
            </div>
            <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
              {lang === 'vi' 
                ? `Tập hợp ${docContent.totalPages} trang hình ảnh & minh họa từ tài liệu (${pdfFileName})` 
                : `Extracted ${docContent.totalPages} visual diagram pages from (${pdfFileName})`}
            </div>
          </div>
        </div>

        {/* View Mode Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <button
            className={`nav-btn ${viewMode === 'slideshow' ? 'active' : ''}`}
            onClick={() => setViewMode('slideshow')}
            style={{ fontSize: '0.85rem', padding: '6px 14px' }}
          >
            <Eye size={14} /> {lang === 'vi' ? 'Chế Độ Đọc Từng Trang' : 'Single Page Reader'}
          </button>
          <button
            className={`nav-btn ${viewMode === 'grid' ? 'active' : ''}`}
            onClick={() => setViewMode('grid')}
            style={{ fontSize: '0.85rem', padding: '6px 14px' }}
          >
            <Layers size={14} /> {lang === 'vi' ? 'Xem Lưới Tất Cả Trang' : 'Grid Overview'}
          </button>
        </div>
      </div>

      {/* Mode 1: Single Page Slideshow Reader */}
      {viewMode === 'slideshow' && (
        <div className="glass-card" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {/* Page Counter & Controls */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: '12px' }}>
            <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--primary)' }}>
              {lang === 'vi' ? `Trang ${currentPageIndex + 1} / ${docContent.totalPages}` : `Page ${currentPageIndex + 1} of ${docContent.totalPages}`}
            </span>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <button
                className="nav-btn"
                disabled={currentPageIndex === 0}
                onClick={() => setCurrentPageIndex(prev => Math.max(0, prev - 1))}
                style={{ opacity: currentPageIndex === 0 ? 0.4 : 1, padding: '6px 12px' }}
              >
                <ChevronLeft size={16} /> {lang === 'vi' ? 'Trang Trước' : 'Prev Page'}
              </button>
              <button
                className="btn-primary"
                disabled={currentPageIndex === docContent.totalPages - 1}
                onClick={() => setCurrentPageIndex(prev => Math.min(docContent.totalPages - 1, prev + 1))}
                style={{ opacity: currentPageIndex === docContent.totalPages - 1 ? 0.4 : 1, padding: '6px 16px', fontSize: '0.85rem' }}
              >
                {lang === 'vi' ? 'Trang Tiếp' : 'Next Page'} <ChevronRight size={16} />
              </button>
            </div>
          </div>

          {/* Rendered PDF Page Chart Image */}
          <div 
            style={{ 
              position: 'relative', 
              background: '#090D14', 
              borderRadius: 'var(--radius-md)', 
              overflow: 'hidden', 
              border: '1px solid var(--bg-card-border)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '16px',
              minHeight: '400px'
            }}
          >
            <img
              src={currentPage.imageUrl}
              alt={`Page ${currentPage.pageNumber}`}
              style={{
                maxWidth: '100%',
                maxHeight: '700px',
                objectFit: 'contain',
                borderRadius: '8px',
                cursor: 'zoom-in',
                boxShadow: '0 8px 24px rgba(0,0,0,0.6)'
              }}
              onClick={() => setSelectedZoomImg(currentPage.imageUrl)}
            />
            <div style={{ position: 'absolute', bottom: '12px', right: '12px', background: 'rgba(0,0,0,0.75)', padding: '4px 10px', borderRadius: '4px', fontSize: '0.75rem', color: '#94A3B8' }}>
              🔍 Click hình để phóng to
            </div>
          </div>

          {/* Page Extracted Text / Explanation */}
          {currentPage.textEn && (
            <div style={{ background: 'rgba(255,255,255,0.02)', padding: '18px', borderRadius: 'var(--radius-md)', borderLeft: '3px solid var(--primary)' }}>
              <div style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--primary)', textTransform: 'uppercase', marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Globe size={14} /> {lang === 'vi' ? 'Nội dung chữ gốc từ trang tài liệu (English Original)' : 'Original Document Text'}
              </div>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-main)', lineHeight: 1.6, whiteSpace: 'pre-wrap' }}>
                {currentPage.textEn}
              </p>
            </div>
          )}
        </div>
      )}

      {/* Mode 2: Grid Overview */}
      {viewMode === 'grid' && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '16px' }}>
          {docContent.pages.map((pg, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{ padding: '12px', cursor: 'pointer', borderColor: currentPageIndex === idx ? 'var(--primary)' : 'var(--bg-card-border)' }}
              onClick={() => {
                setCurrentPageIndex(idx);
                setViewMode('slideshow');
              }}
            >
              <div style={{ background: '#090D14', borderRadius: '8px', overflow: 'hidden', height: '220px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '8px' }}>
                <img
                  src={pg.imageUrl}
                  alt={`Thumbnail ${pg.pageNumber}`}
                  style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-muted)' }}>
                <span>Trang {pg.pageNumber}</span>
                <span style={{ color: 'var(--primary)' }}>Xem chi tiết →</span>
              </div>
            </div>
          ))}
        </div>
      )}

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
            background: 'rgba(0, 0, 0, 0.9)',
            backdropFilter: 'blur(10px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
            cursor: 'zoom-out'
          }}
          onClick={() => setSelectedZoomImg(null)}
        >
          <img
            src={selectedZoomImg}
            alt="Zoomed diagram"
            style={{ maxWidth: '95vw', maxHeight: '95vh', objectFit: 'contain', borderRadius: '12px', boxShadow: '0 12px 40px rgba(0,0,0,0.8)' }}
          />
        </div>
      )}
    </div>
  );
};
