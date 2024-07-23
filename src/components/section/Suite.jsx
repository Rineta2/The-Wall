import { headSuite, dataSuite } from "../data/Data";

import { Fade, Zoom } from "react-awesome-reveal"

export default function Suite() {
  return (
    <section className="suite" id="suite">
      <div className="suite__container container">
        <div className="content">
          {
            headSuite.map((item) => {
              return (
                <div className="box" key={item.id}>
                  <Fade triggerOnce duration={1000} delay={300} direction="down">
                    <h1>{item.title}</h1>
                  </Fade>

                  <div className="text">
                    <Zoom triggerOnce duration={1000} delay={300}>
                      <p>{item.desc}</p>
                    </Zoom>
                  </div>
                </div>
              )
            })
          }

          {
            dataSuite.map((item) => {
              return (
                <div className="img" key={item.id}>
                  <Fade triggerOnce direction="right" duration={1000} delay={300}>
                    <img src={item.img} alt="" />
                  </Fade>

                  <div className="text">
                    <Fade triggerOnce direction="up" duration={1000} delay={300}>
                      <span>{item.desc}</span>
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
