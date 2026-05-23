import "./ScheduleAppointment.css";

const ScheduleAppointment = () => {
  return (
    <section className="schedule-appointment-container">
      <div className="content">
        <div className="headers">
          <h2>Schedule your appointment today.</h2>
          <p>
            Contact us to determine the most suitable treatment plan for you and
            take the first step toward a healthy smile.
          </p>
        </div>
        <div className="btns">
          <button className="primary-btn">Book an Appointment</button>
          <button className="secondary-btn">Contact Us</button>
        </div>
      </div>
    </section>
  );
};

export default ScheduleAppointment;
