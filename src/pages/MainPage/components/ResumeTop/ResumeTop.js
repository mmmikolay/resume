import React from 'react';
import {ResumeLeft} from './LeftSection';
import {ResumePicture} from './ResumePicture';

// Styles
import './ResumeTop.css';

const ResumeTop = () => {
  return (
    <div className="resume-top">
      <ResumeLeft/>
      <ResumePicture />
    </div>
  );
};

export default ResumeTop;
