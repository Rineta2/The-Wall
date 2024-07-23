import { Fragment } from "react"

import Header from "./components/layout/Header"
import Home from "./components/section/Home";
import About from "./components/section/About";
import Accommodations from "./components/section/Accommodations";
import Suite from "./components/section/Suite";
import Banner from "./components/section/Banner";
import Promo from "./components/section/Promo";
import Testimonials from "./components/section/Testimonials";
import Contact from "./components/section/Contact";
import Footer from "./components/layout/Footer"

import "./components/sass/page.scss"

export default function App() {
  return (
    <Fragment>
      <Header />
      <Home />
      <About />\
      <hr className="hr" />
      <Accommodations />
      <Suite />
      <hr className="hr" />
      <Banner />
      <hr className="hr" />
      <Promo />
      <Testimonials />
      <Contact />
      <Footer />
    </Fragment>
  )
}
