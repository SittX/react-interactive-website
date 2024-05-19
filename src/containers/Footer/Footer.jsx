import "./footer.css";
import ReactLogo from "../../assets/react.svg";

export default function Footer() {
  return (
    <div className="footer__container section__padding">
      <div className="footer__info">
        <h1 className="gradient__text">
          Do you want to step in to the future before others
        </h1>
        <div className="footer__info-early-access">
          <button>Request Early Access</button>
        </div>
      </div>

      <footer className="footer__links-container">
        <div className="footer__links-container-logo">
          <img src={ReactLogo} alt="React Logo" />
          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>
        <ul>
          <li>hello</li>
        </ul>
        <ul>
          <li>hello</li>
        </ul>
        <ul>
          <li>hello</li>
        </ul>
      </footer>

      <p className="footer__container-copyright">
        © 2021 GPT-3. All rights reserved.
      </p>
    </div>
  );
}
