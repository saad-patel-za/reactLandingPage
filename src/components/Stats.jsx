import { stats } from "../constents"
import styles from "../style"
function Stats() {
  return (
    <section
      className={`${styles.flexCenter} flex-wrap flex-row sm:mb-20 mb-6`}
    >
      {stats.map((stat) => (
        <div
          key={stat}
          className="flex-1 flex justify-start items-center flex-row m-3"
        >
          <h4 className="font-poppins font-semibold text-white xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px]">
            {stat.value}
          </h4>
          <p className="font-poppins font-semibold text-gradient xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] ml-3">
            {stat.title}
          </p>
        </div>
      ))}
    </section>
  )
}

export default Stats
