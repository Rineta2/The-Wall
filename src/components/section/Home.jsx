import { dataHome } from "../data/Data";

import { Fade, Zoom } from "react-awesome-reveal"

export default function Home() {
  return (
    <section className="home" id="home">
      <div className="home__container container">
        {
          dataHome.map((item) => {
            return (
              <div className="content" key={item.id}>
                <Fade triggerOnce delay={300} direction="down" duration={1000}>
                  <h3>{item.text}</h3>
                </Fade>

                <Fade triggerOnce direction="down" duration={1000}>
                  <h1>{item.title}</h1>
                </Fade>

                <Zoom triggerOnce duration={1000}>
                  <span>{item.span}</span>
                </Zoom>
              </div>
            )
          })
        }

        {
          dataHome.map((item) => {
            return (
              <Fade triggerOnce duration={1000} direction="up" delay={300}>
                <div className="btn" key={item.id}>
                  <a href={item.path}>{item.name}</a>
                </div>
              </Fade>
            )
          })
        }
      </div>
    </section>
  )
}
