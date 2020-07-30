import React, {useState} from 'react';
import {
  BsDash,
  BsChevronCompactDown,
} from 'react-icons/bs';

// Styles
import './DropDown.css';

const DropDown = ({
  descLong,
  descShort,
}) => {
  const [show, setShow] = useState(false);


  const displayDescItems = () => {
    return descLong.items.map((item, i)=>{
      return <li key={i} className="dropdown-desc__li">
        {item}
      </li>;
    });
  };

  const displayShortItems = () => {
    return descShort.map((item, i)=>{
      return <p key={i} className="dropdown-title__p">
        {item}
      </p>;
    });
  };

  const titleClasses = descLong ?
'dropdown-title interractible' :
'dropdown-title uninterractible';
  return (
    <div className="dropdown shadowy">
      <div
        className={titleClasses}
        onClick={() => setShow((state) => !state)}
      >
        <div className="dropdown-paragraphs">
          {displayShortItems()}
        </div>
        { descLong &&
        <div className="dropdown-arrow">
          {show ?
          <BsDash /> :
          <BsChevronCompactDown />
          }
        </div>
        }
      </div>
      {descLong &&
      <div
        className={`dropdown-desc ${show}`}
      >
        <p>{descLong.text}</p>
        <ul className='dropdown__ul'>
          {displayDescItems()}
        </ul>
      </div>
      }
    </div>

  );
};

export default DropDown;
