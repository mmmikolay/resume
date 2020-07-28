import React from 'react';

// Styles
import './Link.css';


/* This is the generic link component the other links are based on. */
const Link = ({
  className,
  desc,
  to,
  title,
  name,
  ...props
}) => {
  return (
    <a
      className={className || 'link'}
      href={to}
      title={title}
      name={name || 'link'}
    >{desc || 'link'}</a>
  );
};

export default Link;
