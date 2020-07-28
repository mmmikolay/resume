import React from 'react';
import {SectionCard} from './components';
import {sectionItems} from './sectionItems';

// Styles
import './SectionList.css';

const SectionList = () => {
  const displayCards = () => {
    return sectionItems.map((item, i)=>{
      return <li key={i} className="section-list__li">
        <SectionCard
          title={item.title}
          listItems={item.listItems}
        />
      </li>;
    });
  };
  return (
    <div className="section-list">
      <dl className="section-list__dl">
        {displayCards()}
      </dl>
    </div>
  );
};

export default SectionList;
