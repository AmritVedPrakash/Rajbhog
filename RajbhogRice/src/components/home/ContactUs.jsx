import React from "react";
import { motion } from "framer-motion";
import {
  User,
  Phone,
  Mail,
  Pencil,
  MessageSquare,
  ArrowRight,
  Sparkles,
} from "lucide-react";

import RiceImage from "../../assets/home/rajbhogrice1.png";

export default function ContactUs() {
  const inputAnimation = {
    initial: {
      opacity: 0,
      y: 25,
    },
    whileInView: {
      opacity: 1,
      y: 0,
    },
    viewport: {
      once: false,
      amount: 0.3,
    },
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  };

  return (
    <section
      id="contact"
      className="
        relative
        w-full
        min-h-screen
        overflow-hidden
        bg-transparent
        py-16
        sm:py-20
        lg:py-24
      "
    >
      {/* =====================================================
          BACKGROUND RICE IMAGE
      ====================================================== */}

      <div className="absolute inset-0 pointer-events-none overflow-hidden">

        <motion.img
          src={RiceImage}
          alt=""
          initial={{
            opacity: 0,
            scale: 0.9,
            x: 100,
          }}
          whileInView={{
            opacity: 0.14,
            scale: 1,
            x: 0,
          }}
          viewport={{
            once: false,
            amount: 0.2,
          }}
          transition={{
            duration: 1.2,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            absolute
            right-[-12%]
            bottom-[-12%]

            w-[480px]
            sm:w-[600px]
            lg:w-[780px]

            max-w-none

            object-contain

            rotate-[-8deg]

            blur-[1px]
          "
        />

        {/* Soft golden glow */}

        <div
          className="
            absolute
            top-[-180px]
            right-[-120px]

            w-[450px]
            h-[450px]

            rounded-full

            bg-[#c8ad46]/10

            blur-[120px]
          "
        />

        <div
          className="
            absolute
            bottom-[-150px]
            left-[-150px]

            w-[400px]
            h-[400px]

            rounded-full

            bg-[#c8ad46]/8

            blur-[110px]
          "
        />
      </div>


      {/* =====================================================
          FLOATING GOLDEN PARTICLES
      ====================================================== */}

      <div className="absolute inset-0 pointer-events-none">

        {[...Array(14)].map((_, index) => (
          <motion.span
            key={index}
            className="
              absolute
              w-[4px]
              h-[11px]
              rounded-full
              bg-[#c8ad46]/40
            "
            style={{
              left: `${5 + index * 7}%`,
              top: `${8 + (index % 6) * 16}%`,
              rotate: `${index * 23}deg`,
            }}
            animate={{
              y: [-10, 10, -10],
              opacity: [0.2, 0.6, 0.2],
              rotate: [
                index * 23,
                index * 23 + 15,
                index * 23,
              ],
            }}
            transition={{
              duration: 4 + index * 0.25,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

      </div>


      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <div
        className="
          relative
          z-10

          max-w-6xl
          mx-auto

          px-5
          sm:px-8
          lg:px-10
        "
      >

        <div
          className="
            grid
            lg:grid-cols-[0.8fr_1.2fr]

            gap-12
            lg:gap-20

            items-center
          "
        >

          {/* =================================================
              LEFT SIDE
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: -60,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: false,
              amount: 0.3,
            }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
          >

            {/* Label */}

            <div
              className="
                flex
                items-center
                gap-2
                mb-5
              "
            >

              <Sparkles
                size={17}
                className="text-[#b89d35]"
              />

              <span
                className="
                  text-sm
                  font-semibold
                  uppercase
                  tracking-[0.25em]
                  text-[#a98e2e]
                "
              >
                Contact Us
              </span>

            </div>


            {/* Heading */}

            <h2
              className="
                font-serif
                text-4xl
                sm:text-5xl
                lg:text-6xl

                leading-[1.05]

                font-medium

                text-[#173b2e]
              "
            >
              Let's have
              <br />

              <span className="text-[#b49a32]">
                a conversation.
              </span>
            </h2>


            {/* Golden divider */}

            <div
              className="
                flex
                items-center
                gap-3

                mt-7
                mb-7
              "
            >

              <span
                className="
                  w-14
                  h-[1px]
                  bg-[#b49a32]
                "
              />

              <span
                className="
                  w-2
                  h-2
                  rotate-45
                  bg-[#b49a32]
                "
              />

              <span
                className="
                  w-14
                  h-[1px]
                  bg-[#b49a32]
                "
              />

            </div>


            {/* Description */}

            <p
              className="
                max-w-md

                text-base
                sm:text-lg

                leading-8

                text-[#173b2e]/70
              "
            >
              Looking for premium Basmati rice or want to
              know more about Rajbhog Rice? Get in touch
              with our team. We would love to hear from you.
            </p>


            {/* Small badge */}

            <motion.div
              whileHover={{
                y: -3,
              }}
              className="
                mt-8

                inline-flex
                items-center
                gap-3

                rounded-full

                border
                border-[#b49a32]/25

                bg-white/20

                px-5
                py-3

                backdrop-blur-md

                shadow-sm
              "
            >

              <span
                className="
                  w-2
                  h-2
                  rounded-full

                  bg-[#b49a32]

                  shadow-[0_0_12px_rgba(180,154,50,0.7)]
                "
              />

              <span
                className="
                  text-sm
                  text-[#173b2e]/75
                "
              >
                We would love to hear from you
              </span>

            </motion.div>

          </motion.div>


          {/* =================================================
              RIGHT SIDE FORM
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: 60,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: false,
              amount: 0.25,
            }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative"
          >

            {/* Form glow */}

            <div
              className="
                absolute
                inset-4

                rounded-[32px]

                bg-[#b49a32]/10

                blur-[45px]
              "
            />


            {/* =================================================
                GLASS FORM
            ================================================= */}

            <div
              className="
                relative

                rounded-[28px]

                border
                border-[#173b2e]/15

                bg-white/[0.18]

                backdrop-blur-xl

                p-5
                sm:p-7
                lg:p-9

                shadow-[0_25px_80px_rgba(23,59,46,0.10)]
              "
            >

              {/* Top golden shine */}

              <div
                className="
                  absolute
                  top-0
                  left-[15%]
                  right-[15%]

                  h-[1px]

                  bg-gradient-to-r
                  from-transparent
                  via-[#b49a32]
                  to-transparent
                "
              />


              {/* Form heading */}

              <div className="mb-7">

                <h3
                  className="
                    font-serif

                    text-2xl
                    sm:text-3xl

                    text-[#173b2e]
                  "
                >
                  Send us a message
                </h3>

                <p
                  className="
                    mt-2

                    text-sm

                    text-[#173b2e]/55
                  "
                >
                  Fill in your details and our team will
                  get back to you.
                </p>

              </div>


              <form className="space-y-4">

                {/* NAME */}

                <motion.div {...inputAnimation}>

                  <InputField
                    icon={<User size={19} />}
                    placeholder="Your Name"
                    type="text"
                  />

                </motion.div>


                {/* PHONE */}

                <motion.div
                  {...inputAnimation}
                  transition={{
                    duration: 0.6,
                    delay: 0.05,
                  }}
                >

                  <InputField
                    icon={<Phone size={19} />}
                    placeholder="Phone Number"
                    type="tel"
                  />

                </motion.div>


                {/* EMAIL */}

                <motion.div
                  {...inputAnimation}
                  transition={{
                    duration: 0.6,
                    delay: 0.1,
                  }}
                >

                  <InputField
                    icon={<Mail size={19} />}
                    placeholder="Email Address"
                    type="email"
                  />

                </motion.div>


                {/* SUBJECT */}

                <motion.div
                  {...inputAnimation}
                  transition={{
                    duration: 0.6,
                    delay: 0.15,
                  }}
                >

                  <InputField
                    icon={<Pencil size={19} />}
                    placeholder="Subject"
                    type="text"
                  />

                </motion.div>


                {/* MESSAGE */}

                <motion.div
                  {...inputAnimation}
                  transition={{
                    duration: 0.6,
                    delay: 0.2,
                  }}
                  className="relative"
                >

                  <MessageSquare
                    size={19}
                    className="
                      absolute
                      left-4
                      top-4

                      text-[#173b2e]/45
                    "
                  />

                  <textarea
                    placeholder="Tell us about your requirements..."
                    rows="4"
                    className="
                      w-full

                      resize-none

                      rounded-2xl

                      border
                      border-[#173b2e]/10

                      bg-white/[0.16]

                      px-12
                      py-4

                      text-sm
                      sm:text-base

                      text-[#173b2e]

                      placeholder:text-[#173b2e]/40

                      outline-none

                      transition-all
                      duration-300

                      focus:border-[#b49a32]/70

                      focus:bg-white/[0.25]

                      focus:ring-2
                      focus:ring-[#b49a32]/10
                    "
                  />

                </motion.div>


                {/* SUBMIT */}

                <motion.button
                  type="submit"

                  whileHover={{
                    scale: 1.02,
                  }}

                  whileTap={{
                    scale: 0.97,
                  }}

                  className="
                    group

                    mt-2

                    flex
                    w-full

                    items-center
                    justify-center
                    gap-3

                    rounded-2xl

                    bg-[#bfc94b]

                    px-6
                    py-4

                    text-sm
                    sm:text-base

                    font-bold

                    uppercase
                    tracking-wider

                    text-[#173b2e]

                    shadow-[0_10px_30px_rgba(191,201,75,0.20)]

                    transition-all
                    duration-300

                    hover:bg-[#cbd65b]

                    hover:shadow-[0_15px_35px_rgba(191,201,75,0.30)]
                  "
                >

                  Send Message

                  <ArrowRight
                    size={19}
                    className="
                      transition-transform
                      duration-300

                      group-hover:translate-x-1
                    "
                  />

                </motion.button>

              </form>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}


/* ============================================================
   INPUT COMPONENT
============================================================ */

function InputField({
  icon,
  placeholder,
  type,
}) {
  return (
    <div className="relative">

      <div
        className="
          absolute
          left-4
          top-1/2

          -translate-y-1/2

          text-[#173b2e]/45

          pointer-events-none
        "
      >
        {icon}
      </div>

      <input
        type={type}
        placeholder={placeholder}

        className="
          w-full

          rounded-2xl

          border
          border-[#173b2e]/10

          bg-white/[0.16]

          px-12
          py-4

          text-sm
          sm:text-base

          text-[#173b2e]

          placeholder:text-[#173b2e]/40

          outline-none

          transition-all
          duration-300

          focus:border-[#b49a32]/70

          focus:bg-white/[0.25]

          focus:ring-2
          focus:ring-[#b49a32]/10
        "
      />

    </div>
  );
}