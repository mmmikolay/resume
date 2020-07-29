import React from 'react';
import {ResumeTop} from '../ResumeTop';
import {ResumeBottom} from '../ResumeBottom';

// Styles
import './ResumeBody.css';

const ResumeBody = () => {
  return (
    <div className="resume-body">
      <ResumeTop />
      <ResumeBottom />
    </div>
  );
};

export default ResumeBody;
