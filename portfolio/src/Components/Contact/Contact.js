import React from "react";
import "./Contact.scss";

class Contact extends React.Component {
  render() {
    return (
      <div className="contactPage">
        <div className="contact-info">
          <h3>Contact</h3>

          <h4>Lets Connect!</h4>

          <a rel="noreferrer" target="_blank" href="mailto:shyanw321@gmail.com">
            <button className="cta-button">Call To Action</button>
          </a>
        </div>
      </div>
    );
  }
}

export default Contact;
