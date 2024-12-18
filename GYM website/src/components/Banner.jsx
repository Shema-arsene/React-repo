import React from "react"
import { motion } from "framer-motion"
import { SlideUp } from "../utility/animation"

const Banner = ({ image, title, subtitle, Link }) => {
  return (
    <section className="container">
      <div className="bg-[#f9f9f9] grid grid-cols-1 md:grid-cols-2 space-y-6 mf:space-y-0 py-14">
        {/* Banner Img */}
        <div className="flex items-center justify-center">
          <motion.img
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              delay: 0.5,
            }}
            viewport={{ once: true }}
            src={image}
            alt="Banner image"
            className="w-[300px] md:max-w-[400px] xl:min-w-[600px] h-full object-cover mx-auto"
          />
        </div>
        {/* Banner Text */}
        <div className="flex flex-col justify-center text-center md:text-left space-y-4 pl-3 lg:max-w-[500px]">
          <motion.h1
            variants={SlideUp(0.5)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-2xl lg:text-4xl font-bold capitalize font-playfair"
          >
            {title}
          </motion.h1>
          <motion.p
            variants={SlideUp(0.7)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {subtitle}
          </motion.p>
          <motion.div
            variants={SlideUp(0.9)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex justify-center md:justify-start z-20"
          >
            <button className="primary-btn">Explore more</button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Banner
