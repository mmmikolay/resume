import React from 'react';
import {Contact} from './Contact';

// Styles
import './ResumeContact.css';

const ResumeContact = () => {
  return (
    <div className="contacts-container">
      <Contact
        name="Phone"
        desc="+90-537-964-7363"
        to="tel:+905379647363"
      />
      <Contact
        name="Email"
        desc="tuncerilk@gmail.com"
        to="mailto:tuncerilk@gmail.com"
      />

    </div>
  );
};

export default ResumeContact;
