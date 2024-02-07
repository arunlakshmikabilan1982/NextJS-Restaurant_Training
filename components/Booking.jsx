"use client";

import { useState } from "react";
import { Heading } from "./Heading";
import { Underline } from "./Underline";
// import { useRouter } from "next/navigation";

export function Booking() {
  // const [data, setData] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [time, setTime] = useState("");
  const [ofPeople, setOfPeople] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  // const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !phone || !time || !ofPeople || !message) {
      setError("All fields required");
    }
    form.reset();
    // try {
    //   const alreadyBooked = await fetch("api/bookedSlots", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({ time }),
    //   });
    //   const { booking } = await alreadyBooked.json();

    //   if (booking) {
    //     setError("no Booking Available at that time. ");
    //     return;
    //   }

    //   const res = await fetch("api/booking", {
    //     method: "POST",
    //     headers: {
    //       "content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       name,
    //       email,
    //       phone,
    //       time,
    //       ofPeople,
    //       message,
    //     }),
    //   });
    //   console.log(res);
    //   if (res.ok) {
    //     const form = e.target;
    //     form.reset();
    //     router.push("/");
    //   } else {
    //     console.log("Slot Booking Failed");
    //   }
    // } catch (error) {
    //   console.log("Error while booking", error);
    // }

    // setData({
    //   name: "",
    //   email: "",
    //   phone: "",
    //   time: "",
    //   ofPeople: "",
    //   message: "",
    // });
  };

  // function handle(e) {
  //   const newData = { ...data };
  //   newData[e.target.id] = e.target.value;
  //   setData(newData);
  // }
  return (
    <div className="bookingForm" id="Booking">
      <Heading title={"RESERVATION"} description={"Book a Table"} />
      <form className="bookingInput" onSubmit={handleSubmit}>
        <div className="booking1Line">
          <input
            type="text"
            onChange={(e) => {
              setName(e.target.value);
            }}
            id="name"
            name="name"
            placeholder="Enter your name"
          ></input>

          <input
            type="text"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            id="email"
            name="email"
            placeholder="Enter your Email"
          ></input>

          <input
            type="tel"
            onChange={(e) => {
              setPhone(e.target.value);
            }}
            id="phone"
            name="phone"
            placeholder="Phone"
          ></input>
        </div>
        <div className="booking2Line">
          <input
            className="clock"
            type="time"
            onChange={(e) => {
              setTime(e.target.value);
            }}
            id="time"
            name="time"
            placeholder="Time"
          ></input>

          <input
            type="number"
            onChange={(e) => {
              setOfPeople(e.target.value);
            }}
            id="ofPeople"
            name="people"
            placeholder="#Of people"
          ></input>
        </div>

        <div className="bookingMessage">
          <textarea
            type="text"
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            id="message"
            name="message"
            placeholder="Message"
          ></textarea>
        </div>
        {error && <div className="showError">{error}</div>}
        <div className="text-center">
          <center>
            <button type="submit">Book a form</button>
          </center>
        </div>
      </form>
      <Underline />
    </div>
  );
}
