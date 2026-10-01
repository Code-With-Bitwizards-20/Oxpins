import styling from "./footer.module.css";
import { IoMdMail } from "react-icons/io";
import {
  FaPhone,
  FaTwitter,
  FaFacebook,
  FaPinterest,
  FaSquareInstagram,
} from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer>
        <div className={styling.container}>
          <div className={styling.contentWrapper}>
            <div className={styling.column}>
              <div className={styling.image}>
                <img src="/images/kaltech white svg.svg" alt="logo-img" />
              </div>

              <p className={styling.text}>
                Nulla ultricies justo sit amet ante efficitur, eget pharetra
                augue efficitur. Vestibulum viverra, dolor sit amet ultricies.
              </p>

              <button className={styling.button}>
                {" "}
                <FaHeart /> <a href=""> Donate Now</a>
              </button>
            </div>

            <div className={styling.column}>
              <h3 className={styling.h3}>Links</h3>
              <ul className={styling.ul}>
                <li>About Us</li>
                <li>Contact</li>
                <li>Latest News</li>
                <li>Recent Events</li>
                <li>Donations</li>
              </ul>
            </div>

            <div className={styling.column}>
              <h3 className={styling.h3}>Non Profit</h3>
              <ul className={styling.ul}>
                <li>Differently Abled Kids</li>
                <li>Help Child Cancer</li>
                <li>Clean Pure Water</li>
                <li>Give them Education</li>
                <li>Start a Fundraising</li>
              </ul>
            </div>

            <div className={styling.column}>
              <h3 className={styling.h3}>Contact</h3>

              <p className={`${styling.text} ${styling.address}`}>
                815 N Wilson Rd, KY 40160, Radcliff Kentucky.
              </p>
              <ul className={styling.ul}>
                <li>
                  {" "}
                  <IoMdMail
                    style={{ color: "#fbd45a", fontSize: "1.2rem" }}
                  />{" "}
                  &nbsp; &nbsp;&nbsp; hello@kaltechconsultancy.tech
                </li>
                <li>
                  {" "}
                  <FaPhone
                    style={{ color: "#fbd45a", fontSize: "1.2rem" }}
                  />{" "}
                  &nbsp; &nbsp; +1(931)-266-6101
                </li>
              </ul>

              <div className={styling.SocialIcons}>
                <li>
                  <FaTwitter />
                </li>
                <li>
                  <FaFacebook />
                </li>
                <li>
                  <FaPinterest />
                </li>
                <li>
                  <FaSquareInstagram />
                </li>
              </div>
            </div>
          </div>
        </div>

        <div className={styling.lowerpart}>
          <p className={styling.text}>
            © All Copyright 2025 by Kaltech Consultancy.tech
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
