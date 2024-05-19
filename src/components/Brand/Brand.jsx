/* eslint-disable react/prop-types */
import "./brand.css";

export default function Brand({ brand }) {
  return (
    <li className="brand">
      <a href={brand.url}>
        <img src={brand.image} alt="Brand Image" />
      </a>
    </li>
  );
}
