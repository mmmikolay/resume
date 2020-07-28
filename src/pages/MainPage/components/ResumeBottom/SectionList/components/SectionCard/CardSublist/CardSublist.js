import React from 'react';
import {DropDown} from '../DropDown';

// Styles
import './CardSublist.css';

const CardSublist = ({
  title,
  role,
  descShort,
  descLong,
}) => {
  return (
    <div className="sublist">
      <h3>{title}</h3>
      <h3>{role}</h3>
      <DropDown
        descShort= {descShort}
        descLong = {descLong}
      />
    </div>

  );
};

export default CardSublist;
