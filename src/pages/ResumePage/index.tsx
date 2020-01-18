import React from "react";
import { PDFViewer } from "@react-pdf/renderer";

import Resume from "../../components/Resume";

const ResumePage = () => {
  return (
    <PDFViewer width="100%" height="100%">
      <Resume />
    </PDFViewer>
  );
};

export default ResumePage;
