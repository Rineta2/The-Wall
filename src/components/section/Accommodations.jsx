import { headAccommodations, dataAccommodations } from "../data/Data";

import { Fade, Zoom } from "react-awesome-reveal"

export default function Accommodations() {
  return (
    <section className="accommodations" id="accommodations">
      <div className="accommodations__container container">

        {
          headAccommodations.map((head) => {
            return (
              <div className="heading" key={head.id}>
                <Fade triggerOnce duration={1000} delay={300} direction="down">
                  <h1>{head.title}</h1>
                </Fade>
              </div>
            )
          })
        }

        <div className="content">
          {
            dataAccommodations.map((item) => {
              return (
                <div className="box" key={item.id}>
                  <Zoom triggerOnce duration={1000} delay={300}>
                    <img src={item.img} alt="" />
                  </Zoom>

                  <div className="text">
                    <div className="top">
                      <Fade triggerOnce duration={1000} delay={300} direction="down">
                        <h3>{item.category}</h3>
                      </Fade>
                    </div>

                    <div className="bottom">
                      <Zoom triggerOnce duration={1000} delay={300}>
                        <h1>{item.title}</h1>
                      </Zoom>

                      <Fade triggerOnce duration={1000} delay={300} direction="up">
                        <span>{item.price}</span>
                      </Fade>
                    </div>
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
