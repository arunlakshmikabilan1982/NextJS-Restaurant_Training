export default function BookingSample() {
  return (
    <div className="BookingMain">
      <div className="BookingHeading">
        <h3>Reservation</h3>
        <h1>Book the Table</h1>
      </div>
      <div className="inputGroup">
        <input type="text" placeholder="Name" id="name"></input>
        <input type="text" placeholder="Email" id="email"></input>
        <input type="text" placeholder="Mobile Number" id="mobile"></input>
        <input type="text" placeholder="Date" id="date"></input>
        <input type="text" placeholder="Time" id="time"></input>
        <input type="text" placeholder="No Of People" id="people"></input>
        <textarea
          type="text"
          name="DEscription"
          id="Description"
          placeholder="Enter the Description"
          rows="4"
        ></textarea>
      </div>
    </div>
  );
}
