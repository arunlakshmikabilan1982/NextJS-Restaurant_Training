"use client";
import { useState } from "react";

function ContactForm() {
  const [inputs, setInputs] = useState({});

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    setInputs((values) => ({ ...values, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(inputs);
  }
  return (
    <div className="ContactForm">
      <form className="contactUSForm" onSubmit={handleSubmit}>
        <div className="FormFirst">
          <input
            className="contactUSInput"
            type="text"
            value={inputs.username}
            name="username"
            placeholder="Enter Name"
            onChange={handleChange}
          ></input>
          <input
            type="email"
            value={inputs.email}
            name="email"
            placeholder="Enter Email"
            onChange={handleChange}
          ></input>
        </div>
        <input
          className="contactText"
          type="text"
          value={inputs.subject}
          name="subject"
          placeholder="Subject"
          onChange={handleChange}
        ></input>

        <textarea
          className="contactTextArea"
          type="textarea"
          value={inputs.message}
          name="message"
          placeholder="Message"
          onChange={handleChange}
        ></textarea>
        <div className="contactformSubmit">
          <input className="ContactUSSubmit" type="submit"></input>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
