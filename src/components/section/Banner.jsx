import { dataBanner } from "../data/Data";

import { Fade } from "react-awesome-reveal"

export default function Banner() {
  return (
    <section className="banner">
      <div className="banner__container container">

        <div className="content">
          {
            dataBanner.map((item) => {
              return (
                <div className="box" key={item.id}>
                  <Fade triggerOnce duration={1000} delay={300} direction="down">
                    <img src={item.img} alt="" />
                  </Fade>

                  <div className="text">
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
