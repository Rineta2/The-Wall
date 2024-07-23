import { headContact, dataReservations, dataOffice, socialMedia } from "../data/Data";

import { Fade } from "react-awesome-reveal"

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact__container container">

        {
          headContact.map((item) => {
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
            headContact.map((item) => {
              return (
                <div className="box" key={item.id}>
                  <Fade triggerOnce duration={1000} delay={300} direction="down">
                    <h1>{item.reservation}</h1>
                  </Fade>
                  {
                    dataReservations.map((item) => {
                      return (
                        <div className="social" key={item.id}>
                          <Fade triggerOnce duration={1000} delay={300} direction="left">
                            <i>{item.icons}</i>
                          </Fade>

                          <Fade triggerOnce duration={1000} delay={300} direction="up">
                            <a href={item.path}>{item.text}</a>
                          </Fade>
                        </div>
                      )
                    })
                  }
                </div>
              )
            })
          }

          {
            headContact.map((item) => {
              return (
                <div className="box" key={item.id}>
                  <Fade triggerOnce duration={1000} delay={300} direction="down">
                    <h1>{item.officer}</h1>
                  </Fade>
                  {
                    dataOffice.map((item) => {
                      return (
                        <div className="officer" key={item.id}>
                          <Fade triggerOnce duration={1000} delay={300} direction="down">
                            <h3>{item.title}</h3>
                          </Fade>

                          <Fade triggerOnce duration={1000} delay={300} direction="up">
                            <p>{item.jam}</p>
                          </Fade>
                        </div>
                      )
                    })
                  }
                </div>
              )
            })
          }

          {
            headContact.map((item) => {
              return (
                <div className="box__icons" key={item.id}>
                  <Fade triggerOnce duration={1000} delay={300} direction="down">
                    <h1>{item.social}</h1>
                  </Fade>

                  <div className="icons__box">
                    {
                      socialMedia.map((item) => {
                        return (
                          <Fade triggerOnce duration={1000} delay={300} direction="up">
                            <a href={item.path} key={item.id}>{item.icons}</a>
                          </Fade>
                        )
                      })
                    }
                  </div>

                  <div className="get">
                    <Fade triggerOnce duration={1000} delay={300} direction="up">
                      <a href="">{item.tag}</a>
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
