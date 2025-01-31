import { quotes } from "../assets"
function Feedback({ content, name, title, img }) {
  return (
    <div className="feedback-card flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0">
      <img src={quotes} alt="double-quotes" className="w-[42px] h-[27px] object-contain" />
      <p className="font-poppins font-normal text-white text-[18px] leading-[32px] my-10">{content}</p>
      <div className="flex flex-row">
        <img src={img} alt={name} className="w-[48px] h-[48px] rounded-full"/>
        <div className="flex flex-col ml-4">
          <h4 className="font-poppins font-semibold text-white text-[20px] leading-[32px]">{name}</h4>
          <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[32px]">{title}</p>
        </div>
      </div>

    </div>
  )
}

export default Feedback
