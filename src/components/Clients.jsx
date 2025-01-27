import { clients } from "../constents"
import styles from "../style"

function Clients() {
  return (
    <section className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {clients.map((clients, id) => (
          <div  key={id} className={`${styles.flexCenter} flex-1 sm:w-[192px] min-w-[100px]`}>
          <img src={clients.logo} alt={clients.logo} className="sm:w-[192px] w-[100px] object-contain p-3" />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Clients