import "./navbar.css";
import { useState } from "react";
import React from "../../assets/react.svg";
import { RiMenu4Fill, RiCloseLine } from "react-icons/ri";

function MenuItems() {
  return (
    <>
      <li>
        <a href="#brand">About</a>
      </li>
      <li>
        <a href="#wgpt4">What is React</a>
      </li>
      <li>
        <a href="#features">Features</a>
      </li>
      <li>
        <a href="#possibility">Documentations</a>
      </li>
      <li>
        <a href="#blog">Blog</a>
      </li>
    </>
  );
}

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="navbar">
      <div className="navbar-links_container">
        <div className="navbar-links_logo">
          <img src={React} alt="logo" />
        </div>
        <ul className="navbar-links">
          <MenuItems />
        </ul>
      </div>
      <ul className="navbar-sign">
        <li>Sign In</li>
        <button type="button">Sign Up</button>
      </ul>
      <div className="navbar-mobile-menu">
        {toggleMenu ? (
          <RiCloseLine size={35} onClick={() => setToggleMenu(false)} />
        ) : (
          <RiMenu4Fill size={35} onClick={() => setToggleMenu(true)} />
        )}

        {toggleMenu && (
          <div className="navbar-mobile-menu_container scale-up-center">
            <ul className="navbar-mobile-menu_links_container">
              <MenuItems />
            </ul>
            <ul className="navbar-mobile-menu_sign">
              <li>Sign In</li>
              <button type="button">Sign Up</button>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
