/* eslint-disable react/prop-types */
import Brand from "../Brand/Brand.jsx";
import "./brands.css";

export default function Brands({ brandList }) {
  return (
    <ul className="brand__container">
      {brandList.map((element, index) => (
        <Brand brand={element} key={index} />
      ))}
    </ul>
  );
}
