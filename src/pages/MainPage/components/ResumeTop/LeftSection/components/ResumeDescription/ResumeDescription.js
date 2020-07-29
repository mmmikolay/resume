import React from 'react';
import {
  paragraph1,
  paragraph2,
} from './DescriptionFields';

// Styles
import './ResumeDescription.css';

const ResumeDescription = () => {
  return (
    <div className="desc-container shadowy">
      <p className="desc__p">
        {paragraph1.section1}
        <strong> React</strong>
        {paragraph1.section2}
      </p>
      <p className="desc__p">
        {paragraph2.section1}
      </p>
    </div>
  );
};

export default ResumeDescription;
