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
  return (
    <div className="dropdown">
      <div className="dropdown-title">
        <p>{descShort}</p>
        { descLong &&
        <div
          className="dropdown-arrow"
          onClick={() => setShow((state) => !state)}
        >
          {show ?
          <BsDash/> :
          <BsChevronCompactDown/>
          }
        </div>
        }
      </div>
      {descLong && show &&
      <div
        className="dropdown-desc"
      >
        <p>{descLong.text}</p>
        <ul>
          {displayDescItems()}
        </ul>
      </div>
      }
    </div>

  );
};

export default DropDown;
