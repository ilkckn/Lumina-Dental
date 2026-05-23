import "./Navbar.css";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { HiOutlineMenu } from "react-icons/hi";
import logo from "../../assets/logo/logo.png";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 820) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="navbar">
      <nav>
        <div className="logo">
          <h1>
            Lumina <span>D</span>ental
          </h1>
        </div>
        <div className="links">
          <ul>
            <li>
              <NavLink to="/" onClick={scrollToTop} end>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" onClick={scrollToTop}>
                Services
              </NavLink>
            </li>
            <li>
              <NavLink to="/technology" onClick={scrollToTop}>
                Technology
              </NavLink>
            </li>
            <li>
              <NavLink to="/our-story" onClick={scrollToTop}>
                Our Story
              </NavLink>
            </li>
            <li>
              <NavLink to="/our-team" onClick={scrollToTop}>
                Team
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="appointment">
          <HiOutlineMenu className="menu-icon" onClick={handleMenuToggle} />
          <button>Book Appointment</button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="mobile-menu-container">
          <div className="overlay-background" onClick={handleMenuToggle}></div>
          <div className="mobile-menu">
            <div className="mobile-logo">
              <h1>
                Lumina <span>Dental</span>
              </h1>
              <img src={logo} alt="Lumina Dental Logo" />
            </div>
            <ul>
              <li>
                <NavLink to="/" onClick={scrollToTop}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/services" onClick={scrollToTop}>
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink to="/technology" onClick={scrollToTop}>
                  Technology
                </NavLink>
              </li>
              <li>
                <NavLink to="/our-story" onClick={scrollToTop}>
                  Our Story
                </NavLink>
              </li>
              <li>
                <NavLink to="/our-team" onClick={scrollToTop}>
                  Our Team
                </NavLink>
              </li>
            </ul>
            <div className="mobile-appointment">
              <button>Book Appointment</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Navbar;
