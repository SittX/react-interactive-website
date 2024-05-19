import { DetailFeaturesList } from "../../Data.js";
import Feature from "../../components/Feature/Feature.jsx";

import "./features.css";
export default function Features() {
  return (
    <div className="features_container section__margin">
      <div className="features_title">
        <h1 className="gradient__text">
          The Future is Now and You Just Need To Realize It. Step into Future
          Today & Make it Happen.
        </h1>
        <a href="#home">Request Early Access to Get Started</a>
      </div>
      <div className="features_details">
        {DetailFeaturesList.map((feature, index) => (
          <Feature feature={feature} key={index} />
        ))}
      </div>
    </div>
  );
}
