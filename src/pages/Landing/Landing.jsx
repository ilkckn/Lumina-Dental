import "./Landing.css";
import { BiSolidLeaf } from "react-icons/bi";
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoMdArrowDroprightCircle } from "react-icons/io";
import heroImage from "../../assets/Landing-Images/hero.png";
import Expertise from "../../components/Landing-Speciality/Expertise";

function Landing() {
  return (
    <section className="landing">
      <div className="hero">
        <div className="content-left">
          <p>
            <BiSolidLeaf />
            Modern Wellness Dentistry
          </p>
          <div className="main-header">
            <h1>Your Smile</h1>
            <h1>May You Have Light</h1>
          </div>
          <p className="desc">
            Forget your fear of the clinic at Lumina Dental. With our modern
            technology and spa-like clinic environment, we transform dental
            treatment into a wellness experience.
          </p>
          <div className="btns">
            <button className="primary-btn">
              Book an Appointment{" "}
              <MdKeyboardArrowRight className="right-arrow" />
            </button>
            <button className="secondary-btn">
              Learn More <IoMdArrowDroprightCircle className="right-arrow" />
            </button>
          </div>
        </div>

        <div className="content-right">
          <div className="image">
            <img src={heroImage} alt="Hero" />
          </div>
        </div>
      </div>
      <div className="expertise">
        <Expertise />
      </div>
      <div className="comments"></div>
      <div className="team"></div>
      <div className="contact"></div>
    </section>
  );
}

export default Landing;
