import React from 'react';

// Styles
import './ResumeHeading.css';

const ResumeHeading = ({
  name,
  ...props
}) => {
  return (
    <div className="resume-heading">
      <h1 className="resume-heading__h1">{name}</h1>
    </div>
  );
};

export default ResumeHeading;
