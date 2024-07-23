import { headTestimonials, dataTestimonials } from "../data/Data";

import { Fade, Zoom } from "react-awesome-reveal"

export default function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <div className="testimonials__container container">

        {
          headTestimonials.map((item) => {
            return (
              <div className="heading" key={item.id}>
                <Fade triggerOnce duration={1000} delay={300} direction="down">
                  <h1>{item.title}</h1>
                </Fade>
              </div>
            )
          })
        }

        <div className="content">
          {
            dataTestimonials.map((item) => {
              return (
                <div className="box" key={item.id}>
                  <Zoom triggerOnce duration={1000} delay={300}>
                    <p>" {item.desc} "</p>
                  </Zoom>
                  <Fade triggerOnce duration={1000} delay={300} direction="up">
                    <div className="arrow">{item.arrow}</div>
                  </Fade>

                  <Fade triggerOnce duration={1000} delay={300} direction="up">
                    <span>{item.name}</span>
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
