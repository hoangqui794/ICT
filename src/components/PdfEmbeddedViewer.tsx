import React from 'react';
import { Download, ExternalLink, FileText } from 'lucide-react';

interface PdfEmbeddedViewerProps {
  pdfRelativePath: string;
  pdfFileName: string;
  topicTitle: string;
}

export const PdfEmbeddedViewer: React.FC<PdfEmbeddedViewerProps> = ({
  pdfRelativePath,
  pdfFileName,
  topicTitle
}) => {
  // Encode URI for Windows path containing spaces and Vietnamese diacritics
  const encodedPath = encodeURI(pdfRelativePath);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div className="pdf-toolbar glass-card" style={{ borderRadius: 'var(--radius-md)', padding: '12px 20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <FileText size={20} color="var(--primary)" />
          <div>
            <div style={{ fontWeight: 600, fontSize: '0.95rem', color: '#FFF' }}>{pdfFileName}</div>
            <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Tài liệu đính kèm cho bài: {topicTitle}</div>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <a
            href={`/${encodedPath}`}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-btn"
            style={{ fontSize: '0.85rem', padding: '6px 14px', background: 'rgba(255,255,255,0.06)' }}
          >
            <ExternalLink size={14} /> Mở Cửa Sổ Mới
          </a>
          <a
            href={`/${encodedPath}`}
            download={pdfFileName}
            className="btn-primary"
            style={{ fontSize: '0.85rem', padding: '6px 16px' }}
          >
            <Download size={14} /> Tải PDF
          </a>
        </div>
      </div>

      <div className="pdf-viewer-wrapper">
        <iframe
          src={`/${encodedPath}`}
          title={pdfFileName}
          className="pdf-iframe"
        />
      </div>
    </div>
  );
};
