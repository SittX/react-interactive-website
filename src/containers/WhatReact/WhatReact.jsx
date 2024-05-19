import "./whatreact.css";
import Feature from "../../components/Feature/Feature.jsx";

import { ReactFeature, QuestionFeatureList } from "../../Data.js";

export default function WhatReact() {
  return (
    <div className="whatreact section__margin" id="wgpt3">
      <div className="whatreact-feature">
        <Feature feature={ReactFeature} />
      </div>
      <div className="whatreact-heading">
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p>Explore the Library</p>
      </div>
      <div className="whatreact-container">
        {QuestionFeatureList.map((element, index) => (
          <Feature feature={element} key={index} />
        ))}
      </div>
    </div>
    // <div className="whatreact__container section__margin">
    //   <div className="whatreact__features">
    //     <Feature feature={ReactFeature} />
    //   </div>

    //   <div className="whatreact__possibility">
    //     <h1 className="gradient__text">
    //       The possibilities are beyond your imagination
    //     </h1>
    //     <a href="#home" className="gradient__text">
    //       Explore The Library
    //     </a>
    //   </div>

    //   <div className="whatreact__questions">
    //     {QuestionFeatureList.map((element, index) => (
    //       <Feature feature={element} key={index} />
    //     ))}
    //   </div>
    // </div>
  );
}
