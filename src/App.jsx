import {
  Header,
  Footer,
  Blog,
  Features,
  Possibility,
  WhatReact,
} from "./containers";
import { Navbar, Cta, Brands } from "./components";
import { BrandList } from "./Data";

import "./app.css";
export default function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brands brandList={BrandList} />
      <WhatReact />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
}
