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
        min-h-screen
        overflow-hidden
        bg-white
        flex
        items-center
      "
    >
      {/* =========================================
          BACKGROUND DECORATION
      ========================================== */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="
            absolute
            -top-40
            -left-40
            w-[500px]
            h-[500px]
            rounded-full
            bg-[#c9d34f]/10
            blur-3xl
          "
        />

        <div
          className="
            absolute
            -bottom-40
            -right-40
            w-[500px]
            h-[500px]
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
          py-16
          lg:py-20
        "
      >
        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-2
            items-center
            gap-12
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
                gap-3
                mb-5
              "
            >
              <span className="w-10 h-[2px] bg-[#b08b2c]" />

              <span
                className="
                  text-sm
                  sm:text-base
                  font-semibold
                  tracking-[0.25em]
                  uppercase
                  text-[#b08b2c]
                "
              >
                About Rajbhog
              </span>

              <span className="w-10 h-[2px] bg-[#b08b2c] lg:hidden" />
            </div>

            {/* Main heading */}
            <h1
              className="
                font-serif
                text-4xl
                sm:text-5xl
                lg:text-6xl
                xl:text-7xl
                leading-[1.05]
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
                gap-3
                my-7
              "
            >
              <span className="w-16 h-[1px] bg-[#b08b2c]" />

              <span
                className="
                  w-2
                  h-2
                  rotate-45
                  bg-[#b08b2c]
                "
              />

              <span className="w-16 h-[1px] bg-[#b08b2c]" />
            </div>

            {/* Paragraph */}
            <p
              className="
                text-base
                sm:text-lg
                lg:text-xl
                leading-8
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
                mt-5
                text-base
                sm:text-lg
                lg:text-xl
                leading-8
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
                mt-8
                inline-flex
                items-center
                gap-3
                rounded-full
                border
                border-[#b08b2c]/30
                bg-[#b08b2c]/5
                px-5
                py-3
              "
            >
              <span
                className="
                  w-2.5
                  h-2.5
                  rounded-full
                  bg-[#b08b2c]
                  animate-pulse
                "
              />

              <span
                className="
                  text-sm
                  sm:text-base
                  font-semibold
                  text-[#193d2f]
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
              min-h-[400px]
              sm:min-h-[500px]
              lg:min-h-[620px]
              flex
              items-center
              justify-center
            "
          >
            {/* =================================
                DECORATIVE RINGS
                These DON'T rotate
            ================================== */}

            <div
              className="
                absolute
                w-[280px]
                h-[280px]
                sm:w-[400px]
                sm:h-[400px]
                lg:w-[520px]
                lg:h-[520px]
                rounded-full
                border
                border-[#b08b2c]/20
              "
            />

            <div
              className="
                absolute
                w-[220px]
                h-[220px]
                sm:w-[330px]
                sm:h-[330px]
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
                x: 180,
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
                w-[85%]
                sm:w-[75%]
                lg:w-[90%]
                xl:w-[95%]
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