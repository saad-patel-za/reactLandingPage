import styles, { layout } from "../style"
import Feedback from "./Feedback"
import { feedback } from "../constents"
function Testimonial() {
  return (
    <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
      <div className="absolute -right-[50%] w-[60%] h-[60%] rounded-full blue__gradient" />
      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-1">
        <h2 className={`${styles.heading2}`}>
          What people are <br className="sm:block hidden" />
          saying about us
        </h2>
        <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} max-w-[470px] text-left`}>
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>     
        </div>
      </div>
      <div className="flex flex-wrap sm:justify-start justify-center w-full feedbaclk-container relative z-1">
        {feedback.map((card) =>(
          <Feedback key={card.id} {...card}/>
        ))}
      </div>
    </section>
  )
}

export default Testimonial
