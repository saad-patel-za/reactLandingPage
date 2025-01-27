import styles, {layout} from "../style"
import { card } from "../assets"
import Buttons from "./Buttons"
function CardDeal() {
  return (
      <section className={layout.section}>
        <div className={layout.sectionInfo}>
          <h2 className={`${styles.heading2}`}>
            You do the business, <br className="sm:block hidden" /> we’ll handle
            the money.
          </h2>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            With the right credit card, you can improve your financial life by
            building credit, earning rewards and saving money. But with hundreds
            of credit cards on the market.
          </p>
          <Buttons styles="mt-10" />
        </div>
        <div className={`${layout.sectionImg}`}>
          <img src={card} alt="" />
        </div>
      </section>
  )
}

export default CardDeal