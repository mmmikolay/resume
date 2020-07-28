import React from 'react';
import {resume_picture} from '../../../../../static/images';

// Styles
import './ResumePicture.css';

const ResumePicture = ({
  img,
  alt,
  ...props
}) => {
  return (
    <div
      className="img-container img-container--resume"
    >
      <img
        className="img img--resume"
        // src={img || 'https://picsum.photos/180/300'}
        src={resume_picture}
        alt={alt}
      />
    </div>
  );
};

export default ResumePicture;
