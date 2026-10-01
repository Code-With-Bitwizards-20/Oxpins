import styling from "./Sidebar.module.css";
import { RxCross1 } from "react-icons/rx";
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HiOutlineMail } from "react-icons/hi";
import { FaPhoneAlt } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import PropTypes from "prop-types";

const Sidebar = ({ isVisible, onClose }) => {
  return (
    <div
      className={styling.sidebar}
      style={{
        transform: isVisible ? "translateX(0)" : "translateX(-100%)",
        transition: "transform 0.3s ease",
      }}
    >
      <div className={styling.sidebarHeader}>
        <img
          src="/images/kaltech white svg.svg"
          alt="Logo"
          className={styling.logo}
        />

        <button className={styling.closebtn} onClick={onClose}>
          <RxCross1 />
        </button>
      </div>

      <div className={styling.navbar}>
        <ul>
          <li>
            <Link to="/Home">Home</Link>
          </li>
          <li className={styling.dropdown}>
            Pages{" "}
            <ul className={styling.dropdownContent}>
              <li>
                <Link to="/About-us">
                  About &nbsp; <FaChevronRight />
                </Link>
              </li>
              <li>
                <Link to="">
                  {" "}
                  Volunteer &nbsp;
                  <FaChevronRight />
                </Link>
              </li>
              <li>
                <Link to="">
                  Become a Volunteer &nbsp; <FaChevronRight />
                </Link>
              </li>
              <li>
                <Link to="">
                  Volunteer Carousel &nbsp; <FaChevronRight />
                </Link>
              </li>
              <li>
                <Link to="">
                  Gallery &nbsp; <FaChevronRight />
                </Link>
              </li>
              <li>
                <Link to="">
                  Gallery Carousel &nbsp; <FaChevronRight />
                </Link>
              </li>
              <li>
                <Link to="">
                  FAQS <FaChevronRight />
                </Link>
              </li>
              <li>
                <Link to="">
                  404 &nbsp; <FaChevronRight />
                </Link>
              </li>
            </ul>{" "}
          </li>
          <li className={styling.dropdown}>
            Donations{" "}
            <ul className={styling.dropdownContent}>
              <li>
                <Link to="">
                  Donation &nbsp; <FaChevronRight />
                </Link>
              </li>
              <li>
                <Link to="">
                  {" "}
                  Donation List &nbsp;
                  <FaChevronRight />
                </Link>
              </li>
              <li>
                <Link to="">
                  Donation Carousel &nbsp; <FaChevronRight />
                </Link>
              </li>
              <li>
                <Link to="">
                  Donation Details &nbsp; <FaChevronRight />
                </Link>
              </li>
              <li>
                <Link to="">
                  Donate Now &nbsp; <FaChevronRight />
                </Link>
              </li>
            </ul>{" "}
          </li>
          <li className={styling.dropdown}>
            Events
            <ul className={styling.dropdownContent}>
              <li>
                <Link to="">
                  Events &nbsp; <FaChevronRight />
                </Link>
              </li>
              <li>
                <Link to="">
                  Events Carousel &nbsp;
                  <FaChevronRight />
                </Link>
              </li>
              <li>
                <Link to="">
                  Event Details &nbsp; <FaChevronRight />
                </Link>
              </li>
            </ul>{" "}
          </li>

          <li className={styling.dropdown}>
            News
            <ul className={styling.dropdownContent}>
              <li>
                <Link to="">
                  News &nbsp; <FaChevronRight />
                </Link>
              </li>
              <li>
                <Link to="">
                  News Carousel &nbsp;
                  <FaChevronRight />
                </Link>
              </li>
              <li>
                <Link to="">
                  {" "}
                  News Right Sidebar &nbsp; <FaChevronRight />
                </Link>
              </li>
              <li>
                <Link to="">
                  News Left Sidebar &nbsp; <FaChevronRight />
                </Link>
              </li>
              <li>
                <Link to="">
                  News Details &nbsp; <FaChevronRight />
                </Link>
              </li>
              <li>
                <Link to="">
                  News Grid &nbsp; <FaChevronRight />
                </Link>
              </li>
            </ul>{" "}
          </li>
          <li className={styling.dropdown}>
            Shop
            <ul className={styling.dropdownContent}>
              <li>
                <Link to="">
                  News &nbsp; <FaChevronRight />
                </Link>
              </li>
              <li>
                <Link to="">
                  Shop &nbsp;
                  <FaChevronRight />
                </Link>
              </li>
              <li>
                <Link to="">
                  Product Details &nbsp; <FaChevronRight />
                </Link>
              </li>
              <li>
                <Link to="">
                  Cart &nbsp; <FaChevronRight />
                </Link>
              </li>
              <li>
                <Link to="">
                  Checkout &nbsp; <FaChevronRight />
                </Link>
              </li>
              <li>
                <Link to="">
                  News Grid &nbsp; <FaChevronRight />
                </Link>
              </li>
            </ul>{" "}
          </li>
          <li>
            {" "}
            <Link to="/Contact-us">Contact</Link>
          </li>
        </ul>
      </div>

      <div className={styling.contactInfo}>
        <div className={styling.details}>
          <span>
            <HiOutlineMail className={styling.Icon} />
          </span>{" "}
          <p>&nbsp; @kaltechconsultancy.tech</p>{" "}
        </div>

        <div className={styling.details}>
          {" "}
          <span>
            <FaPhoneAlt className={styling.Icon} />
          </span>{" "}
          <p>&nbsp; +1(931)-266-6101</p>{" "}
        </div>
      </div>
      <div className={styling.SocialIcons}>
        <span>
          <FaTwitter />
        </span>
        <span>
          <FaFacebookF />
        </span>
        <span>
          <FaPinterest />
        </span>
        <span>
          <IoLogoInstagram />
        </span>
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Sidebar;
