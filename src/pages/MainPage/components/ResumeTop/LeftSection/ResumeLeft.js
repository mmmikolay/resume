import React from 'react';
import {
  ResumeContact,
  ResumeHeading,
  ResumeDescription,
} from './components';

// Styles
import './ResumeLeft.css';

const ResumeLeft = () => {
  return (
    <div className="resume-left-container">
      <ResumeHeading name="İlker Tuncer"/>
      <ResumeContact />
      <ResumeDescription />
    </div>
  );
};

export default ResumeLeft;
