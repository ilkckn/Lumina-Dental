import "./LandingOurTeam.css";
import teamData from "../../OurTeamData.js";
import { MdKeyboardArrowRight } from "react-icons/md";

function LandingOurTeam() {
  return (
    <section className="landing-our-team-container">
      <div className="headers">
        <p>our team</p>
        <h1>Meet Our Experts</h1>
        <p>
          Our experienced and friendly dentists are here to give you the best
          care and the best smile.
        </p>
      </div>
      <div className="our-team">
        {teamData
          .map((member, index) => (
            <div className="team-card" key={index}>
              <div className="image">
                <img src={member.photo} alt={member.name} />
              </div>
              <div className="info">
                <p className="name">{member.name}</p>
                <p className="role">{member.role}</p>
                <p className="bio">{member.shortBio}</p>
                <p className="tag">{member.tag}</p>
              </div>
            </div>
          ))
          .slice(0, 3)}
      </div>
      <div className="meet-all-team">
        <button className="primary-btn">
          Meet All Team <MdKeyboardArrowRight className="right-arrow" />
        </button>
      </div>
    </section>
  );
}

export default LandingOurTeam;
