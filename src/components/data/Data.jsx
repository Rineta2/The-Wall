import AboutImg from "../assets/suite/suite.jpg";

import Accommodations_1 from "../assets/Accommodations/Accommodations_1.jpg"
import Accommodations_2 from "../assets/Accommodations/Accommodations_2.jpg"
import Accommodations_3 from "../assets/Accommodations/Accommodations_3.jpg"

import suite_img from "../assets/suite/suite.jpg";

import banner_1 from "../assets/banner/banner_1.jpg";
import banner_2 from "../assets/banner/banner_2.jpg";

import promo_1 from "../assets/Promo/promo_1.jpg"
import promo_2 from "../assets/Promo/promo_2.jpg"
import promo_3 from "../assets/Promo/promo_3.jpg"

import { FaMapSigns, FaSortNumericUpAlt, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { GiMailShirt } from "react-icons/gi";

//============== Header ==============//
export const navLink = [
  {
    id: 1,
    name: "Home",
    path: "#home",
    active: "home"
  },

  {
    id: 2,
    name: "About",
    path: "#about",
    active: "about"
  },

  {
    id: 3,
    name: "Accommodations",
    path: "#accommodations",
    active: "accommodations"
  },

  {
    id: 4,
    name: "Suite",
    path: "#suite",
    active: "suite"
  },

  {
    id: 5,
    name: "Promo",
    path: "#promo",
    active: "promo"
  },

  {
    id: 6,
    name: "Testimonials",
    path: "#testimonials",
    active: "testimonials"
  },

  {
    id: 7,
    name: "Contact",
    path: "#contact",
    active: "contact"
  },
]

export const profileHeader = [
  {
    id: 1,
    name: "The Wellhall"
  }
]

//============== Home ==============//
export const dataHome = [
  {
    id: 1,
    text: "W E L C O M E T O",
    title: "The Wellhall",
    span: "Resort & Spa Hotel",
    name: "Learn More",
    path: "#about"
  }
]

//============== About ==============//
export const aboutData = [
  {
    id: 1,
    title: "Welcome to your luxurious home away from home",
    desc: "Write a paragraph that talks about your brand or property here. Convince your prospective clients to choose you and your offerings by highlighting the qualities that set you apart from the competition. Your audience is already on your website, so push a little bit harder to seal the deal!",
    img: AboutImg
  }
]

//============== Accommodations ==============//

export const headAccommodations = [
  {
    id: 1,
    title: "Accommodations"
  }
]

export const dataAccommodations = [
  {
    id: 1,
    img: Accommodations_1,
    category: "2 adults | 1 child below 7",
    title: "De Luxe Room",
    price: "from $189 a night"
  },

  {
    id: 2,
    img: Accommodations_2,
    category: "2 adults | 1 child below 7",
    title: "De Luxe Sea View",
    price: "from $209 a night"
  },

  {
    id: 3,
    img: Accommodations_3,
    category: "4 adults | 2 children below 7",
    title: "The Wellhall Family Suite",
    price: "from $399 a night"
  }
]

//============== Accommodations ==============//
export const headSuite = [
  {
    id: 1,
    title: "The Family Suite",
    desc: "Showcase the best your property has to offer by highlighting one of your accommodations. Add a flattering photo, then describe the room's best feature"
  }
]

export const dataSuite = [
  {
    id: 1,
    img: suite_img,
    desc: "An intriguing caption that describes the room goes here. Use a flattering photo, then describe away!"
  }
]

//============== Banner ==============//
export const dataBanner = [
  {
    id: 1,
    img: banner_1,
    desc: "An intriguing caption that describes the room goes here .Use a flattering photo, then describe away!"
  },

  {
    id: 2,
    img: banner_2,
    desc: "An intriguing caption that describes the room goes here. Use a flattering photo,then describe away!"
  }
]

//============== Promo ==============//
export const headPromo = [
  {
    id: 1,
    title: "Promos and Offers"
  }
]

export const dataPromo = [
  {
    id: 1,
    img: promo_1,
    title: "Early Bird Discount",
    desc: "List your offers, promos, or special membership privileges and perks here to entice people to book your property."
  },

  {
    id: 2,
    img: promo_2,
    title: "Wellhall Members Club",
    desc: "List your offers, promos, or special membership privileges and perks here to entice people to book your property."
  },

  {
    id: 3,
    img: promo_3,
    title: "Book 3 Nights, Get 1 Night Free",
    desc: "List your offers, promos, or special membership privileges and perks here to entice people to book your property."
  }
]

//============== Testimonials ==============//

export const headTestimonials = [
  {
    id: 1,
    title: "In the Press"
  }
]

export const dataTestimonials = [
  {
    id: 1,
    desc: "Boost your product and service's credibility by adding testimonials from your clients. People love recommendations so feedback from others who've tried it is invaluable",
    arrow: "-",
    name: "Santa Solana Post"
  },

  {
    id: 2,
    desc: "Boost your product and service's credibility by adding testimonials from your clients. People love recommendations so feedback from others who've tried it is invaluable.",
    arrow: "-",
    name: "Mariana's Luxe Travels"
  },

  {
    id: 3,
    desc: "Boost your product and service's credibility by adding testimonials from your clients. People love recommendations so feedback from others who've tried it is invaluable.",
    arrow: "-",
    name: "Fairhill Journal"
  }
]

//============== Contact ==============//
export const headContact = [
  {
    id: 1,
    title: "The Wellhall",
    reservation: "Reservations Office",
    officer: "Office Hours",
    social: "Get Social",
    tag: "Tag us in your photos!"
  }
]

export const dataReservations = [
  {
    id: 1,
    icons: <FaMapSigns />,
    text: "123 Anywhere St., Any City ST 12345",
    path: ""
  },

  {
    id: 2,
    icons: <FaSortNumericUpAlt />,
    text: "1123-456-7890",
    path: ""
  },

  {
    id: 3,
    icons: <GiMailShirt />,
    text: "hello@gmail.com",
    path: ""
  }
]

export const dataOffice = [
  {
    id: 1,
    title: "Monday to Friday",
    jam: "9:00 am to 6:00 pm"
  },

  {
    id: 2,
    title: "Saturday",
    jam: "9:00 am to 12:00 noon"
  }
]

export const socialMedia = [
  {
    id: 1,
    icons: <FaFacebook />,
    path: ""
  },

  {
    id: 2,
    icons: <FaInstagram />,
    path: ""
  },

  {
    id: 3,
    icons: <FaTwitter />,
    path: ""
  }
]