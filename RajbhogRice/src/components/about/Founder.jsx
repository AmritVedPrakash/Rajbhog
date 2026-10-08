import { motion } from "framer-motion";
import {
  Crown,
  Globe2,
  Factory,
  HeartHandshake,
  CheckCircle2,
} from "lucide-react";

import FounderImage from "../../assets/about/founder.png";

export default function Founder() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 25,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#faf9f4] py-10 sm:py-14 lg:py-20">

      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[450px] h-[450px] rounded-full bg-[#193d2f]/5 blur-3xl" />

        <div className="absolute -bottom-40 -right-40 w-[450px] h-[450px] rounded-full bg-[#b08b2c]/10 blur-3xl" />

        <div className="absolute top-20 right-[7%] w-20 h-20 rounded-full border border-[#b08b2c]/20" />

        <div className="absolute bottom-16 left-[5%] w-12 h-12 rounded-full border border-[#193d2f]/10" />
      </div>

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-7 sm:mb-8 lg:mb-10"
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="w-10 h-[1px] bg-[#b08b2c]" />

            <span className="flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-[#b08b2c]">
              <Crown size={15} />
              Our Founder
            </span>

            <span className="w-10 h-[1px] bg-[#b08b2c]" />
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl leading-tight font-medium text-[#193d2f]">
            A Legacy Built on Quality & Trust
           
          </h1>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-6 lg:gap-12 items-start">

          {/* =================================================
              FOUNDER IMAGE
          ================================================= */}
          <motion.div
            initial={{
              opacity: 0,
              x: -60,
              scale: 0.94,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              relative
              w-full
              h-[340px]
              sm:h-[460px]
              md:h-[540px]
              lg:h-[620px]
              flex
              items-start
              justify-center
            "
          >

            {/* Glow Behind Image */}
            <div
              className="
                absolute
                top-8
                w-[75%]
                h-[75%]
                rounded-full
                bg-[#b08b2c]/10
                blur-3xl
              "
            />

            {/* Outer Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                absolute
                top-2
                w-[82%]
                aspect-square
                rounded-full
                border
                border-dashed
                border-[#b08b2c]/25
              "
            />

            {/* Inner Ring */}
            <div
              className="
                absolute
                top-7
                w-[72%]
                aspect-square
                rounded-full
                border
                border-[#193d2f]/10
              "
            />

            {/* ⭐ IMAGE - MOVED UP + FRONT */}
            <motion.img
              src={FounderImage}
              alt="Late Jag Jevan Ram - Founder"
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                relative
                z-30
                -mt-4
                sm:-mt-8
                lg:-mt-10
                w-[88%]
                sm:w-[84%]
                lg:w-[92%]
                max-w-[560px]
                h-auto
                object-contain
                drop-shadow-[0_30px_40px_rgba(25,61,47,0.25)]
                select-none
              "
            />

            {/* Founder Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="
                absolute
                z-40
                bottom-3
                sm:bottom-8
                left-2
                sm:left-6
                lg:left-0
                bg-white/95
                backdrop-blur-md
                border
                border-[#b08b2c]/20
                rounded-2xl
                px-3
                py-2.5
                sm:px-4
                sm:py-3
                shadow-xl
              "
            >
              <div className="flex items-center gap-3">

                <div className="w-10 h-10 rounded-full bg-[#193d2f] flex items-center justify-center text-[#c9d34f]">
                  <Crown size={20} />
                </div>

                <div>
                  <p className="text-xs text-slate-500">
                    Founder
                  </p>

                  <p className="font-semibold text-[#193d2f]">
                    Late Jag Jevan Ram
                  </p>
                </div>

              </div>
            </motion.div>
          </motion.div>

          {/* =================================================
              RIGHT CONTENT
          ================================================= */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.15,
            }}
            className="w-full lg:pt-4"
          >

            {/* Intro */}
            <motion.div variants={itemVariants}>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl leading-tight text-[#193d2f]">
                Late Jag Jevan Ram
                <span className="block text-[#b08b2c]">
                  Founder
                </span>
              </h2>

              <div className="w-16 h-1 bg-[#b08b2c] mt-4 mb-4 rounded-full" />

              <p className="text-sm sm:text-base leading-7 text-slate-600">
                Late Jag Jevan Ram founded the business with a vision
                built around quality, trust and customer satisfaction.
                Today, that legacy continues forward through his sons
                and the next generation.
              </p>
            </motion.div>

            {/* Legacy */}
            <motion.div
              variants={itemVariants}
              className="
                mt-5
                rounded-2xl
                border
                border-[#193d2f]/10
                bg-white/75
                backdrop-blur-sm
                p-4
                sm:p-5
              "
            >
              <div className="flex gap-4">

                <div className="shrink-0 w-11 h-11 rounded-xl bg-[#193d2f] text-[#c9d34f] flex items-center justify-center">
                  <HeartHandshake size={21} />
                </div>

                <div>
                  <h3 className="font-serif text-lg sm:text-xl text-[#193d2f]">
                    A Legacy That Continues
                  </h3>

                  <p className="mt-1.5 text-sm leading-6 text-slate-600">
                    With its third generation, the business has built
                    a strong and reputable market presence while
                    continuing to believe in customer satisfaction.
                  </p>
                </div>

              </div>
            </motion.div>

            {/* Goal */}
            <motion.div
              variants={itemVariants}
              className="
                mt-3
                rounded-2xl
                border
                border-[#193d2f]/10
                bg-white/75
                backdrop-blur-sm
                p-4
                sm:p-5
              "
            >
              <div className="flex gap-4">

                <div className="shrink-0 w-11 h-11 rounded-xl bg-[#b08b2c] text-white flex items-center justify-center">
                  <CheckCircle2 size={21} />
                </div>

                <div>
                  <h3 className="font-serif text-lg sm:text-xl text-[#193d2f]">
                    Our Simple Goal
                  </h3>

                  <p className="mt-1.5 text-sm leading-6 text-slate-600">
                    Offer terrific brands and innovative, wholesome
                    products at prices that make sense. We want to
                    offer the best products and help our consumers
                    make the best choices for themselves and their
                    families.
                  </p>
                </div>

              </div>
            </motion.div>

            {/* Global Presence */}
            <motion.div
              variants={itemVariants}
              className="
                mt-3
                rounded-2xl
                bg-[#193d2f]
                p-4
                sm:p-5
                text-white
                shadow-lg
              "
            >
              <div className="flex gap-4">

                <div className="shrink-0 w-11 h-11 rounded-full bg-[#c9d34f] text-[#193d2f] flex items-center justify-center">
                  <Globe2 size={21} />
                </div>

                <div>
                  <h3 className="font-serif text-lg sm:text-xl">
                    Growing Across the Globe
                  </h3>

                  <p className="mt-1.5 text-sm leading-6 text-white/80">
                    The brand has a widespread presence in India and
                    international markets. Its plants are located in
                    Punjab, Delhi and Haryana, with its headquarters
                    situated in Delhi.
                  </p>

                  <div className="flex items-center gap-2 mt-3 text-[#c9d34f]">
                    <Factory size={17} />

                    <span className="text-sm">
                      Serving 30+ countries outside India
                    </span>
                  </div>
                </div>

              </div>
            </motion.div>

            {/* Closing */}
            <motion.p
              variants={itemVariants}
              className="
                mt-4
                text-sm
                leading-6
                text-slate-600
              "
            >
              They are one of the leading rice exporters in India,
              ensuring their presence across international markets.
              We thank all our channel partners for being a part of
              this journey, and we promise to continue delivering
              good quality products.
            </motion.p>

          </motion.div>
        </div>
      </div>
    </section>
  );
}