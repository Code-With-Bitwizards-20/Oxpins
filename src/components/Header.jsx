import styling from "./Header.module.css";
import { FaPhoneVolume } from "react-icons/fa6";
import { HiOutlineMailOpen } from "react-icons/hi";
import { ImLocation2 } from "react-icons/im";
import { FaHeart } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";
import Sidebar from "./Sidebar";
// import KaltechLogo from "./KaltechLogo";

const Header = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  return (
    <>
      <header>
        <div className={styling.logo}>
          <img src="/images/kaltech perfect.svg" alt="Logo" />

          {/* <img src="/images/main-menu-shape-1.webp" alt="arrow" /> */}
        </div>

        <div className={styling.right}>
          <div className={styling.Contact}>
            <div className={styling.volunteers}>
              <img src="/images/main-menu-heart-icon.webp" alt="heart" />
              &nbsp; <p>Become a Volunteers</p>
            </div>

            <div className={styling.helpline}>
              <span className={styling.phone}>
                <FaPhoneVolume
                  style={{ fontSize: "1.4rem", color: "#283734" }}
                />
              </span>{" "}
              <div className={styling.contact}>
                {" "}
                <p>Helpline</p>{" "}
                <div className={styling.Number}>
                  <li>+1(931)-266-6101</li>
                </div>
              </div>
            </div>

            <div className={styling.email}>
              <span className={styling.emailicon}>
                {" "}
                <HiOutlineMailOpen
                  style={{ fontSize: "1.4rem", color: "#283734" }}
                />{" "}
              </span>{" "}
              <div className={styling.mailAddress}>
                {" "}
                <p>send Email</p>{" "}
                <div className={styling.emailAddress}>
                  {" "}
                  <li> hello@kaltechconsultancy.tech </li>
                </div>
              </div>
            </div>

            <div className={styling.address}>
              <span className={styling.addressicon}>
                {" "}
                <ImLocation2
                  style={{ fontSize: "1.4rem", color: "#283734" }}
                />{" "}
              </span>{" "}
              <div className={styling.location}>
                {" "}
                <p> 815 N Wilson Rd, KY 40160,</p>{" "}
                <div className={styling.addlocation}>
                  {" "}
                  <li> Radcliff Kentucky. </li>
                </div>
              </div>
            </div>

            <div className={styling.SocialmediaIcons}>
              <div className={styling.SocialmediaImg}>
                {" "}
                <FaTwitter />
              </div>
              <div className={styling.SocialmediaImg}>
                {" "}
                <FaFacebook />
              </div>
              <div className={styling.SocialmediaImg}>
                {" "}
                <FaPinterest />
              </div>
              <div className={styling.SocialmediaImg}>
                <FaInstagram />
              </div>
            </div>
          </div>

          <div className={styling.NavButton}>
            <div className={styling.navbar}>
              {/* <div className={styling.Humburger} onClick={toggleSidebar}>
                <li>
                  {" "}
                  <IoMenu />
                </li>
              </div> */}

              {!isSidebarVisible && (
                <div className={styling.Humburger} onClick={toggleSidebar}>
                  <li>
                    <IoMenu />
                  </li>
                </div>
              )}
              <ul>
                <li>
                  <Link to="/Home">Home</Link>
                </li>
                <li className={styling.dropdown}>
                  Pages{" "}
                  <ul className={styling.dropdownContent}>
                    <li>
                      <Link to="/About-us">
                        About &nbsp; <FaLongArrowAltRight />
                      </Link>
                    </li>
                    <li>
                      <Link to="">
                        {" "}
                        Volunteer &nbsp;
                        <FaLongArrowAltRight />
                      </Link>
                    </li>
                    <li>
                      <Link to="">
                        Become a Volunteer &nbsp; <FaLongArrowAltRight />
                      </Link>
                    </li>
                    <li>
                      <Link to="">
                        Volunteer Carousel &nbsp; <FaLongArrowAltRight />
                      </Link>
                    </li>
                    <li>
                      <Link to="">
                        Gallery &nbsp; <FaLongArrowAltRight />
                      </Link>
                    </li>
                    <li>
                      <Link to="">
                        Gallery Carousel &nbsp; <FaLongArrowAltRight />
                      </Link>
                    </li>
                    <li>
                      <Link to="">
                        FAQS <FaLongArrowAltRight />
                      </Link>
                    </li>
                    <li>
                      <Link to="">
                        404 &nbsp; <FaLongArrowAltRight />
                      </Link>
                    </li>
                  </ul>{" "}
                </li>
                <li className={styling.dropdown}>
                  Donations{" "}
                  <ul className={styling.dropdownContent}>
                    <li>
                      <Link to="">
                        Donation &nbsp; <FaLongArrowAltRight />
                      </Link>
                    </li>
                    <li>
                      <Link to="">
                        {" "}
                        Donation List &nbsp;
                        <FaLongArrowAltRight />
                      </Link>
                    </li>
                    <li>
                      <Link to="">
                        Donation Carousel &nbsp; <FaLongArrowAltRight />
                      </Link>
                    </li>
                    <li>
                      <Link to="">
                        Donation Details &nbsp; <FaLongArrowAltRight />
                      </Link>
                    </li>
                    <li>
                      <Link to="">
                        Donate Now &nbsp; <FaLongArrowAltRight />
                      </Link>
                    </li>
                  </ul>{" "}
                </li>
                <li className={styling.dropdown}>
                  Events
                  <ul className={styling.dropdownContent}>
                    <li>
                      <Link to="">
                        Events &nbsp; <FaLongArrowAltRight />
                      </Link>
                    </li>
                    <li>
                      <Link to="">
                        Events Carousel &nbsp;
                        <FaLongArrowAltRight />
                      </Link>
                    </li>
                    <li>
                      <Link to="">
                        Event Details &nbsp; <FaLongArrowAltRight />
                      </Link>
                    </li>
                  </ul>{" "}
                </li>

                <li className={styling.dropdown}>
                  News
                  <ul className={styling.dropdownContent}>
                    <li>
                      <Link to="">
                        News &nbsp; <FaLongArrowAltRight />
                      </Link>
                    </li>
                    <li>
                      <Link to="">
                        News Carousel &nbsp;
                        <FaLongArrowAltRight />
                      </Link>
                    </li>
                    <li>
                      <Link to="">
                        {" "}
                        News Right Sidebar &nbsp; <FaLongArrowAltRight />
                      </Link>
                    </li>
                    <li>
                      <Link to="">
                        News Left Sidebar &nbsp; <FaLongArrowAltRight />
                      </Link>
                    </li>
                    <li>
                      <Link to="">
                        News Details &nbsp; <FaLongArrowAltRight />
                      </Link>
                    </li>
                    <li>
                      <Link to="">
                        News Grid &nbsp; <FaLongArrowAltRight />
                      </Link>
                    </li>
                  </ul>{" "}
                </li>
                <li className={styling.dropdown}>
                  Shop
                  <ul className={styling.dropdownContent}>
                    <li>
                      <Link to="">
                        News &nbsp; <FaLongArrowAltRight />
                      </Link>
                    </li>
                    <li>
                      <Link to="">
                        Shop &nbsp;
                        <FaLongArrowAltRight />
                      </Link>
                    </li>
                    <li>
                      <Link to="">
                        Product Details &nbsp; <FaLongArrowAltRight />
                      </Link>
                    </li>
                    <li>
                      <Link to="">
                        Cart &nbsp; <FaLongArrowAltRight />
                      </Link>
                    </li>
                    <li>
                      <Link to="">
                        Checkout &nbsp; <FaLongArrowAltRight />
                      </Link>
                    </li>
                    <li>
                      <Link to="">
                        News Grid &nbsp; <FaLongArrowAltRight />
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

            <div className={styling.btn}>
              <button className={styling.navButton}>
                {" "}
                <FaHeart /> &nbsp; DONATE NOW
              </button>{" "}
            </div>
          </div>
        </div>
        <Sidebar isVisible={isSidebarVisible} onClose={toggleSidebar} />
      </header>
    </>
  );
};

export default Header;
