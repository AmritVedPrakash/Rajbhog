import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Sparkles,
  Leaf,
  Crown,
  Layers3,
  Star,
} from "lucide-react";

const MotionLink = motion.create(Link);

const categories = [
  {
    id: "01",
    title: "Flagship Brands",
    to: "/brands/flagship-brands",
    subtitle: "Our Core Brand Portfolio",
    icon: Crown,
    description:
      "Our Flagship Brands represent the core of our rice portfolio, bringing together established brands with carefully defined product ranges and distinct market identities.",
    points: [
      "Established brand identities",
      "Distinct rice product ranges",
      "Consistent quality positioning",
      "Premium and everyday choices",
    ],
    buttonText: "Explore Flagship Brands",
  },
  {
    id: "02",
    title: "Signature Collection",
    to: "/brands/signature-rice-collection",
    subtitle: "Our Distinctive Rice Collection",
    icon: Layers3,
    description:
      "Our Signature Collection brings together a diverse selection of distinctive rice brands, created to serve different preferences, occasions and consumer needs.",
    points: [
      "Distinctive brand names",
      "Traditional and premium varieties",
      "Wide consumer selection",
      "Everyday and special choices",
    ],
    buttonText: "Explore Signature Collection",
  },
];

const CategoryCard = ({ category }) => {
  const Icon = category.icon;

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 60,
        scale: 0.97,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={{
        once: false,
        amount: 0.2,
      }}
      transition={{
        duration: 0.75,
        type: "spring",
        stiffness: 80,
        damping: 17,
      }}
      className="group relative"
    >
      {/* Outer Glow */}
      <div
        className="
          pointer-events-none
          absolute -inset-3
          rounded-[36px]
          bg-[#c5a64b]/10
          opacity-0
          blur-2xl
          transition-opacity duration-500
          group-hover:opacity-100
        "
      />

      {/* Main Card */}
      <div
        className="
          relative
          min-h-[500px]
          overflow-hidden
          rounded-[32px]
          border border-[#b9a24a]/30
          bg-gradient-to-br
          from-[#f5f3d9]
          via-[#e9eab6]
          to-[#dbe477]
          p-7
          shadow-[0_18px_50px_rgba(40,60,30,0.10)]
          transition-all duration-500
          group-hover:-translate-y-2
          group-hover:shadow-[0_30px_70px_rgba(40,60,30,0.18)]
          sm:p-9
        "
      >
        {/* Decorative Number */}
        <span
          className="
            pointer-events-none
            absolute -right-2 -top-3
            font-serif
            text-[150px]
            font-bold
            leading-none
            text-[#284934]/[0.045]
          "
        >
          {category.id}
        </span>

        {/* Decorative Circle */}
        <div
          className="
            pointer-events-none
            absolute -right-20 top-24
            h-52 w-52
            rounded-full
            border border-[#b9a24a]/10
          "
        />

        <div
          className="
            pointer-events-none
            absolute -right-12 top-32
            h-36 w-36
            rounded-full
            border border-[#b9a24a]/10
          "
        />

        {/* Top Gold Line */}
        <div
          className="
            absolute left-9 top-0
            h-[3px] w-20
            rounded-full
            bg-[#b9a24a]
          "
        />

        {/* Icon */}
        <motion.div
          whileHover={{
            rotate: 5,
            scale: 1.05,
          }}
          className="
            relative z-10
            flex h-16 w-16
            items-center justify-center
            rounded-2xl
            border border-[#b9a24a]/30
            bg-[#284934]
            text-[#ead78b]
            shadow-[0_10px_25px_rgba(40,73,52,0.16)]
          "
        >
          <Icon size={28} strokeWidth={1.7} />
        </motion.div>

        {/* Category Number */}
        <div
          className="
            relative z-10
            mt-7
            flex items-center gap-2
            text-[10px]
            font-bold
            uppercase
            tracking-[0.2em]
            text-[#a9892d]
          "
        >
          <span>{category.id}</span>
          <span className="h-px w-10 bg-[#b9a24a]/60" />
          Category
        </div>

        {/* Title */}
        <h3
          className="
            relative z-10
            mt-3
            font-serif
            text-3xl
            font-semibold
            leading-tight
            text-[#263d2a]
            sm:text-4xl
          "
        >
          {category.title}
        </h3>

        {/* Subtitle */}
        <p
          className="
            relative z-10
            mt-2
            text-[11px]
            font-semibold
            uppercase
            tracking-[0.18em]
            text-[#a9892d]
          "
        >
          {category.subtitle}
        </p>

        {/* Divider */}
        <div className="relative z-10 my-6 flex items-center gap-3">
          <span className="h-px w-14 bg-[#b9a24a]/60" />

          <Star
            size={13}
            fill="currentColor"
            className="text-[#b9a24a]"
          />

          <span className="h-px flex-1 bg-[#b9a24a]/30" />
        </div>

        {/* Description */}
        <p
          className="
            relative z-10
            text-sm
            leading-7
            text-[#536053]
          "
        >
          {category.description}
        </p>

        {/* Points */}
        <div className="relative z-10 mt-6 space-y-3">
          {category.points.map((point, index) => (
            <div
              key={index}
              className="
                flex items-center gap-3
                text-sm
                text-[#3f5142]
              "
            >
              <span
                className="
                  flex h-6 w-6
                  shrink-0
                  items-center justify-center
                  rounded-full
                  bg-[#284934]
                  text-[#ead78b]
                "
              >
                <Leaf size={12} />
              </span>

              <span>{point}</span>
            </div>
          ))}
        </div>

        {/* Button */}
        <MotionLink
          to={category.to}
          whileHover={{
            scale: 1.03,
          }}
          whileTap={{
            scale: 0.97,
          }}
          className="
            relative z-10
            mt-8
            flex items-center gap-2
            rounded-full
            bg-[#284934]
            px-5 py-3
            text-xs
            font-semibold
            text-[#ead78b]
            shadow-[0_8px_20px_rgba(40,73,52,0.18)]
            transition-all duration-300
            hover:bg-[#1f3828]
          "
        >
          {category.buttonText}
          <ArrowUpRight size={15} />
        </MotionLink>
      </div>
    </motion.div>
  );
};

export default function OurBrandCategories() {
  return (
    <section className="relative overflow-hidden bg-[#f8f8ef] py-20 md:py-28">
      {/* Background Glow */}
      <div
        className="
          pointer-events-none
          absolute -left-40 top-20
          h-96 w-96
          rounded-full
          bg-[#dbe477]/20
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute -right-40 bottom-0
          h-96 w-96
          rounded-full
          bg-[#c5a64b]/10
          blur-3xl
        "
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* ───────────────── Header ───────────────── */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: false,
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
          }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          {/* Pill */}
          <div
            className="
              mx-auto mb-5
              flex w-fit items-center gap-2
              rounded-full
              border border-[#b9a24a]/30
              bg-[#284934]
              px-4 py-2
              text-[11px]
              font-semibold
              uppercase
              tracking-[0.18em]
              text-[#ead78b]
            "
          >
            <Sparkles size={13} />
            Our Brand Portfolio
          </div>

          {/* Heading */}
          <h2
            className="
              font-serif
              text-4xl
              font-semibold
              leading-tight
              text-[#263d2a]
              sm:text-5xl
            "
          >
            Two Categories,{" "}
            <span className="text-[#a9892d]">
              One Commitment
            </span>
          </h2>

          {/* Divider */}
          <div className="mx-auto my-5 flex items-center justify-center gap-3">
            <span className="h-px w-16 bg-[#b9a24a]/60" />

            <Star
              size={14}
              fill="currentColor"
              className="text-[#b9a24a]"
            />

            <span className="h-px w-16 bg-[#b9a24a]/60" />
          </div>

          {/* Intro */}
          <p
            className="
              mx-auto
              max-w-2xl
              text-sm
              leading-7
              text-[#536053]
              sm:text-base
            "
          >
            Our rice portfolio is thoughtfully organized
            into two distinct categories, each designed to
            offer a clear and diverse brand experience.
          </p>
        </motion.div>

        {/* ───────────────── Category Cards ───────────────── */}
        <div className="grid grid-cols-1 gap-7 lg:grid-cols-2 lg:gap-8">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
            />
          ))}
        </div>

        {/* ───────────────── Bottom Statement ───────────────── */}
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
            once: false,
          }}
          transition={{
            duration: 0.7,
            delay: 0.2,
          }}
          className="
            mx-auto mt-14
            max-w-3xl
            text-center
          "
        >
          <div
            className="
              inline-flex
              items-center gap-2
              rounded-full
              border border-[#b9a24a]/25
              bg-[#284934]/5
              px-5 py-2.5
              text-xs
              font-medium
              text-[#536053]
            "
          >
            <Leaf
              size={14}
              className="text-[#71884a]"
            />
            Distinct brands. Diverse choices. Trusted quality.
          </div>
        </motion.div>
      </div>
    </section>
  );
}