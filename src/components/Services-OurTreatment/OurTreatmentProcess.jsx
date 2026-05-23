import "./OurTreatmentProcess.css";
import { PiUserList } from "react-icons/pi";
import { RiCompassesFill } from "react-icons/ri";
import { MdOutlineMedicalServices } from "react-icons/md";
import { IoCloudDoneSharp } from "react-icons/io5";

const OurTreatmentProcess = () => {
  return (
    <section className="our-treatment-process-container">
      <div className="headers">
        <h2>Treatment Process</h2>
        <p>
          At Lumina Dental, every patient is unique. We follow a four-stage
          process that makes your journey clear and comfortable.
        </p>
      </div>
      <div className="processes">
        <div className="process-card">
          <div className="icon">
            <span>01</span>
            <PiUserList className="user-icon" />
          </div>
          <h2 className="process">examination</h2>
          <p>
            We analyze your oral and dental health in detail using advanced
            imaging techniques.
          </p>
        </div>

        <div className="process-card">
          <div className="icon">
            <span>02</span>
            <RiCompassesFill className="user-icon" />
          </div>
          <h2 className="process">planning</h2>
          <p>
            We create a digital treatment plan tailored to your needs, and
            suited to your budget and schedule.
          </p>
        </div>

        <div className="process-card">
          <div className="icon">
            <span>03</span>
            <MdOutlineMedicalServices className="user-icon" />
          </div>
          <h2 className="process">Treatment</h2>
          <p>
            We complete the treatment process using minimally invasive
            techniques, prioritizing your comfort.
          </p>
        </div>

        <div className="process-card">
          <div className="icon">
            <span>04</span>
            <IoCloudDoneSharp className="user-icon" />
          </div>
          <h2 className="process">Check</h2>
          <p>
            We preserve the longevity and health of your smile through periodic
            check-ups following treatment.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurTreatmentProcess;
