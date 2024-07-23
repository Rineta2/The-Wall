import { headPromo, dataPromo } from "../data/Data";

import { Fade, Zoom } from "react-awesome-reveal"

export default function Promo() {
  return (
    <section className="promo" id="promo">
      <div className="promo__container container">

        {
          headPromo.map((item) => {
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
            dataPromo.map((item) => {
              return (
                <div className="box" key={item.id}>
                  <Zoom triggerOnce duration={1000} delay={300}>
                    <img src={item.img} alt={item.title} />
                  </Zoom>

                  <div className="text">
                    <Fade triggerOnce duration={1000} delay={300} direction="down">
                      <h1>{item.title}</h1>
                    </Fade>

                    <Fade triggerOnce duration={1000} delay={300} direction="up">
                      <p>{item.desc}</p>
                    </Fade>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}
