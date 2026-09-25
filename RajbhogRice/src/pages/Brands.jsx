import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Sparkles,
  Leaf,
  Star,
  X,
  CheckCircle2,
  Wheat,
  Utensils,
  Award,
} from "lucide-react";

// =====================================================
// IMPORT YOUR 10 BRAND IMAGES
// =====================================================

import Brand1 from "../assets/home/rajbhogrice1.png";
import Brand2 from "../assets/home/rajbhogrice2.png";
import Brand3 from "../assets/home/rajbhogrice3.png";
import Brand4 from "../assets/home/brand4.png";
import Brand5 from "../assets/home/brand5.png";
import Brand6 from "../assets/home/brand6.png";
import Brand7 from "../assets/home/brand7.png";
import Brand8 from "../assets/home/brand8.png";
import Brand9 from "../assets/home/brand9.png";
import Brand10 from "../assets/home/brand10.png";

// =====================================================
// BRAND DATA
// =====================================================

const brands = [
  {
    name: "Rajbhog Classic",
    image: Brand1,
    tag: "Premium Basmati",
    description:
      "Elegant long-grain basmati with a naturally rich aroma and beautifully fluffy texture.",
    number: "01",

    details:
      "Rajbhog Classic is a carefully selected premium basmati rice created for families who appreciate authentic aroma, elegant grains and consistently delicious results.",
    grainType: "Extra Long Basmati",
    aroma: "Naturally Aromatic",
    texture: "Light & Fluffy",
    bestFor: "Daily premium meals, pulao & special dinners",
    highlights: [
      "Long and elegant grains",
      "Naturally aromatic",
      "Fluffy after cooking",
      "Carefully selected quality",
    ],
  },

  {
    name: "Rajbhog Biryani",
    image: Brand2,
    tag: "Aromatic Rice",
    description:
      "Carefully selected grains designed to bring authentic aroma, flavour and presentation to every biryani.",
    number: "02",

    details:
      "Rajbhog Biryani is specially selected for dishes where aroma and grain separation matter. Its elegant appearance makes every biryani look and taste special.",
    grainType: "Long Grain Basmati",
    aroma: "Rich & Fragrant",
    texture: "Firm & Separate",
    bestFor: "Biryani, pulao & festive dishes",
    highlights: [
      "Excellent grain separation",
      "Rich natural fragrance",
      "Ideal for layered biryani",
      "Beautiful presentation",
    ],
  },

  {
    name: "Rajbhog Everyday",
    image: Brand3,
    tag: "Everyday Choice",
    description:
      "A versatile rice variety made for delicious everyday meals, family gatherings and traditional recipes.",
    number: "03",

    details:
      "Rajbhog Everyday is designed to be a dependable choice for regular family meals. It brings balanced taste, satisfying texture and reliable cooking performance to your kitchen.",
    grainType: "Premium Everyday Rice",
    aroma: "Mild & Pleasant",
    texture: "Soft & Fluffy",
    bestFor: "Daily meals, dal-rice & home cooking",
    highlights: [
      "Perfect for everyday cooking",
      "Easy to prepare",
      "Pleasant natural taste",
      "Suitable for family meals",
    ],
  },

  {
    name: "Rajbhog Premium",
    image: Brand4,
    tag: "Extra Long Grain",
    description:
      "Premium grains with exceptional length, delicate aroma and a refined taste for special occasions.",
    number: "04",

    details:
      "Rajbhog Premium brings a refined rice experience with beautifully elongated grains, delicate fragrance and an elegant cooked appearance.",
    grainType: "Extra Long Basmati",
    aroma: "Delicate & Elegant",
    texture: "Fluffy & Non-Sticky",
    bestFor: "Special dinners, pulao & celebrations",
    highlights: [
      "Extra-long grains",
      "Elegant cooked appearance",
      "Delicate aroma",
      "Premium selection",
    ],
  },

  {
    name: "Rajbhog Select",
    image: Brand5,
    tag: "Selected Quality",
    description:
      "Finely selected rice grains offering consistency, natural flavour and a satisfying cooking experience.",
    number: "05",

    details:
      "Rajbhog Select focuses on consistency and dependable quality. Every grain is selected to provide a balanced combination of flavour, appearance and texture.",
    grainType: "Selected Long Grain",
    aroma: "Fresh & Natural",
    texture: "Balanced & Fluffy",
    bestFor: "Family meals, pulao & rice bowls",
    highlights: [
      "Carefully selected grains",
      "Consistent cooking quality",
      "Natural flavour",
      "Versatile for many recipes",
    ],
  },

  {
    name: "Rajbhog Royal",
    image: Brand6,
    tag: "Royal Collection",
    description:
      "A sophisticated rice collection created for those who appreciate premium quality and authentic taste.",
    number: "06",

    details:
      "Rajbhog Royal is inspired by the elegance of traditional Indian dining. It combines premium grain selection with an aromatic and sophisticated eating experience.",
    grainType: "Premium Basmati",
    aroma: "Rich & Elegant",
    texture: "Soft & Fluffy",
    bestFor: "Royal meals, parties & celebrations",
    highlights: [
      "Premium grain selection",
      "Rich aroma",
      "Elegant presentation",
      "Perfect for special occasions",
    ],
  },

  {
    name: "Rajbhog Heritage",
    image: Brand7,
    tag: "Traditional Taste",
    description:
      "Inspired by generations of rice expertise, bringing traditional goodness to modern dining tables.",
    number: "07",

    details:
      "Rajbhog Heritage celebrates the timeless taste of traditional Indian rice. It brings together familiar flavours and modern quality standards for today's families.",
    grainType: "Traditional Long Grain",
    aroma: "Traditional & Warm",
    texture: "Soft & Satisfying",
    bestFor: "Traditional recipes & family meals",
    highlights: [
      "Inspired by traditional taste",
      "Comforting texture",
      "Natural flavour",
      "Great for Indian cuisine",
    ],
  },

  {
    name: "Rajbhog Supreme",
    image: Brand8,
    tag: "Superior Grain",
    description:
      "Distinctive grains selected for their aroma, appearance and excellent texture after cooking.",
    number: "08",

    details:
      "Rajbhog Supreme is crafted for consumers looking for a superior rice experience. Its distinctive grains provide an attractive appearance and enjoyable texture.",
    grainType: "Superior Long Grain",
    aroma: "Distinctive & Aromatic",
    texture: "Light & Separate",
    bestFor: "Pulao, biryani & premium meals",
    highlights: [
      "Superior grain selection",
      "Excellent appearance",
      "Aromatic cooking experience",
      "Light and separate grains",
    ],
  },

  {
    name: "Rajbhog Gold",
    image: Brand9,
    tag: "Premium Collection",
    description:
      "A premium selection offering beautiful grains, delicate fragrance and a naturally rich taste.",
    number: "09",

    details:
      "Rajbhog Gold represents a premium collection designed for beautiful presentation and rich taste. It is a refined choice for memorable meals.",
    grainType: "Premium Long Grain",
    aroma: "Delicate Fragrance",
    texture: "Fluffy & Smooth",
    bestFor: "Festive meals, parties & celebrations",
    highlights: [
      "Premium quality grains",
      "Delicate fragrance",
      "Smooth texture",
      "Beautiful cooked appearance",
    ],
  },

  {
    name: "Rajbhog Special",
    image: Brand10,
    tag: "Special Selection",
    description:
      "A carefully crafted selection for celebrations, fine meals and moments worth making memorable.",
    number: "10",

    details:
      "Rajbhog Special is created for occasions that deserve something extra. Carefully selected grains bring together flavour, aroma and presentation.",
    grainType: "Special Long Grain",
    aroma: "Rich & Inviting",
    texture: "Fluffy & Elegant",
    bestFor: "Celebrations, guests & special occasions",
    highlights: [
      "Specially selected grains",
      "Rich aroma",
      "Elegant presentation",
      "Perfect for celebrations",
    ],
  },
];

// =====================================================
// BRAND DETAIL MODAL
// =====================================================

function BrandDetailsModal({ brand, onClose }) {
  return (
    <AnimatePresence>
      {brand && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-[#142218]/70 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Modal */}
          <motion.div
            initial={{
              opacity: 0,
              y: 50,
              scale: 0.92,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 40,
              scale: 0.94,
            }}
            transition={{
              duration: 0.45,
              ease: [0.16, 1, 0.3, 1],
            }}
            onClick={(e) => e.stopPropagation()}
            className="
              relative
              z-10
              w-full
              max-w-5xl
              max-h-[92vh]
              overflow-y-auto
              rounded-[30px]
              sm:rounded-[38px]
              bg-[#f8f8ef]
              shadow-[0_35px_100px_rgba(0,0,0,0.35)]
              border
              border-[#c5aa4c]/40
            "
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              aria-label="Close brand details"
              className="
                absolute
                right-4
                top-4
                sm:right-6
                sm:top-6
                z-30
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                border
                border-[#b9a24a]/30
                bg-white/80
                text-[#30452e]
                shadow-lg
                backdrop-blur-md
                transition-all
                duration-300
                hover:rotate-90
                hover:bg-[#30452e]
                hover:text-white
              "
            >
              <X size={21} />
            </button>

            {/* Top Decorative Line */}
            <div className="absolute top-0 left-8 right-8 h-[3px] rounded-full bg-gradient-to-r from-transparent via-[#b69a35] to-transparent" />

            <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
              {/* =====================================
                  IMAGE SIDE
              ====================================== */}

              <div
                className="
                  relative
                  flex
                  min-h-[350px]
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-t-[30px]
                  bg-gradient-to-br
                  from-[#eef0c9]
                  via-[#e6e8b7]
                  to-[#d5dd8a]
                  p-8
                  sm:min-h-[430px]
                  sm:p-12
                  lg:rounded-l-[38px]
                  lg:rounded-tr-none
                "
              >
                {/* Background Glow */}
                <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/40 blur-3xl" />

                {/* Decorative circles */}
                <div className="absolute -left-16 -top-16 h-40 w-40 rounded-full border border-[#b69a35]/20" />
                <div className="absolute -bottom-20 -right-20 h-52 w-52 rounded-full border border-[#b69a35]/20" />

                {/* Number */}
                <span
                  className="
                    absolute
                    left-6
                    top-5
                    font-serif
                    text-7xl
                    font-bold
                    text-[#30452e]/10
                  "
                >
                  {brand.number}
                </span>

                <motion.img
                  src={brand.image}
                  alt={brand.name}
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{
                    delay: 0.15,
                    duration: 0.6,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="
                    relative
                    z-10
                    max-h-[300px]
                    max-w-[88%]
                    object-contain
                    drop-shadow-[0_30px_35px_rgba(0,0,0,0.25)]
                    sm:max-h-[370px]
                  "
                />

                {/* Bottom badge */}
                <div
                  className="
                    absolute
                    bottom-6
                    left-1/2
                    z-20
                    -translate-x-1/2
                    whitespace-nowrap
                    rounded-full
                    border
                    border-[#b79b3c]/30
                    bg-white/70
                    px-4
                    py-2
                    text-xs
                    font-semibold
                    tracking-wider
                    text-[#59622f]
                    shadow-lg
                    backdrop-blur-md
                  "
                >
                  PREMIUM RICE COLLECTION
                </div>
              </div>

              {/* =====================================
                  DETAILS SIDE
              ====================================== */}

              <div className="p-7 sm:p-10 lg:p-12">
                {/* Tag */}
                <div
                  className="
                    mb-5
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-[#b79b3c]/30
                    bg-[#e9ebc4]/70
                    px-4
                    py-2
                  "
                >
                  <Sparkles size={14} className="text-[#947522]" />

                  <span
                    className="
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.16em]
                      text-[#59622f]
                    "
                  >
                    {brand.tag}
                  </span>
                </div>

                {/* Title */}
                <h2
                  className="
                    font-serif
                    text-3xl
                    font-semibold
                    leading-tight
                    text-[#263c29]
                    sm:text-4xl
                    lg:text-5xl
                  "
                >
                  {brand.name}
                </h2>

                {/* Divider */}
                <div className="mt-5 flex items-center gap-3">
                  <div className="h-[1px] w-14 bg-[#aa8b2d]" />

                  <div className="h-2 w-2 rotate-45 bg-[#aa8b2d]" />

                  <div className="h-[1px] w-14 bg-[#aa8b2d]" />
                </div>

                {/* Detailed Description */}
                <p className="mt-6 text-sm leading-7 text-[#536053] sm:text-base">
                  {brand.details}
                </p>

                {/* Info Grid */}
                <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {/* Grain */}
                  <div
                    className="
                      rounded-2xl
                      border
                      border-[#b9a24a]/20
                      bg-[#f1f1d9]
                      p-4
                    "
                  >
                    <Wheat size={19} className="mb-3 text-[#9a7d25]" />

                    <p className="text-[10px] font-bold uppercase tracking-wider text-[#777e62]">
                      Grain
                    </p>

                    <p className="mt-1 text-xs font-semibold leading-5 text-[#30452e]">
                      {brand.grainType}
                    </p>
                  </div>

                  {/* Aroma */}
                  <div
                    className="
                      rounded-2xl
                      border
                      border-[#b9a24a]/20
                      bg-[#f1f1d9]
                      p-4
                    "
                  >
                    <Sparkles size={19} className="mb-3 text-[#9a7d25]" />

                    <p className="text-[10px] font-bold uppercase tracking-wider text-[#777e62]">
                      Aroma
                    </p>

                    <p className="mt-1 text-xs font-semibold leading-5 text-[#30452e]">
                      {brand.aroma}
                    </p>
                  </div>

                  {/* Texture */}
                  <div
                    className="
                      rounded-2xl
                      border
                      border-[#b9a24a]/20
                      bg-[#f1f1d9]
                      p-4
                    "
                  >
                    <Leaf size={19} className="mb-3 text-[#55764f]" />

                    <p className="text-[10px] font-bold uppercase tracking-wider text-[#777e62]">
                      Texture
                    </p>

                    <p className="mt-1 text-xs font-semibold leading-5 text-[#30452e]">
                      {brand.texture}
                    </p>
                  </div>

                  {/* Best For */}
                  <div
                    className="
                      rounded-2xl
                      border
                      border-[#b9a24a]/20
                      bg-[#f1f1d9]
                      p-4
                    "
                  >
                    <Utensils size={19} className="mb-3 text-[#9a7d25]" />

                    <p className="text-[10px] font-bold uppercase tracking-wider text-[#777e62]">
                      Best For
                    </p>

                    <p className="mt-1 text-xs font-semibold leading-5 text-[#30452e]">
                      {brand.bestFor}
                    </p>
                  </div>
                </div>

                {/* Quality Highlights */}
                <div className="mt-8">
                  <div className="mb-4 flex items-center gap-2">
                    <Award size={19} className="text-[#a18328]" />

                    <h3 className="font-serif text-xl font-semibold text-[#30452e]">
                      Quality Highlights
                    </h3>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    {brand.highlights.map((highlight, index) => (
                      <motion.div
                        key={highlight}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: 0.25 + index * 0.08,
                        }}
                        className="
                          flex
                          items-center
                          gap-3
                          rounded-xl
                          border
                          border-[#c5aa4c]/20
                          bg-white/60
                          px-4
                          py-3
                        "
                      >
                        <CheckCircle2
                          size={17}
                          className="shrink-0 text-[#55764f]"
                        />

                        <span className="text-sm text-[#465244]">
                          {highlight}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Bottom Message */}
                <div
                  className="
                    mt-8
                    flex
                    items-center
                    gap-3
                    rounded-2xl
                    border
                    border-[#c5aa4c]/25
                    bg-[#e9ebc4]/50
                    px-5
                    py-4
                  "
                >
                  <Leaf
                    size={20}
                    className="shrink-0 text-[#55764f]"
                  />

                  <p className="text-sm leading-6 text-[#40513f]">
                    Carefully selected grains crafted to bring purity,
                    flavour and quality to your dining table.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// =====================================================
// ANIMATED BRAND CARD
// =====================================================

function BrandCard({ brand, index, onClick }) {
  const [isTouched, setIsTouched] = useState(false);

  const handleCardClick = () => {
    setIsTouched(true);

    // Small delay so user can see the color change
    setTimeout(() => {
      onClick();
    }, 180);
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 70,
        scale: 0.94,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={{
        once: false,
        amount: 0.15,
      }}
      transition={{
        duration: 0.75,
        delay: index * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group relative cursor-pointer"
      onClick={handleCardClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          handleCardClick();
        }
      }}
    >
      {/* ==========================================
          IMAGE AREA
      ========================================== */}

      <motion.div
        animate={{
          y: [0, -7, 0],
        }}
        transition={{
          duration: 4 + index * 0.15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          relative
          z-20
          flex
          h-[260px]
          items-end
          justify-center
          pointer-events-none
          sm:h-[290px]
          lg:h-[310px]
        "
      >
        {/* Glow */}

        <div
          className={`
            absolute
            bottom-6
            left-1/2
            h-20
            w-44
            -translate-x-1/2
            rounded-full
            blur-3xl
            transition-all
            duration-500

            ${
              isTouched
                ? "bg-[#a78b2d]/40 scale-125"
                : "bg-[#c5a64b]/20"
            }

            group-hover:bg-[#b69a35]/35
            group-hover:scale-125
          `}
        />

        {/* Shadow */}

        <div
          className={`
            absolute
            bottom-2
            left-1/2
            h-5
            -translate-x-1/2
            rounded-[50%]
            bg-black/15
            blur-xl
            transition-all
            duration-500

            ${
              isTouched
                ? "w-36 bg-black/25"
                : "w-28"
            }

            group-hover:w-36
            group-hover:bg-black/20
          `}
        />

        {/* Brand Image */}

        <img
          src={brand.image}
          alt={brand.name}
          className="
            relative
            z-10
            max-h-[275px]
            max-w-[84%]
            object-contain
            drop-shadow-[0_25px_30px_rgba(0,0,0,0.22)]
            transition-transform
            duration-700
            group-hover:scale-[1.06]
            sm:max-h-[300px]
            lg:max-h-[325px]
          "
        />
      </motion.div>

      {/* ==========================================
          BRAND CARD
      ========================================== */}

      <motion.div
        whileHover={{
          y: -8,
        }}
        transition={{
          duration: 0.3,
        }}
        className={`
          relative
          z-10
          -mt-8
          min-h-[315px]
          rounded-[28px]
          border
          px-5
          pb-7
          pt-12
          text-center
          transition-all
          duration-500

          ${
            isTouched
              ? `
                border-[#a78b2d]/70
                from-[#e5e8b8]
                via-[#dce2a0]
                to-[#c6d66a]
                shadow-[0_30px_75px_rgba(60,75,25,0.30)]
              `
              : `
                border-[#b9a24a]/30
                from-[#f5f3d9]
                via-[#e9eab6]
                to-[#dbe477]
                shadow-[0_18px_50px_rgba(40,60,30,0.12)]
              `
          }

          bg-gradient-to-br

          hover:border-[#a78b2d]/60
          hover:from-[#eef0c8]
          hover:via-[#e2e5a8]
          hover:to-[#ccd96c]
          hover:shadow-[0_30px_75px_rgba(60,75,25,0.25)]
        `}
      >
        {/* =====================================
            MOBILE ACTIVE GLOW
        ====================================== */}

        <div
          className={`
            pointer-events-none
            absolute
            inset-0
            rounded-[28px]
            bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,255,0.7),transparent_55%)]
            transition-opacity
            duration-500

            ${
              isTouched
                ? "opacity-100"
                : "opacity-0"
            }

            group-hover:opacity-100
          `}
        />

        {/* Top Gold Line */}

        <div
          className="
            absolute
            left-8
            right-8
            top-0
            h-[2px]
            bg-gradient-to-r
            from-transparent
            via-[#b69a35]
            to-transparent
            transition-all
            duration-500
            group-hover:left-4
            group-hover:right-4
          "
        />

        {/* Number */}

        <span
          className={`
            absolute
            left-5
            top-4
            font-serif
            text-4xl
            font-bold
            transition-colors
            duration-500

            ${
              isTouched
                ? "text-[#30452e]/25"
                : "text-[#30452e]/10"
            }

            group-hover:text-[#30452e]/20
          `}
        >
          {brand.number}
        </span>

        {/* Arrow */}

        <div
          className={`
            absolute
            right-5
            top-5
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-full
            bg-white/50
            text-[#66571e]
            transition-all
            duration-300

            ${
              isTouched
                ? "translate-y-0 opacity-100"
                : "translate-y-1 opacity-0"
            }

            group-hover:translate-y-0
            group-hover:opacity-100
          `}
        >
          <ArrowUpRight size={17} />
        </div>

        {/* Tag */}

        <div
          className={`
            relative
            mb-4
            inline-flex
            items-center
            gap-2
            rounded-full
            border
            border-[#b79b3c]/30
            px-3.5
            py-1.5
            transition-all
            duration-300

            ${
              isTouched
                ? "bg-white/65"
                : "bg-white/35"
            }

            group-hover:bg-white/55
          `}
        >
          <Sparkles
            size={13}
            className="text-[#947522]"
          />

          <span
            className="
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.12em]
              text-[#59622f]
              sm:text-xs
            "
          >
            {brand.tag}
          </span>
        </div>

        {/* Title */}

        <h3
          className={`
            relative
            mb-3
            font-serif
            text-2xl
            font-semibold
            transition-colors
            duration-300
            sm:text-[27px]

            ${
              isTouched
                ? "text-[#1e3524]"
                : "text-[#263c29]"
            }

            group-hover:text-[#1f3525]
          `}
        >
          {brand.name}
        </h3>

        {/* Divider */}

        <div
          className="
            relative
            mb-5
            flex
            items-center
            justify-center
            gap-2
          "
        >
          <div className="h-[1px] w-8 bg-[#aa8b2d]" />

          <div className="h-1.5 w-1.5 rotate-45 bg-[#aa8b2d]" />

          <div className="h-[1px] w-8 bg-[#aa8b2d]" />
        </div>

        {/* Description */}

        <p
          className="
            relative
            mx-auto
            max-w-sm
            text-sm
            leading-6
            text-[#3e4b3c]/80
            sm:text-[15px]
          "
        >
          {brand.description}
        </p>

        {/* Bottom */}

        <div
          className="
            relative
            mt-5
            flex
            items-center
            justify-center
            gap-2
            text-sm
            font-semibold
            text-[#66571e]
          "
        >
          <Leaf size={15} />

          <span>View Brand Details</span>

          <ArrowUpRight
            size={17}
            className="
              transition-all
              duration-300
              group-hover:translate-x-1
              group-hover:-translate-y-1
            "
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

// =====================================================
// MAIN BRANDS COMPONENT
// =====================================================

export default function Brands() {
  const [selectedBrand, setSelectedBrand] = useState(null);

  const openBrand = (brand) => {
    setSelectedBrand(brand);
    document.body.style.overflow = "hidden";
  };

  const closeBrand = () => {
    setSelectedBrand(null);
    document.body.style.overflow = "";
  };

  return (
    <>
      <section
        className="
          relative
          w-full
          overflow-hidden
          bg-[#f8f8ef]
        "
      >
        {/* ==========================================
            BACKGROUND
        ========================================== */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
          "
        >
          {/* Center Glow */}

          <div
            className="
              absolute
              left-1/2
              top-20
              h-[600px]
              w-[600px]
              -translate-x-1/2
              rounded-full
              bg-[#d4dd87]/20
              blur-[120px]
            "
          />

          {/* Left Glow */}

          <div
            className="
              absolute
              -left-40
              top-[35%]
              h-[450px]
              w-[450px]
              rounded-full
              bg-[#d8e29b]/15
              blur-[100px]
            "
          />

          {/* Right Glow */}

          <div
            className="
              absolute
              -right-40
              bottom-[10%]
              h-[450px]
              w-[450px]
              rounded-full
              bg-[#c9d87d]/15
              blur-[100px]
            "
          />
        </div>

        {/* ==========================================
            CONTENT
        ========================================== */}

        <div
          className="
            relative
            z-10
            mx-auto
            max-w-7xl
            px-5
            py-20
            sm:px-8
            sm:py-24
            lg:px-10
            lg:py-28
          "
        >
          {/* ========================================
              HEADER
          ======================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 45,
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
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              mx-auto
              mb-14
              max-w-3xl
              text-center
              lg:mb-20
            "
          >
            {/* Label */}

            <div
              className="
                mb-5
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-[#284934]
                px-4
                py-2
                shadow-lg
              "
            >
              <Star
                size={14}
                className="text-[#d8be61]"
                fill="currentColor"
              />

              <span
                className="
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.25em]
                  text-[#ead78b]
                  sm:text-xs
                "
              >
                Our Brands
              </span>
            </div>

            {/* Heading */}

            <h2
              className="
                font-serif
                text-4xl
                font-semibold
                leading-[1.08]
                text-[#263d2a]
                sm:text-5xl
                md:text-6xl
              "
            >
              Discover Our

              <span
                className="
                  mt-1
                  block
                  text-[#a9892d]
                "
              >
                Premium Rice Brands
              </span>
            </h2>

            {/* Divider */}

            <div
              className="
                mt-6
                flex
                items-center
                justify-center
                gap-3
              "
            >
              <div
                className="
                  h-[1px]
                  w-16
                  bg-[#b49a42]
                  sm:w-24
                "
              />

              <div
                className="
                  h-2.5
                  w-2.5
                  rotate-45
                  bg-[#b49a42]
                "
              />

              <div
                className="
                  h-[1px]
                  w-16
                  bg-[#b49a42]
                  sm:w-24
                "
              />
            </div>

            {/* Description */}

            <p
              className="
                mt-6
                text-sm
                leading-7
                text-[#536053]
                sm:text-base
                md:text-lg
              "
            >
              Explore our collection of carefully crafted rice brands,
              created with purity, tradition and uncompromising quality
              for every occasion.
            </p>

            {/* Small Hint */}

            <div className="mt-5 flex items-center justify-center gap-2 text-xs font-medium text-[#68715e]">
              <ArrowUpRight size={14} />
              <span>Click any brand to explore its details</span>
            </div>
          </motion.div>

          {/* ========================================
              10 BRAND CARDS
          ======================================== */}

          <div
            className="
              grid
              grid-cols-1
              items-start
              gap-x-6
              gap-y-12
              sm:grid-cols-2
              lg:grid-cols-3
              lg:gap-x-8
              lg:gap-y-16
              xl:grid-cols-4
            "
          >
            {brands.map((brand, index) => (
              <BrandCard
                key={brand.name}
                brand={brand}
                index={index}
                onClick={() => openBrand(brand)}
              />
            ))}
          </div>

          {/* ========================================
              BOTTOM MESSAGE
          ======================================== */}

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
              duration: 0.8,
            }}
            className="
              mt-16
              flex
              justify-center
              lg:mt-20
            "
          >
            <div
              className="
                flex
                items-center
                gap-3
                rounded-full
                border
                border-[#c5aa4c]/30
                bg-white/60
                px-5
                py-3
                backdrop-blur-md
              "
            >
              <Leaf size={18} className="text-[#55764f]" />

              <span
                className="
                  text-sm
                  font-medium
                  text-[#40513f]
                "
              >
                Pure grains. Royal taste. Trusted quality.
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ==========================================
          BRAND DETAIL POPUP
      ========================================== */}

      <BrandDetailsModal
        brand={selectedBrand}
        onClose={closeBrand}
      />
    </>
  );
}