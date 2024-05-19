import "./header.css";
import People from "../../assets/people.png";
import AI from "../../assets/ai.png";

export default function Header() {
  return (
    <div className="header">
      <div className="header__content">
        <h1 className="header__content_title gradient__text">
          Let`s Build Something amazing with React
        </h1>
        <p className="header__content_paragraph">
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <div className="header__content_input">
          <input type="email" placeholder="Your Email Address" />
          <button>Get Started</button>
        </div>
        <div className="header__content_people">
          <img src={People} alt="People Image" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className="header__image">
        <img src={AI} alt="Header Image" />
      </div>
    </div>
  );
}
