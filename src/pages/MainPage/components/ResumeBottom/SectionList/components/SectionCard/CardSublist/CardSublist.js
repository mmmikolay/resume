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
      <div className="sublist-text">
        <h3 className="sublist__h3 sublist-title">{title}</h3>
        <h3 className="sublist__h3 sublist-role">{role}</h3>
      </div>

      <DropDown
        descShort= {descShort}
        descLong = {descLong}
      />
    </div>

  );
};

export default CardSublist;
