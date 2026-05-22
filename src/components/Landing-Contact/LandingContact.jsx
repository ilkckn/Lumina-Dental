import "./LandingContact.css";
import { FaHeadphonesAlt } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { FiMapPin } from "react-icons/fi";
import { LuCalendarDays } from "react-icons/lu";
import { MdChevronRight } from "react-icons/md";

function LandingContact() {
  return (
    <section className="landing-contact-container">
      <div className="headers">
        <p>contact</p>
        <h1>Book an Appointment</h1>
        <p>
          Fill in the form and we'll get back to you within the day. Or just
          give us a call, we're always happy to help.
        </p>
      </div>
      <div className="contact-info">
        <div className="find-us">
          <h2>Find Us</h2>
          <p>
            We're located in the heart of the city. Walk-ins welcome during
            opening hours.
          </p>
          <div className="info">
            <div className="phone">
              <div className="icon">
                <FaHeadphonesAlt className="phone-icon" />
              </div>
              <div className="phone-info">
                <p>phone</p>
                <p>+49 7628 123 456</p>
              </div>
            </div>
            <div className="email">
              <div className="icon">
                <MdAlternateEmail className="email-icon" />
              </div>
              <div className="email-info">
                <p>email</p>
                <p>hello@luminadental.de</p>
              </div>
            </div>
            <div className="address">
              <div className="icon">
                <FiMapPin className="address-icon" />
              </div>
              <div className="address-info">
                <p>address</p>
                <p>123 Main Street, 79588 Efringen-Kirchen</p>
              </div>
            </div>
            <div className="hours">
              <div className="icon">
                <LuCalendarDays className="hours-icon" />
              </div>
              <div className="hours-info">
                <p>hours</p>
                <div className="days">
                  <span>Mon–Fri: 08:00–18:00</span>
                  <span>Sat: 09:00–13:00</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="send-message">
          <h2>Send Us a Message</h2>
          <form action="">
            <div className="firstName-lastName">
              <div className="first-name">
                <label htmlFor="firstName">First Name</label>
                <input type="text" id="firstName" name="firstName" />
              </div>
              <div className="last-name">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" id="lastName" name="lastName" />
              </div>
            </div>
            <div className="phone">
              <label htmlFor="phone">Phone</label>
              <input type="number" id="phone" name="phone" />
            </div>
            <div className="service">
              <label htmlFor="service">Service Interested In</label>
              <select name="service" id="service">
                <option value="general">General Dentistry</option>
                <option value="cosmetic">Cosmetic Dentistry</option>
                <option value="orthodontics">Orthodontics</option>
                <option value="emergency">Emergency Care</option>
              </select>
            </div>
            <div className="message">
              <label htmlFor="message">Message (Optional)</label>
              <textarea name="message" id="message" rows="5"></textarea>
            </div>
            <div className="submit-btn">
              <button type="submit">
                Request Appointment <MdChevronRight className="right-arrow" />
              </button>
            </div>
            <div className="message"></div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default LandingContact;
