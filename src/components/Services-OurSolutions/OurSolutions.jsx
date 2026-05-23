import "./OurSolutions.css";
import { HiSparkles } from "react-icons/hi2";
import { FiArrowRight } from "react-icons/fi";
import { RiToothLine } from "react-icons/ri";
import { FaAngleRight } from "react-icons/fa6";
import { CgMenuMotion } from "react-icons/cg";
import { TbMoodKid } from "react-icons/tb";
import { MdFlare, MdOutlineHealthAndSafety } from "react-icons/md";
import { LuMicroscope } from "react-icons/lu";
import { PiCalendarCheckBold } from "react-icons/pi";

function OurSolutions() {
  return (
    <section className="our-solutions-container">
      <div className="headers">
        <h2>Solutions for your smile</h2>
        <p>
          With our team of specialist physicians and personalized treatment
          approaches, we offer solutions tailored to every need.
        </p>
      </div>
      <div className="solutions">
        <div className="solution-card1">
          <div className="card">
            <div className="content-left">
              <div className="all-info">
                <div className="icon">
                  <HiSparkles className="sparkles-icon" />
                </div>
                <div className="info">
                  <h2>The Design of an Aesthetic Smile</h2>
                  <p>
                    We pre-plan the smile that best suits your facial features
                    and personality using digital technologies.
                  </p>
                </div>
                <p className="details">
                  Details <FiArrowRight className="arrow-icon" />
                </p>
              </div>
            </div>
            <div className="content-right">
              <img src="/OurSolution-Images/card-image-1.png" alt="" />
            </div>
          </div>

          <div className="card">
            <div className="icon">
              <RiToothLine className="tooth-icon" />
            </div>
            <div className="info">
              <h2>Implant Treatment</h2>
              <p>
                Solutions that replace lost teeth, offering a natural appearance
                and lifelong comfort.
              </p>
            </div>
            <div className="bottom-content">
              <p>Permanent solution</p>
              <span>
                <FaAngleRight className="angle-right-icon" />
              </span>
            </div>
          </div>

          <div className="card">
            <div className="icon">
              <CgMenuMotion className="motion-icon" />
            </div>
            <div className="info">
              <h2>Clear Aligner</h2>
              <p>
                We align your teeth without wires, using clear and removable
                aligners.
              </p>
            </div>
            <div className="bottom-content">
              <p>invisible</p>
              <span>
                <FaAngleRight className="angle-right-icon" />
              </span>
            </div>
          </div>
        </div>

        <div className="solution-card2">
          <div className="card">
            <div className="icon">
              <TbMoodKid className="kid-icon" />
            </div>
            <div className="info">
              <h2>Child Health</h2>
              <p>
                We provide our young guests with a fun and fearless dental
                experience.
              </p>
            </div>
            <div className="bottom-content">
              <p>unafraid</p>
              <span>
                <FaAngleRight className="angle-right-icon" />
              </span>
            </div>
          </div>

          <div className="card">
            <div className="icon">
              <MdFlare className="flare-icon" />
            </div>
            <div className="info">
              <h2>Teeth whitening</h2>
              <p>
                Boost the energy of your smile with safe and effective whitening
                in a single session.
              </p>
            </div>
            <div className="bottom-content">
              <p>shining</p>
              <span>
                <FaAngleRight className="angle-right-icon" />
              </span>
            </div>
          </div>

          <div className="three-card">
            <div className="card">
              <h2>Gum Treatments</h2>
              <p>We protect your gum health the foundation of healthy teeth.</p>
              <MdOutlineHealthAndSafety className="health-icon" />
            </div>

            <div className="card">
              <h2>root treatment</h2>
              <p>
                Pain free and rapid endodontic solutions without losing your
                tooth.
              </p>
              <LuMicroscope className="microscope-icon" />
            </div>
            
            <div className="card">
              <div className="left">
                <PiCalendarCheckBold className="calendar-icon" />
              </div>
              <div className="right">
                <h2>General Dental Examination</h2>
                <p>
                  Take precautions through regular checks before problems
                  escalate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurSolutions;
