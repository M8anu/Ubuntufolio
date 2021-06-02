import React from 'react';
import './Contact.css';
import ListGroup from '../components/ListGroup';


export default function Contact() {
  return (
    <div className="ContactBody">
      <h1>This is how you can reach me!</h1>
      <div>
        {/* <h4>Find me on</h4> */}
        <ListGroup>
          <a href="mailto:m8anu@workmail.com" target="_blank" rel="noopener noreferrer">
            {/**/}
            <i class="fas fa-envelope-open-text"></i>
            <span> m8anu@workmail.com</span>
          </a>
          <a href="https://github.com/M8anu" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i> github.com/M8anu
          </a>
          <a href="https://twitter.com/_M1ndbl0w" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i> twitter.com/_M1ndbl0w
          </a>
          <a href="https://t.me/Mindbl0w" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-telegram"></i> Send me a Telegram message!
          </a>
        </ListGroup>
      </div>
    </div>
  );
}
