import PossibilityImg from "../../assets/possibility.png";

import "./possibility.css";

export default function Possibility() {
  return (
    <div className="possibility__container section__margin">
      <div className="possibility__image">
        <img src={PossibilityImg} alt="Possibility Image" />
      </div>
      <div className="possibility_information-container">
        <p className="possibility_information__title">
          Request Early Access to Get Started
        </p>
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p className="possibility_information">
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <a href="#home">Request Early Access to Get Started</a>
      </div>
    </div>
  );
}
