import styling from "./ContactDetails.module.css";
import { PiPhoneCall } from "react-icons/pi";
import { IoMailOpenOutline } from "react-icons/io5";
import { SlLocationPin } from "react-icons/sl";

const ContactDetails = () => {
  return (
    <>
      <div className={styling.main}>
        <div className={styling.contentwrapper}>
          <div className={styling.Container}>
            <div className={styling.Details}>
              <PiPhoneCall className={styling.Icon} />
              <div className={styling.text}>
                <span>Helpline</span>
                <p>+1 (931)-266-6101 </p>
              </div>
            </div>
            <div className={styling.Details}>
              <IoMailOpenOutline className={styling.Icon} />
              <div className={styling.text}>
                <span>Send email</span>
                <p>hello@kaltechconsultancy.tech</p>
              </div>
            </div>
            <div className={styling.Details}>
              <SlLocationPin className={styling.Icon} />
              <div className={styling.text}>
                <span>815 N Wilson Rd, KY 40160,</span>
                <p>Radcliff Kentucky</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactDetails;
