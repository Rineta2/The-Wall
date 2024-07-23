import { aboutData } from "../data/Data";

import { Fade } from "react-awesome-reveal"

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about__container container">

        <div className="content">
          {
            aboutData.map((item) => {
              return (
                <div className="text" key={item.id}>
                  <Fade triggerOnce direction="down" duration={1000} delay={300}>
                    <h1>{item.title}</h1>
                  </Fade>

                  <Fade triggerOnce duration={1000} delay={300}>
                    <p>{item.desc}</p>
                  </Fade>
                </div>
              )
            })
          }

          {
            aboutData.map((item) => {
              return (
                <div className="img" key={item.id}>
                  <Fade triggerOnce direction="right" duration={1000} delay={300}>
                    <img src={item.img} loading="lazy" alt="About" />
                  </Fade>
                </div>
              )
            })
          }
        </div>

      </div>
    </section>
  )
}
