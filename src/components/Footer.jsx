import styles from "../style"
import { logo } from "../assets"
import { footerLinks, socialMedia } from "../constents"

function Footer() {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className="flex flex-1 flex-col justify-start mr-10">
          <img
            src={logo}
            alt="logo"
            className="w-[266px] h-[77px] object-contain"
          />
          <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>
        <div className="flex-[1.5] flex flex-row justify-between flex-wrap md:mt-0 mt-0">
          {footerLinks.map((footerlink) => (
            <div
              key={footerLinks.key}
              className="flex flex-1 flex-col ss:my-0 my-4 min-w-[150px]"
            >
              <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
                {footerlink.title}
              </h4>
              <ul className="list-none mt-4">
                {footerlink.links.map((link, index) => (
                  <li
                    key={link.name}
                    className={`${
                      index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                    }`}
                  >
                    <a
                      // href={link.link}
                      className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer`}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full flex justify-between items-center pt-6 flex-col md:flex-row border-t-[1px] border-t-[#3F3E45]">
        <p className="font-poppins font-normal text-[18px] leading-[27px] text-white text-center">
          Copyright © 2021 HooBank. All Rights Reserved.
        </p>
        <div className="flex flex-1 md:mt-0 mt-6 justify-end">
          {socialMedia.map((social, index) => (
            <img
              key={index}
              src={social.icon}
              alt={social.id}
              className={`w-[21px] h-[21px] object-contain ${
                index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Footer
