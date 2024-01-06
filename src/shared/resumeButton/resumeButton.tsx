import { useEffect, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { useTheme } from 'styled-components';

import { useWindowDimensions } from '../../hooks';
import { IconButton } from '../iconButton/iconButton';
import { TooltipWrapper } from '../tooltipWrapper/tooltipWrapper';
import { Subtitle1 } from '../typography/typography';

import { Container, PaginationButtonContainer } from './resumeButton.styles';

export const ResumeButton = () => {
  const [showDownload, setShowDownload] = useState(false);
  const [pageNum, setPageNum] = useState(1);
  const { height } = useWindowDimensions();

  useEffect(() => {
    pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  });
  const theme = useTheme();
  const renderClickToDownload = () => (
    <Subtitle1>CLICK TO VIEW AND DOWNLOAD THE RESUME</Subtitle1>
  );
  const renderChangePageButton = () => {
    if (pageNum === 1) {
      return (
        <PaginationButtonContainer onClick={() => setPageNum(2)}>
          {'Next >>'}
        </PaginationButtonContainer>
      );
    }

    return (
      <PaginationButtonContainer onClick={() => setPageNum(1)}>
        {'<< Prev'}
      </PaginationButtonContainer>
    );
  };
  const renderPDFDocument = () => {
    return (
      <Container>
        {showDownload && renderClickToDownload()}
        {showDownload && renderChangePageButton()}
        <Document
          file={theme.files.resume}
          onLoadSuccess={() => setShowDownload(true)}
        >
          <Page
            pageNumber={pageNum}
            renderTextLayer={false}
            height={0.8 * height}
          />
        </Document>
        {showDownload && renderClickToDownload()}
      </Container>
    );
  };

  const openResume = () => {
    window.open(theme.links.resume, '_blank', 'noreferrer');
  };
  return (
    <TooltipWrapper
      afterHide={() => setShowDownload(false)}
      opacity={1}
      clickable
      component={renderPDFDocument()}
    >
      <IconButton icon='filePDF2' onClick={() => openResume()} />
    </TooltipWrapper>
  );
};
