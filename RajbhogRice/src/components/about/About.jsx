
import React from "react";
import { motion } from "framer-motion";

import RiceImage from "../../assets/about/aboutRice.png";

export default function About() {
  return (
    <section
      id="about"
      className="
        relative
        w-full
        min-h-[calc(100vh-80px)]
        overflow-hidden
        bg-white
        flex
        items-center
        pt-24
        sm:pt-28
        lg:pt-32
        pb-10
        sm:pb-14
        lg:pb-16
      "
    >
      {/* =========================================
          BACKGROUND DECORATION
      ========================================== */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Top Left Glow */}
        <div
          className="
            absolute
            -top-32
            -left-32
            sm:-top-40
            sm:-left-40
            w-[280px]
            h-[280px]
            sm:w-[400px]
            sm:h-[400px]
            lg:w-[500px]
            lg:h-[500px]
            rounded-full
            bg-[#c9d34f]/10
            blur-3xl
          "
        />

        {/* Bottom Right Glow */}
        <div
          className="
            absolute
            -bottom-32
            -right-32
            sm:-bottom-40
            sm:-right-40
            w-[280px]
            h-[280px]
            sm:w-[400px]
            sm:h-[400px]
            lg:w-[500px]
            lg:h-[500px]
            rounded-full
            bg-[#b08b2c]/10
            blur-3xl
          "
        />
      </div>

      {/* =========================================
          MAIN CONTAINER
      ========================================== */}
      <div
        className="
          relative
          z-10
          w-full
          max-w-7xl
          mx-auto
          px-5
          sm:px-8
          lg:px-12
        "
      >
        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-2
            items-center
            gap-8
            sm:gap-10
            lg:gap-20
          "
        >
          {/* =====================================
              LEFT CONTENT
          ====================================== */}
          <motion.div
            initial={{
              opacity: 0,
              x: -80,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-center lg:text-left"
          >
            {/* Small heading */}
            <div
              className="
                flex
                items-center
                justify-center
                lg:justify-start
                gap-2
                sm:gap-3
                mb-4
                sm:mb-5
              "
            >
              <span className="w-7 sm:w-10 h-[2px] bg-[#b08b2c]" />

              <span
                className="
                  text-xs
                  sm:text-sm
                  md:text-base
                  font-semibold
                  tracking-[0.18em]
                  sm:tracking-[0.25em]
                  uppercase
                  text-[#b08b2c]
                "
              >
                About Rajbhog
              </span>

              <span className="w-7 sm:w-10 h-[2px] bg-[#b08b2c] lg:hidden" />
            </div>

            {/* Main heading */}
            <h1
              className="
                font-serif
                text-[2.2rem]
                leading-[1.08]
                sm:text-5xl
                md:text-6xl
                lg:text-6xl
                xl:text-7xl
                font-medium
                text-[#193d2f]
              "
            >
              Largest Manufacturer

              <span className="block text-[#b08b2c]">
                & Exporter of Rice
              </span>
            </h1>

            {/* Decorative line */}
            <div
              className="
                flex
                items-center
                justify-center
                lg:justify-start
                gap-2
                sm:gap-3
                my-5
                sm:my-7
              "
            >
              <span className="w-10 sm:w-16 h-[1px] bg-[#b08b2c]" />

              <span
                className="
                  w-1.5
                  h-1.5
                  sm:w-2
                  sm:h-2
                  rotate-45
                  bg-[#b08b2c]
                "
              />

              <span className="w-10 sm:w-16 h-[1px] bg-[#b08b2c]" />
            </div>

            {/* Paragraph */}
            <p
              className="
                text-sm
                sm:text-base
                md:text-lg
                lg:text-xl
                leading-7
                sm:leading-8
                text-slate-600
                max-w-2xl
                mx-auto
                lg:mx-0
              "
            >
              For generations, Rajbhog has been synonymous with
              authenticity and quality. We bring you basmati rice
              cultivated in the lush fields of northern India, carefully
              milled and aged to retain its natural aroma, flavor, and
              texture.
            </p>

            <p
              className="
                mt-4
                sm:mt-5
                text-sm
                sm:text-base
                md:text-lg
                lg:text-xl
                leading-7
                sm:leading-8
                text-slate-600
                max-w-2xl
                mx-auto
                lg:mx-0
              "
            >
              Our rice brands{" "}
              <span className="font-bold text-[#193d2f]">
                Rajbhog Rice
              </span>{" "}
              are known for their delightful taste, fresh aroma, fine
              texture and alluring appearance.
            </p>

            {/* Bottom badge */}
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.3,
                duration: 0.7,
              }}
              className="
                mt-6
                sm:mt-8
                inline-flex
                items-center
                gap-2
                sm:gap-3
                rounded-full
                border
                border-[#b08b2c]/30
                bg-[#b08b2c]/5
                px-4
                sm:px-5
                py-2.5
                sm:py-3
                max-w-full
              "
            >
              <span
                className="
                  flex-shrink-0
                  w-2
                  h-2
                  sm:w-2.5
                  sm:h-2.5
                  rounded-full
                  bg-[#b08b2c]
                  animate-pulse
                "
              />

              <span
                className="
                  text-xs
                  sm:text-sm
                  md:text-base
                  font-semibold
                  text-[#193d2f]
                  whitespace-nowrap
                "
              >
                Purity • Aroma • Heritage
              </span>
            </motion.div>
          </motion.div>

          {/* =====================================
              RIGHT IMAGE SECTION
          ====================================== */}
          <div
            className="
              relative
              w-full
              min-h-[300px]
              sm:min-h-[400px]
              md:min-h-[480px]
              lg:min-h-[600px]
              flex
              items-center
              justify-center
              mt-2
              sm:mt-4
              lg:mt-0
            "
          >
            {/* =================================
                DECORATIVE OUTER RING
            ================================== */}
            <div
              className="
                absolute
                w-[230px]
                h-[230px]
                sm:w-[340px]
                sm:h-[340px]
                md:w-[420px]
                md:h-[420px]
                lg:w-[520px]
                lg:h-[520px]
                rounded-full
                border
                border-[#b08b2c]/20
              "
            />

            {/* =================================
                DECORATIVE INNER RING
            ================================== */}
            <div
              className="
                absolute
                w-[180px]
                h-[180px]
                sm:w-[280px]
                sm:h-[280px]
                md:w-[350px]
                md:h-[350px]
                lg:w-[430px]
                lg:h-[430px]
                rounded-full
                border
                border-[#c9d34f]/25
              "
            />

            {/* =================================
                IMAGE ENTRY ANIMATION
            ================================== */}
            <motion.div
              initial={{
                opacity: 0,
                x: 120,
                scale: 0.7,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                scale: 1,
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 1.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                relative
                z-10
                w-[78%]
                sm:w-[72%]
                md:w-[70%]
                lg:w-[88%]
                xl:w-[94%]
                max-w-[620px]
                flex
                items-center
                justify-center
              "
            >
              {/* =================================
                  ONLY IMAGE ROTATES
              ================================== */}
              <motion.img
                src={RiceImage}
                alt="Premium Rajbhog Basmati Rice"
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 18,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="
                  block
                  w-full
                  h-auto
                  object-contain
                  pointer-events-none
                  select-none
                  will-change-transform
                "
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

