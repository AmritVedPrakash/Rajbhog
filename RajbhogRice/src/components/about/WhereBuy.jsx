import React from "react";
import { motion } from "framer-motion";
import {
  ShoppingBag,
  Globe2,
  Store,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

//  Apne about folder ki actual image ka naam yahan use karo
import WhereBuyImage from "../../assets/about/wherebuy.png";

export default function WhereBuy() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 35,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section
      id="where-buy"
      className="
        relative
        w-full
        overflow-hidden
        bg-[#faf9f4]
        py-16
        sm:py-20
        lg:py-24
      "
    >
      {/* ================================
          BACKGROUND DECORATION
      ================================= */}
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

        {/* Decorative circles */}
        <div
          className="
            absolute
            top-20
            right-[8%]
            w-20
            h-20
            rounded-full
            border
            border-[#b08b2c]/20
          "
        />

        <div
          className="
            absolute
            bottom-20
            left-[5%]
            w-12
            h-12
            rounded-full
            border
            border-[#193d2f]/10
          "
        />
      </div>

      {/* ================================
          MAIN CONTAINER
      ================================= */}
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
        {/* ================================
            TOP HEADING
        ================================= */}
        <motion.div
          initial={{ opacity: 0, y: -25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-12 lg:mb-16"
        >
          {/* Small label */}
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-10 h-[1px] bg-[#b08b2c]" />

            <span
              className="
                flex
                items-center
                gap-2
                text-xs
                sm:text-sm
                font-semibold
                tracking-[0.28em]
                uppercase
                text-[#b08b2c]
              "
            >
              <Sparkles size={15} />
              Where To Buy
            </span>

            <span className="w-10 h-[1px] bg-[#b08b2c]" />
          </div>

          <h1
            className="
              font-serif
              text-4xl
              sm:text-5xl
              lg:text-6xl
              leading-tight
              font-medium
              text-[#193d2f]
            "
          >
            Bring the Royal Taste
            <span className="block text-[#b08b2c]">Home With Rajbhog</span>
          </h1>

          <p
            className="
              mt-5
              text-base
              sm:text-lg
              leading-8
              text-slate-600
              max-w-2xl
              mx-auto
            "
          >
            Discover Rajbhog Rice through trusted stores and convenient shopping
            options. Choose your favourite variety and enjoy premium Basmati
            rice at home.
          </p>
        </motion.div>

        {/* ================================
            CONTENT
        ================================= */}
        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-[0.95fr_1.05fr]
            gap-10
            lg:gap-16
            items-center
          "
        >
          {/* =================================
              LEFT IMAGE
          ================================= */}
          <motion.div
            initial={{
              opacity: 0,
              x: -100,
              scale: 0.92,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              relative
              w-full
              min-h-[420px]
              sm:min-h-[520px]
              lg:min-h-[600px]
              flex
              items-center
              justify-center
            "
          >
            {/* Gold glow */}
            <div
              className="
                absolute
                w-[70%]
                h-[70%]
                rounded-full
                bg-[#b08b2c]/10
                blur-3xl
              "
            />

            {/* Decorative outer ring */}
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                absolute
                w-[78%]
                aspect-square
                rounded-full
                border
                border-dashed
                border-[#b08b2c]/25
              "
            />

            {/* Decorative inner ring */}
            <div
              className="
                absolute
                w-[68%]
                aspect-square
                rounded-full
                border
                border-[#c9d34f]/25
              "
            />

            {/* Image */}
            <motion.img
              src={WhereBuyImage}
              alt="Rajbhog Rice"
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                relative
                z-10
                w-[85%]
                sm:w-[80%]
                lg:w-[92%]
                max-w-[620px]
                h-auto
                object-contain
                drop-shadow-[0_25px_35px_rgba(25,61,47,0.18)]
                select-none
              "
            />

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.6,
                duration: 0.6,
              }}
              className="
                absolute
                z-20
                bottom-8
                left-3
                sm:left-8
                lg:left-4
                bg-white/90
                backdrop-blur-md
                border
                border-[#b08b2c]/20
                rounded-2xl
                px-4
                py-3
                shadow-xl
              "
            >
              <div className="flex items-center gap-3">
                <div
                  className="
                    w-10
                    h-10
                    rounded-full
                    bg-[#193d2f]
                    flex
                    items-center
                    justify-center
                    text-[#c9d34f]
                  "
                >
                  <CheckCircle2 size={21} />
                </div>

                <div>
                  <p className="text-xs text-slate-500">Premium Quality</p>

                  <p className="font-semibold text-[#193d2f]">Rajbhog Rice</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* =================================
              RIGHT CONTENT
          ================================= */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            className="w-full"
          >
            {/* Main intro */}
            <motion.div variants={itemVariants}>
              <h2
                className="
                  font-serif
                  text-3xl
                  sm:text-4xl
                  lg:text-5xl
                  leading-tight
                  text-[#193d2f]
                "
              >
                A Rice Worth
                <span className="block text-[#b08b2c]">Bringing Home</span>
              </h2>

              <p
                className="
                  mt-5
                  text-base
                  sm:text-lg
                  leading-8
                  text-slate-600
                  max-w-2xl
                "
              >
                Rajbhog Rice brings together exceptional aroma, beautiful long
                grains and a naturally delicious taste. Find the variety that
                perfectly matches your everyday meals, celebrations and special
                occasions.
              </p>
            </motion.div>

            {/* =================================
                BUY OPTIONS
            ================================= */}
            <div className="mt-8 space-y-4">
              {/* Indian Supermarkets */}
              <motion.div
                variants={itemVariants}
                whileHover={{
                  y: -4,
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-2xl
                  border
                  border-[#193d2f]/10
                  bg-white/70
                  backdrop-blur-sm
                  p-5
                  sm:p-6
                  transition-all
                  duration-300
                  hover:shadow-xl
                  hover:border-[#b08b2c]/30
                "
              >
                <div className="flex gap-4">
                  <div
                    className="
                      shrink-0
                      w-12
                      h-12
                      rounded-xl
                      bg-[#193d2f]
                      text-[#c9d34f]
                      flex
                      items-center
                      justify-center
                      transition-transform
                      duration-300
                      group-hover:scale-110
                    "
                  >
                    <Store size={23} />
                  </div>

                  <div>
                    <h3
                      className="
                        font-serif
                        text-xl
                        sm:text-2xl
                        text-[#193d2f]
                      "
                    >
                      Indian Supermarkets
                    </h3>

                    <p
                      className="
                        mt-2
                        text-sm
                        sm:text-base
                        leading-7
                        text-slate-600
                      "
                    >
                      Rajbhog Rice is available through Indian and South Asian
                      grocery stores, making it easy to find your favourite rice
                      varieties.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Online */}
              <motion.div
                variants={itemVariants}
                whileHover={{
                  y: -4,
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-2xl
                  border
                  border-[#193d2f]/10
                  bg-white/70
                  backdrop-blur-sm
                  p-5
                  sm:p-6
                  transition-all
                  duration-300
                  hover:shadow-xl
                  hover:border-[#b08b2c]/30
                "
              >
                <div className="flex gap-4">
                  <div
                    className="
                      shrink-0
                      w-12
                      h-12
                      rounded-xl
                      bg-[#b08b2c]
                      text-white
                      flex
                      items-center
                      justify-center
                      transition-transform
                      duration-300
                      group-hover:scale-110
                    "
                  >
                    <Globe2 size={23} />
                  </div>

                  <div>
                    <h3
                      className="
                        font-serif
                        text-xl
                        sm:text-2xl
                        text-[#193d2f]
                      "
                    >
                      Online Shopping
                    </h3>

                    <p
                      className="
                        mt-2
                        text-sm
                        sm:text-base
                        leading-7
                        text-slate-600
                      "
                    >
                      Explore available varieties, pack sizes and convenient
                      purchasing options through online platforms.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* =================================
                  VARIETIES
              ================================= */}
              <motion.div
                variants={itemVariants}
                className="
                  rounded-2xl
                  bg-[#193d2f]
                  p-5
                  sm:p-6
                  text-white
                  shadow-lg
                "
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="
                      w-10
                      h-10
                      rounded-full
                      bg-[#c9d34f]
                      text-[#193d2f]
                      flex
                      items-center
                      justify-center
                    "
                  >
                    <ShoppingBag size={20} />
                  </div>

                  <h3
                    className="
                      font-serif
                      text-xl
                      sm:text-2xl
                    "
                  >
                    Available Varieties
                  </h3>
                </div>

                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    "Classic Basmati",
                    "Premium Basmati",
                    "Rajbhog Biryani",
                    "Everyday Rice",
                  ].map((item) => (
                    <div
                      key={item}
                      className="
                        flex
                        items-center
                        gap-2
                        text-sm
                        sm:text-base
                        text-white/85
                      "
                    >
                      <CheckCircle2
                        size={17}
                        className="text-[#c9d34f] shrink-0"
                      />

                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
