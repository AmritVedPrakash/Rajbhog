import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

// Images
import HACCP from "../../assets/home/HACCP.png";
import APEDA from "../../assets/home/APEDA.png";
import ISO from "../../assets/home/ISO.png";
import FSSAI from "../../assets/home/FSSAI.png";
import MSME from "../../assets/home/MSME.png";

const certifications = [
  {
    image: HACCP,
    name: "HACCP",
  },
  {
    image: APEDA,
    name: "APEDA",
  },
  {
    image: ISO,
    name: "ISO 22000",
  },
  {
    image: FSSAI,
    name: "FSSAI",
  },
  {
    image: MSME,
    name: "MSME",
  },
];

export default function OurCertifications() {
  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-[#faf9f3]
        border-y
        border-[#ddd8c8]
        py-7
        sm:py-8
      "
    >
      {/* Background Glow */}

      <div
        className="
          absolute
          left-1/2
          top-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[600px]
          h-[180px]
          rounded-full
          bg-[#c8a842]/10
          blur-[80px]
          pointer-events-none
        "
      />

      <div className="relative z-10">

        {/* ================= HEADER ================= */}

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >

          <div className="flex items-center justify-center gap-2">
            <ShieldCheck
              size={16}
              className="text-[#9d812d]"
            />

            <span
              className="
                text-[10px]
                sm:text-xs
                font-semibold
                uppercase
                tracking-[0.25em]
                text-[#8b742d]
              "
            >
              Our Certifications
            </span>
          </div>

          <h2
            className="
              mt-1.5
              font-serif
              text-2xl
              sm:text-3xl
              font-semibold
              text-[#173b2a]
            "
          >
            Trusted Standards,
            <span className="text-[#b09235]">
              {" "}Recognized Quality
            </span>
          </h2>

        </motion.div>


        {/* ================= INFINITE SLIDER ================= */}

        <div
          className="
            relative
            w-full
            overflow-hidden
          "
        >

          {/* Left Fade */}

          <div
            className="
              absolute
              left-0
              top-0
              bottom-0
              w-20
              sm:w-32
              z-20
              pointer-events-none
              bg-gradient-to-r
              from-[#faf9f3]
              to-transparent
            "
          />

          {/* Right Fade */}

          <div
            className="
              absolute
              right-0
              top-0
              bottom-0
              w-20
              sm:w-32
              z-20
              pointer-events-none
              bg-gradient-to-l
              from-[#faf9f3]
              to-transparent
            "
          />


          {/* Moving Track */}

          <motion.div
            className="
              flex
              items-center
              gap-5
              sm:gap-7
              w-max
            "
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              duration: 18,
              ease: "linear",
              repeat: Infinity,
            }}
          >

            {/* First Set */}

            {certifications.map((cert, index) => (
              <CertificationCard
                key={`first-${cert.name}`}
                cert={cert}
                index={index}
              />
            ))}

            {/* Duplicate Set */}

            {certifications.map((cert, index) => (
              <CertificationCard
                key={`second-${cert.name}`}
                cert={cert}
                index={index}
              />
            ))}

          </motion.div>

        </div>


        {/* ================= BOTTOM TEXT ================= */}

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{
            duration: 0.6,
            delay: 0.2,
          }}
          className="
            mt-5
            text-center
            text-xs
            sm:text-sm
            text-[#77786f]
          "
        >
          Quality, safety and excellence — backed by recognized
          industry standards.
        </motion.p>

      </div>

    </section>
  );
}


/* =========================================================
   CERTIFICATION CARD
========================================================= */

function CertificationCard({ cert, index }) {
  return (
    <motion.div
      whileHover={{
        y: -5,
        scale: 1.04,
      }}
      transition={{
        duration: 0.25,
      }}
      className="
        group
        relative
        flex
        items-center
        justify-center

        w-[180px]
        sm:w-[210px]
        lg:w-[230px]

        h-[115px]
        sm:h-[125px]

        shrink-0

        rounded-2xl

        bg-white

        border
        border-[#e1ddcd]

        shadow-[0_6px_22px_rgba(31,59,43,0.06)]

        transition-all
        duration-300

        hover:border-[#c8ad51]

        hover:shadow-[0_12px_30px_rgba(31,59,43,0.12)]
      "
    >

      {/* Golden Top Line */}

      <span
        className="
          absolute
          top-0
          left-1/2
          -translate-x-1/2

          w-0
          group-hover:w-14

          h-[2px]

          bg-[#c5a746]

          transition-all
          duration-300
        "
      />


      {/* Logo */}

      <img
        src={cert.image}
        alt={cert.name}
        className="
          max-w-[150px]
          sm:max-w-[170px]

          max-h-[85px]
          sm:max-h-[95px]

          object-contain

          transition-transform
          duration-300

          group-hover:scale-105
        "
      />

    </motion.div>
  );
}