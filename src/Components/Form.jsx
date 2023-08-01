import React from "react";
import "./Form.css";
import  { useRef } from "react";

function Form() {
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
      email: emailRef.current.value,
      message: messageRef.current.value,
    };
    alert("tadaaa!: \n" + JSON.stringify(data) + "Your data 😎");
  };

  return (
    <div className="container">
      <h1>Contact us</h1>

      <form className="form">
        <div className="name">
          <label for="firstName">First name</label>
          <input
            type="text"
            name="firstName"
            className="firstName"
            tabIndex="1"
            ref={firstNameRef}
          />
          <label for="lastName">Last name</label>
          <input
            type="text"
            name="lastName"
            className="lastName"
            tabIndex="2"
            ref={lastNameRef}
          />
          <label for="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            className="email"
            placeholder="example@corp.com"
            tabIndex="3"
            ref={emailRef}
          />
          <label for="message">Message</label>

          <textarea
            placeholder="Start typing..."
            className="message"
            name="message"
            ref={messageRef}
          />
        </div>
        <button type="submit" className="send">
          Send
        </button>
      </form>
    </div>
  );
}
export default Form;
