import React from "react";
import { motion } from "framer-motion";
import {
  Wheat,
  Globe2,
  Factory,
  CalendarDays,
  Users,
  PackageCheck,
  Sprout,
  CheckCircle2,
} from "lucide-react";

export default function Contents() {
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

  const basmatiTypes = [
    "Basmati 386",
    "Basmati 217",
    "Ranbir Basmati",
    "Pusa Basmati 1",
    "Taraori Basmati",
    "Basmati 370",
    "Dehradooni Basmati",
  ];

  return (
    <section className="relative w-full overflow-hidden bg-[#faf9f4] py-16 sm:py-20 lg:py-24">

      {/* =========================================
          BACKGROUND DECORATION
      ========================================== */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">

        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-[#193d2f]/5 blur-3xl" />

        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-[#b08b2c]/10 blur-3xl" />

        <div className="absolute top-24 right-[8%] w-24 h-24 rounded-full border border-[#b08b2c]/20" />

        <div className="absolute bottom-24 left-[5%] w-14 h-14 rounded-full border border-[#193d2f]/10" />

      </div>

      {/* =========================================
          MAIN CONTAINER
      ========================================== */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

        {/* =========================================
            HEADER
        ========================================== */}
        <motion.div
          initial={{ opacity: 0, y: -25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-12 lg:mb-16"
        >

          <div className="flex items-center justify-center gap-3 mb-4">

            <span className="w-10 h-[1px] bg-[#b08b2c]" />

            <span className="flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-[#b08b2c]">
              <Wheat size={15} />
              About J.R. Rice
            </span>

            <span className="w-10 h-[1px] bg-[#b08b2c]" />

          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-tight font-medium text-[#193d2f]">
            Tradition, Quality &
            <span className="block text-[#b08b2c]">
              Excellence in Rice
            </span>
          </h1>

          <p className="mt-5 text-base sm:text-lg leading-8 text-slate-600 max-w-3xl mx-auto">
            A legacy built on genuine quality, advanced technology,
            experienced people and a commitment to customer satisfaction.
          </p>

        </motion.div>

        {/* =========================================
            PRODUCTION STATS
        ========================================== */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
        >

          {/* Production */}
          <motion.div
            variants={itemVariants}
            className="rounded-2xl bg-[#193d2f] p-6 text-white shadow-lg"
          >
            <div className="w-11 h-11 rounded-xl bg-[#c9d34f] text-[#193d2f] flex items-center justify-center mb-4">
              <Wheat size={22} />
            </div>

            <p className="text-3xl font-serif">7.5M</p>

            <p className="mt-1 text-sm text-white/70">
              Tons of annual rice production
            </p>
          </motion.div>

          {/* Export */}
          <motion.div
            variants={itemVariants}
            className="rounded-2xl bg-white/80 border border-[#193d2f]/10 p-6 shadow-sm"
          >
            <div className="w-11 h-11 rounded-xl bg-[#b08b2c] text-white flex items-center justify-center mb-4">
              <Globe2 size={22} />
            </div>

            <p className="text-3xl font-serif text-[#193d2f]">
              2.5M
            </p>

            <p className="mt-1 text-sm text-slate-500">
              Tons of rice exported
            </p>
          </motion.div>

          {/* Established */}
          <motion.div
            variants={itemVariants}
            className="rounded-2xl bg-white/80 border border-[#193d2f]/10 p-6 shadow-sm"
          >
            <div className="w-11 h-11 rounded-xl bg-[#193d2f] text-[#c9d34f] flex items-center justify-center mb-4">
              <CalendarDays size={22} />
            </div>

            <p className="text-3xl font-serif text-[#193d2f]">
              1975
            </p>

            <p className="mt-1 text-sm text-slate-500">
              Year the company was established
            </p>
          </motion.div>

          {/* Experience */}
          <motion.div
            variants={itemVariants}
            className="rounded-2xl bg-white/80 border border-[#193d2f]/10 p-6 shadow-sm"
          >
            <div className="w-11 h-11 rounded-xl bg-[#b08b2c] text-white flex items-center justify-center mb-4">
              <Users size={22} />
            </div>

            <p className="text-3xl font-serif text-[#193d2f]">
              25+
            </p>

            <p className="mt-1 text-sm text-slate-500">
              Years of trade experience among specialists
            </p>
          </motion.div>

        </motion.div>

        {/* =========================================
            INDIA RICE PRODUCTION
        ========================================== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-12 items-start mb-10"
        >

          {/* Heading */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-9 h-[1px] bg-[#b08b2c]" />

              <span className="text-xs font-semibold tracking-[0.22em] uppercase text-[#b08b2c]">
                Rice Production
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#193d2f] leading-tight">
              India’s Rich Rice
              <span className="block text-[#b08b2c]">
                Heritage
              </span>
            </h2>
          </div>

          {/* Content */}
          <div className="text-sm sm:text-base leading-8 text-slate-600">
            <p>
              A gross calculation of rice production says that this
              country produces near about <strong>7.5 million tons</strong>
              in a year as well as exports approximately{" "}
              <strong>2.5 million tons</strong>.
            </p>

            <p className="mt-4">
              According to the Seeds Act, 1966, various species of
              Basmati are produced in India. The major regions where
              Basmati is produced in large amounts include Haryana,
              Jammu and Kashmir, Punjab, Uttarakhand and several other
              regions.
            </p>
          </div>

        </motion.div>

        {/* =========================================
            BASMATI VARIETIES
        ========================================== */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="rounded-3xl bg-white/70 border border-[#193d2f]/10 p-6 sm:p-8 lg:p-10 shadow-sm mb-10"
        >

          <motion.div variants={itemVariants} className="mb-7">

            <div className="flex items-center gap-3 mb-3">
              <Sprout size={19} className="text-[#b08b2c]" />

              <span className="text-xs font-semibold tracking-[0.22em] uppercase text-[#b08b2c]">
                Basmati Varieties
              </span>
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl text-[#193d2f]">
              Traditional Varieties Produced in India
            </h2>

          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">

            {basmatiTypes.map((item) => (
              <motion.div
                key={item}
                variants={itemVariants}
                whileHover={{ y: -3 }}
                className="
                  flex
                  items-center
                  gap-3
                  rounded-xl
                  border
                  border-[#193d2f]/10
                  bg-[#faf9f4]
                  px-4
                  py-3
                  transition-all
                  duration-300
                  hover:border-[#b08b2c]/40
                  hover:shadow-md
                "
              >
                <CheckCircle2
                  size={18}
                  className="text-[#b08b2c] shrink-0"
                />

                <span className="text-sm text-[#193d2f]">
                  {item}
                </span>
              </motion.div>
            ))}

          </div>
        </motion.div>

        {/* =========================================
            COMPANY INTRODUCTION
        ========================================== */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-10"
        >

          {/* Company */}
          <motion.div
            variants={itemVariants}
            className="rounded-3xl bg-[#193d2f] p-6 sm:p-8 text-white"
          >

            <div className="w-12 h-12 rounded-xl bg-[#c9d34f] text-[#193d2f] flex items-center justify-center mb-5">
              <Factory size={23} />
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl mb-4">
              A Name Built on Trust
            </h2>

            <p className="text-sm sm:text-base leading-7 text-white/80">
              We are pleased to introduce ourselves as a leading
              manufacturer and exporter of Premium Rice, whose name
              symbolizes trust and genuine quality among its satisfied
              customers worldwide.
            </p>

          </motion.div>

          {/* History */}
          <motion.div
            variants={itemVariants}
            className="rounded-3xl bg-white/80 border border-[#193d2f]/10 p-6 sm:p-8"
          >

            <div className="w-12 h-12 rounded-xl bg-[#b08b2c] text-white flex items-center justify-center mb-5">
              <CalendarDays size={23} />
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl text-[#193d2f] mb-4">
              A Legacy Since 1975
            </h2>

            <p className="text-sm sm:text-base leading-7 text-slate-600">
              The company was established in the year 1975 by
              Shree Jiwan Ram Jain. Since then, it has earned quite
              a name as a manufacturer of best quality rice over the
              years.
            </p>

          </motion.div>

        </motion.div>

        {/* =========================================
            GROWTH & TECHNOLOGY
        ========================================== */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="rounded-3xl bg-white/80 border border-[#193d2f]/10 p-6 sm:p-8 lg:p-10 mb-10"
        >

          <motion.div variants={itemVariants}>
            <div className="flex items-center gap-3 mb-4">
              <Factory size={20} className="text-[#b08b2c]" />

              <span className="text-xs font-semibold tracking-[0.22em] uppercase text-[#b08b2c]">
                Growth & Technology
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl text-[#193d2f] mb-5">
              Growing Through Innovation
            </h2>

            <p className="text-sm sm:text-base leading-8 text-slate-600">
              With a well thought-out strategy and a dynamic,
              progressive vision, the company has grown in stature
              and infrastructure, acquiring the latest technology
              and qualified manpower to deliver the best to its
              customers.
            </p>

            <p className="mt-4 text-sm sm:text-base leading-8 text-slate-600">
              The legacy is now continued forward by his sons.
              With its third generation, the company has established
              a good and reputable market share while continuing
              to believe in customer satisfaction.
            </p>
          </motion.div>

        </motion.div>

        {/* =========================================
            EXPERTISE + PACKAGING
        ========================================== */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-10"
        >

          {/* Expertise */}
          <motion.div
            variants={itemVariants}
            className="rounded-3xl bg-white/80 border border-[#193d2f]/10 p-6 sm:p-8"
          >

            <div className="w-12 h-12 rounded-xl bg-[#193d2f] text-[#c9d34f] flex items-center justify-center mb-5">
              <Wheat size={23} />
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl text-[#193d2f] mb-4">
              Expertise in Rice Processing
            </h2>

            <p className="text-sm sm:text-base leading-7 text-slate-600">
              The company has expertise in purchasing the best
              quality rice paddy at competitive rates and processing
              it with plants equipped with the latest technology.
            </p>

            <p className="mt-4 text-sm sm:text-base leading-7 text-slate-600">
              Operating in this area for more than 20 years,
              J.R. Rice India Pvt. Ltd. has a rich reservoir of
              specialized people, with working experience of more
              than 25 years in this trade.
            </p>

          </motion.div>

          {/* Packaging */}
          <motion.div
            variants={itemVariants}
            className="rounded-3xl bg-[#193d2f] p-6 sm:p-8 text-white"
          >

            <div className="w-12 h-12 rounded-xl bg-[#c9d34f] text-[#193d2f] flex items-center justify-center mb-5">
              <PackageCheck size={23} />
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl mb-4">
              Premium Packaging
            </h2>

            <p className="text-sm sm:text-base leading-7 text-white/80">
              The company has three rice variants in Premium Quality
              and Special Quality. Both are packed in tamper and
              moisture-proof Advanced Nitrogen Flushed Hydrogen packs.
            </p>

            <div className="flex flex-wrap gap-3 mt-5">

              <span className="px-4 py-2 rounded-full bg-white/10 text-sm">
                1 kg
              </span>

              <span className="px-4 py-2 rounded-full bg-white/10 text-sm">
                5 kg
              </span>

              <span className="px-4 py-2 rounded-full bg-white/10 text-sm">
                20 kg
              </span>

              <span className="px-4 py-2 rounded-full bg-white/10 text-sm">
                35 kg
              </span>

            </div>

            <p className="mt-5 text-sm text-white/70">
              Consumer packs are also supplied in 1 kg and 5 kg
              sizes based on consumer demand.
            </p>

          </motion.div>

        </motion.div>

        {/* =========================================
            FINAL MESSAGE
        ========================================== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="
            relative
            overflow-hidden
            rounded-3xl
            bg-[#b08b2c]
            p-7
            sm:p-10
            text-center
          "
        >

          {/* Decorative circle */}
          <div className="absolute -top-20 -right-20 w-48 h-48 rounded-full border border-white/20" />

          <div className="absolute -bottom-24 -left-16 w-48 h-48 rounded-full border border-white/20" />

          <div className="relative z-10">

            <Globe2
              size={30}
              className="mx-auto text-white mb-4"
            />

            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-white">
              A Promise of Quality
            </h2>

            <p className="mt-4 max-w-3xl mx-auto text-sm sm:text-base leading-7 text-white/90">
              We thank all our channel partners to be a part of this
              journey, and we promise to deliver good quality products.
            </p>

          </div>

        </motion.div>

      </div>
    </section>
  );
}