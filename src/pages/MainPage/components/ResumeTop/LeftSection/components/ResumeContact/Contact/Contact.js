import React from 'react';
// TODO: Create an imports file for long import links.
import {Link} from '../../../../../../../../common/components/links';

// Styles
import './Contact.css';

const Contact = ({
  name,
  desc,
  to,
  ...props
}) => {
  return (
    <div className="contact">
      <p className="contact__p">{name}: </p>
      <Link
        className="link link--contact"
        desc={desc}
        to={to}
      />
    </div>
  );
};

export default Contact;
