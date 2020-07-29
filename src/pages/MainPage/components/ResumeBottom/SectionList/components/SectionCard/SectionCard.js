import React from 'react';
import {CardSublist} from './CardSublist';

// Styles
import './SectionCard.css';

const SectionCard = ({
  title,
  listItems,
  ...props
}) => {
  const displaySublists = () => {
    return listItems.map((item, i)=>{
      return <li key={i} className="card-container__li">
        <CardSublist
          title = {item.title}
          role = {item.role}
          descShort = {item.descShort}
          descLong={item.descLong}
        />
      </li>;
    });
  };

  return (
    <div className="card-container">
      <h2 className="card-container__h2">{title}</h2>
      <ul className="card-container__ul">
        {displaySublists()}
      </ul>
    </div>
  );
};

export default SectionCard;
