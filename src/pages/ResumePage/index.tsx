import React from 'react';
import { PDFViewer } from '@react-pdf/renderer';

import Resume from '../../components/Resume';

const ResumePage = () => {
  return (
    <PDFViewer style={{ width: '100%', height: '100vh' }}>
      <Resume />
    </PDFViewer>
  );
};

export default ResumePage;
