import React from 'react';

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
        src={img || 'https://picsum.photos/180/300'}
        alt={alt}
      />
    </div>
  );
};

export default ResumePicture;
