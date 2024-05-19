/* eslint-disable react/prop-types */
import "./feature.css";
export default function Feature({ feature }) {
  return (
    <div className="features-container__feature">
      <div className="features-container__feature-title">
        <div />
        <h1>{feature.title}</h1>
      </div>
      <div className="features-container_feature-text">
        <p>{feature.text}</p>
      </div>
    </div>
  );
}
