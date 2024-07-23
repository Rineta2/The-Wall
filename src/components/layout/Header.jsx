import { navLink, profileHeader } from "../data/Data";

import { BiMenu } from "react-icons/bi";

import { TiTimes } from "react-icons/ti";

import "../sass/layout.scss";

import { useEffect, useState } from "react";

import { Fade, Zoom } from "react-awesome-reveal"

export default function Header() {

  //========== Navbar ==========//
  const [show, setShow] = useState(false);

  //========== Timer ==========//
  const [time, setTime] = useState({
    minutes: new Date().getMinutes,
    hours: new Date().getHours,
    seconds: new Date().getSeconds
  })

  useEffect(() => {
    const intervalId = setInterval(() => {
      const date = new Date();

      setTime({
        minutes: date.getMinutes(),
        hours: date.getHours(),
        seconds: date.getSeconds()
      })
    }, 1000)

    return () => clearInterval(intervalId);
  }, [])

  const convertToTwoDigit = (number) => {
    return number.toLocaleString('en-US', {
      minimumIntegerDigits: 2
    })
  }

  //========== Active Link ==========//
  const [activeLink, SetActiveLink] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sections = document.querySelectorAll('section');

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (
          scrollPosition >= sectionTop - 50 && scrollPosition < sectionTop + sectionHeight - 50
        ) {
          SetActiveLink(section.getAttribute('id'))
        }
      })
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [])

  //========== Header Fix ==========//
  const [fix, setFix] = useState(false);

  const setFixed = () => {
    if (window.scrollY > 0) {
      setFix(true);
    } else {
      setFix(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', setFixed);

    return () => {
      window.removeEventListener('scroll', setFixed);
    };
  }, [])

  return (
    <header className={`header ${fix ? 'fix' : ''}`}>
      <nav className="nav nav__container">
        {
          profileHeader.map((item) => {
            return (
              <Fade triggerOnce direction="left" duration={1000} delay={300}>
                <h1 key={item.id} className="profile">{item.name}</h1>
              </Fade>
            )
          })
        }

        <ul className={`nav__list ${show ? 'show' : 'close'}`}>
          {
            navLink.map((item) => {
              return (
                <li key={item.id} className="nav__item">
                  <Fade triggerOnce direction="down" duration={1000} delay={300}>
                    <a href={item.path} className={`nav__link ${activeLink === item.active ? 'active' : ''}`} onClick={() => setShow(false)}>{item.name}</a>
                  </Fade>
                </li>
              )
            })
          }
        </ul>

        <div className="nav__actions">
          <div className="clock">
            <Fade triggerOnce duration={1000} delay={300} direction="down">
              <span>{convertToTwoDigit(time.hours)} :</span>
              <span>{convertToTwoDigit(time.minutes)} :</span>
              <span>{convertToTwoDigit(time.seconds)} :</span>
              <span>{time.hours >= 12 ? 'PM' : 'AM'}</span>
            </Fade>
          </div>

          <div className="menu" onClick={() => setShow(!show)}>
            {show ? <TiTimes className="close" /> : <BiMenu className="hamburger" />}
          </div>
        </div>
      </nav>
    </header>
  )
}
