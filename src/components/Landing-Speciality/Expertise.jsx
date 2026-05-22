import "./Expertise.css";
import card1 from "../../assets/Landing-Images/hero-card-1.jpg";
import { BsFillEmojiSmileFill } from "react-icons/bs";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaTooth, FaStethoscope } from "react-icons/fa";

function Expertise() {
  return (
    <section className="expertise-container">
      <div className="header">
        <h1>Our Expertise</h1>
        <p>
          We offer personalized treatment approaches, combining advanced
          technology with an aesthetic perspective.
        </p>
      </div>
      <div className="specialties">
        <div className="specialty-card">
          <div className="card1">
            <img src={card1} alt="Specialty 1" />
            <div className="info">
              <span>
                <BsFillEmojiSmileFill className="smile-icon" />
              </span>
              <h2>The Design of an Aesthetic Smile</h2>
              <p>
                We design a natural and striking smile, perfectly suited to your
                facial features using digital technologies.
              </p>
              <button>
                Learn More <MdKeyboardArrowRight className="right-arrow" />
              </button>
            </div>
            <div className="overlay"></div>
          </div>
          <div className="card2">
            {/* <img src={card1} alt="Specialty 2" /> */}
            <div className="info">
              <span>
                <FaTooth className="tooth-icon" />
              </span>
              <h2>Implant Treatment</h2>
              <p>
                We permanently replace your missing teeth with biocompatible
                titanium implants shaped like natural tooth roots.
              </p>
            </div>
          </div>
        </div>
        <div className="specialty-card2">
          <div className="card3">
            <div className="info">
              <span>
                <BsFillEmojiSmileFill className="smile-icon" />
              </span>
              <h2>The Design of an Aesthetic Smile</h2>
              <p>
                We design a natural and striking smile, perfectly suited to your
                facial features using digital technologies.
              </p>
            </div>
          </div>
          <div className="card4">
            <span>
              <FaStethoscope className="stethoscope-icon"/>
            </span>
            <div className="info">
              <h2>Orthodontic Treatment</h2>
              <p>
                We straighten your teeth and improve your bite with modern
                orthodontic solutions.
              </p>
            </div>
            <button>
              Learn More <MdKeyboardArrowRight className="right-arrow" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Expertise;
