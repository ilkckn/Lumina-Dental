import "./Services.css";
import { MdKeyboardArrowRight, MdOutlineVerified } from "react-icons/md";
import { IoArrowDown } from "react-icons/io5";
import heroImage from "../../assets/Services-Images/services.png";
import OurSolutions from "../../components/Services-OurSolutions/OurSolutions";
import OurTreatmentProcess from "../../components/Services-OurTreatment/OurTreatmentProcess";
import FrequentlyAskedQuestions from "../../components/Services-Frequently-Asked/FrequentlyAskedQuestions";
import ScheduleAppointment from "../../components/Services-ScheduleAppointment/ScheduleAppointment";

function Services() {
  return (
    <section className="services-container">
      <div className="hero">
        <div className="content-left">
          <p>Premium Dental Care</p>
          <div className="main-header">
            <h1>Treatment and</h1>
            <h1>Our Services</h1>
          </div>
          <p className="desc">
            At Lumina Dental, we combine modern technology with the comfort of a
            boutique spa. As we redesign your smile, we offer you a personalized
            and transparent treatment process.
          </p>
          <div className="btns">
            <button className="primary-btn">
              Book an Appointment{" "}
              <MdKeyboardArrowRight className="right-arrow" />
            </button>
            <button className="secondary-btn">
              Explore our processes <IoArrowDown className="down-arrow" />
            </button>
          </div>
        </div>
        <div className="content-right">
          <div className="image">
            <img src={heroImage} alt="Hero" />
          </div>
          <div className="verified-situation">
            <div className="icon">
              <MdOutlineVerified className="verified-icon" />
            </div>
            <div className="verified-info">
              <p>Modern Technology</p>
              <p>State of the art equipment</p>
            </div>
          </div>
        </div>
      </div>
      <div className="our-solutions">
        <OurSolutions />
      </div>
      <div className="our-treatment-process">
        <OurTreatmentProcess />
      </div>
      <div className="frequently-asked-questions">
        <FrequentlyAskedQuestions />
      </div>
      <div className="schedule-appointment">
        <ScheduleAppointment />
      </div>
    </section>
  );
}

export default Services;
