import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  Award,
  CheckCircle2,
  Leaf,
  Sparkles,
  Star,
  Utensils,
  Wheat,
  X,
} from "lucide-react";

// =====================================================
// PAKEEZA PRODUCT IMAGES
// =====================================================
// Images:
// ../../assets/brand/Pakeeza/

import Excellent1121 from "../../assets/brand/Pakeeza/excellent-1121.png";
import Premium1121 from "../../assets/brand/Pakeeza/premium-1121.png";
import Royal1121 from "../../assets/brand/Pakeeza/royal-1121.png";
import Special1121 from "../../assets/brand/Pakeeza/special-1121.png";

// =====================================================
// PRODUCT DATA
// =====================================================

const products = [
  {
    name: "Excellent 1121",
    fullName: "PAKEEZA EXCELLENT 1121 BASMATI RICE",
    image: Excellent1121,
    tag: "Premium Selection",
    description: "Extra-long grains with exceptional aroma",
    number: "01",
    details:
      "Pakeeza Excellent 1121 Basmati Rice represents the quality-focused offering within the Pakeeza range. It is positioned for consumers and buyers seeking an excellent-grade Basmati rice for traditional Indian meals, household cooking and foodservice requirements. With its refined presentation and Pakeeza brand identity, it provides a dependable option for retailers and distributors serving the Indian and international Basmati rice market.",
    riceType: "1121 Basmati Rice",
    grade: "Excellent",
    positioning: "Quality-focused traditional Basmati",
    bestFor: "Retailers, households, restaurants, distributors and foodservice",
    packs: "10 kg / 25 kg",
    websiteHighlight:
      "An excellent-grade 1121 Basmati rice for traditional meals and dependable everyday cooking.",
    highlights: [
      "Quality-focused offering within the Pakeeza range",
      "Excellent-grade 1121 Basmati rice",
      "Suitable for traditional meals and household cooking",
      "For retailers, distributors and foodservice",
    ],
    hidden: {
      x: -120,
      y: 50,
      rotate: -6,
      scale: 0.9,
      opacity: 0,
    },
  },

  {
    name: "Premium 1121",
    fullName: "PAKEEZA PREMIUM 1121 BASMATI RICE",
    image: Premium1121,
    tag: "Premium Quality",
    description: "Long aromatic grains with rich taste",
    number: "02",
    details:
      "Pakeeza Premium 1121 Basmati Rice is positioned for consumers and buyers looking for a premium Basmati selection with a refined brand presentation. It is suited to traditional rice preparations, family meals and premium retail requirements, while also offering a suitable proposition for distributors and foodservice buyers seeking an Indian Basmati product.",
    riceType: "1121 Basmati Rice",
    grade: "Premium",
    positioning: "Premium traditional Basmati",
    bestFor: "Premium retail, households, restaurants, distributors and foodservice",
    packs: "10 kg / 25 kg",
    websiteHighlight:
      "A premium 1121 Basmati selection combining refined presentation with traditional Indian rice appeal.",
    highlights: [
      "Premium 1121 Basmati selection",
      "Refined Pakeeza brand presentation",
      "Suitable for traditional preparations and family meals",
      "For premium retail, distributors and foodservice",
    ],
    hidden: {
      x: 0,
      y: 110,
      rotate: 0,
      scale: 0.9,
      opacity: 0,
    },
  },

  {
    name: "Royal 1121",
    fullName: "PAKEEZA ROYAL 1121 BASMATI RICE",
    image: Royal1121,
    tag: "Royal Selection",
    description: "Elegant grains crafted for royal meals",
    number: "03",
    details:
      "Pakeeza Royal 1121 Basmati Rice represents the more elevated positioning within the Pakeeza portfolio. Its Royal grade is suited to buyers seeking a premium-oriented Basmati selection for special meals, traditional cuisine and higher-value retail markets. It provides distributors and foodservice businesses with an additional premium option within the Pakeeza range.",
    riceType: "1121 Basmati Rice",
    grade: "Royal",
    positioning: "Royal / Premium traditional Basmati",
    bestFor:
      "Premium retailers, restaurants, foodservice, distributors and international markets",
    packs: "10 kg / 25 kg",
    websiteHighlight:
      "A royal 1121 Basmati selection created for premium meals and distinguished traditional cuisine.",
    highlights: [
      "Elevated Royal positioning within the Pakeeza portfolio",
      "Premium-oriented 1121 Basmati selection",
      "Suitable for special meals and traditional cuisine",
      "For premium retail, foodservice and international markets",
    ],
    hidden: {
      x: 120,
      y: 50,
      rotate: 6,
      scale: 0.9,
      opacity: 0,
    },
  },

  {
    name: "Special 1121 Basmati",
    fullName: "PAKEEZA SPECIAL 1121 BASMATI RICE",
    image: Special1121,
    tag: "Special Basmati",
    description: "Delicious basmati for special occasions",
    number: "04",
    details:
      "Pakeeza Special 1121 Basmati Rice provides a differentiated grade within the Pakeeza portfolio. It is designed for buyers seeking a special Basmati selection suitable for traditional meals, household consumption and foodservice applications. Its positioning gives retailers and distributors flexibility when serving different customer preferences within the premium traditional Basmati segment.",
    riceType: "1121 Basmati Rice",
    grade: "Special",
    positioning: "Special-grade traditional Basmati",
    bestFor: "Retailers, households, restaurants, distributors and foodservice",
    packs: "10 kg / 25 kg",
    websiteHighlight:
      "A special-grade 1121 Basmati rice for traditional meals and versatile foodservice use.",
    highlights: [
      "Differentiated grade within the Pakeeza portfolio",
      "Special 1121 Basmati selection",
      "Suitable for traditional meals and household consumption",
      "For retail, distribution and foodservice",
    ],
    hidden: {
      x: 0,
      y: 110,
      rotate: 0,
      scale: 0.9,
      opacity: 0,
    },
  },
];

// =====================================================
// PRODUCT CARD
// =====================================================

function ProductCard({ product, index, onViewProduct }) {
  return (
    <motion.div
      initial={product.hidden}
      whileInView={{
        x: 0,
        y: 0,
        rotate: 0,
        scale: 1,
        opacity: 1,
      }}
      viewport={{
        once: false,
        amount: 0.2,
      }}
      transition={{
        type: "spring",
        stiffness: 65,
        damping: 17,
        mass: 0.9,
        delay: index * 0.08,
      }}
      className="relative group"
    >
      {/* =================================================
          FLOATING PRODUCT IMAGE
      ================================================= */}

      <motion.div
        animate={{
          y: [0, -7, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: index * 0.2,
        }}
        className="
          relative
          z-20
          flex
          h-[285px]
          items-end
          justify-center
          pointer-events-none
        "
      >
        {/* Soft Glow */}

        <div
          className="
            absolute
            bottom-5
            left-1/2
            h-20
            w-44
            -translate-x-1/2
            rounded-full
            bg-[#c5a64b]/20
            blur-3xl
          "
        />

        {/* Product Shadow */}

        <div
          className="
            absolute
            bottom-2
            left-1/2
            h-5
            w-28
            -translate-x-1/2
            rounded-[50%]
            bg-black/15
            blur-xl
          "
        />

        {/* Product Image */}

        <img
          src={product.image}
          alt={product.name}
          className="
            relative
            z-10
            max-h-[270px]
            max-w-[84%]
            object-contain
            drop-shadow-[0_25px_30px_rgba(0,0,0,0.22)]
            transition-transform
            duration-700
            group-hover:scale-[1.05]
          "
        />
      </motion.div>

      {/* =================================================
          PRODUCT CARD
      ================================================= */}

      <div
        className="
          relative
          z-10
          -mt-9
          min-h-[325px]
          overflow-hidden
          rounded-[30px]
          border
          border-[#b9a24a]/30
          bg-gradient-to-br
          from-[#f5f3d9]
          via-[#e9eab6]
          to-[#dbe477]
          px-5
          pt-14
          pb-7
          text-center
          shadow-[0_18px_50px_rgba(40,60,30,0.12)]
          transition-all
          duration-500
          group-hover:-translate-y-2
          group-hover:shadow-[0_28px_65px_rgba(40,60,30,0.20)]
        "
      >
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
          "
        />

        {/* Number */}

        <span
          className="
            absolute
            left-5
            top-4
            font-serif
            text-4xl
            font-bold
            text-[#30452e]/10
          "
        >
          {product.number}
        </span>

        {/* Sparkle */}

        <div
          className="
            absolute
            right-5
            top-5
            flex
            h-8
            w-8
            items-center
            justify-center
            rounded-full
            border
            border-[#b79b3c]/25
            bg-white/35
          "
        >
          <Sparkles
            size={14}
            className="text-[#947522]"
          />
        </div>

        {/* Tag */}

        <div
          className="
            mb-3
            inline-flex
            items-center
            gap-2
            rounded-full
            border
            border-[#b79b3c]/30
            bg-white/35
            px-3.5
            py-1.5
          "
        >
          <Star
            size={11}
            className="text-[#947522]"
            fill="currentColor"
          />

          <span
            className="
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.14em]
              text-[#59622f]
            "
          >
            {product.tag}
          </span>
        </div>

        {/* Product Name */}

        <h3
          className="
            mx-auto
            max-w-[280px]
            font-serif
            text-2xl
            font-semibold
            leading-tight
            text-[#263c29]
            sm:text-[28px]
          "
        >
          {product.name}
        </h3>

        {/* Decorative Divider */}

        <div
          className="
            my-4
            flex
            items-center
            justify-center
            gap-2
          "
        >
          <div
            className="
              h-[1px]
              w-9
              bg-[#aa8b2d]
            "
          />

          <div
            className="
              h-1.5
              w-1.5
              rotate-45
              bg-[#aa8b2d]
            "
          />

          <div
            className="
              h-[1px]
              w-9
              bg-[#aa8b2d]
            "
          />
        </div>

        {/* Short Description */}

        <p
          className="
            mx-auto
            min-h-[44px]
            max-w-[245px]
            text-sm
            leading-6
            text-[#3e4b3c]/80
          "
        >
          {product.description}
        </p>

        {/* view Product */}

        <motion.button
          type="button"
          onClick={() => onViewProduct(product)}
          whileHover={{
            scale: 1.03,
          }}
          whileTap={{
            scale: 0.97,
          }}
          className="
            mt-5
            inline-flex
            items-center
            gap-2
            rounded-full
            bg-[#284934]
            px-5
            py-2.5
            text-xs
            font-semibold
            text-[#ead78b]
            shadow-[0_8px_20px_rgba(40,73,52,0.18)]
            transition-all
            duration-300
            hover:bg-[#1f3b2a]
            hover:shadow-[0_12px_25px_rgba(40,73,52,0.25)]
          "
        >
          <span>view Product</span>

          <ArrowUpRight
            size={15}
            className="
              transition-transform
              duration-300
              group-hover:translate-x-1
              group-hover:-translate-y-1
            "
          />
        </motion.button>

        {/* Bottom Detail */}

        <div
          className="
            mt-5
            flex
            items-center
            justify-center
            gap-2
            text-[11px]
            font-medium
            text-[#536053]
          "
        >
          <Leaf
            size={13}
            className="text-[#55764f]"
          />

          <span>Pakeeza Premium Quality</span>
        </div>
      </div>
    </motion.div>
  );
}

// =====================================================
// MAIN COMPONENT
// =====================================================

export default function PakeezaProduct() {
  const [selectedProduct, setSelectedProduct] = React.useState(null);

  React.useEffect(() => {
    if (!selectedProduct) return undefined;

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event) => {
      if (event.key === "Escape") setSelectedProduct(null);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProduct]);

  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-[#f8f8ef]
      "
    >
      {/* =================================================
          BACKGROUND
      ================================================= */}

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
            h-[550px]
            w-[550px]
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
            top-1/2
            h-[400px]
            w-[400px]
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
            bottom-0
            h-[400px]
            w-[400px]
            rounded-full
            bg-[#c9d87d]/15
            blur-[100px]
          "
        />
      </div>

      {/* =================================================
          MAIN CONTENT
      ================================================= */}

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
        {/* =================================================
            HEADER
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
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
            mb-16
            max-w-3xl
            text-center
          "
        >
          {/* Small Label */}

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
              Pakeeza Product Range
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
            Explore Pakeeza

            <span
              className="
                mt-1
                block
                text-[#a9892d]
              "
            >
              1121 Basmati Range
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
            Discover our premium 1121 basmati range,
            crafted for exceptional taste and aroma.
          </p>
        </motion.div>

        {/* =================================================
            PRODUCTS
        ================================================= */}

        <div
          className="
            grid
            grid-cols-1
            items-start
            gap-x-7
            gap-y-14
            sm:grid-cols-2
            xl:grid-cols-4
          "
        >
          {products.map((product, index) => (
            <ProductCard
              key={product.name}
              product={product}
              index={index}
              onViewProduct={setSelectedProduct}
            />
          ))}
        </div>

        {/* =================================================
            BOTTOM MESSAGE
        ================================================= */}

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
            <Leaf
              size={18}
              className="text-[#55764f]"
            />

            <span
              className="
                text-sm
                font-medium
                text-[#40513f]
              "
            >
              Pure grains. Rich aroma. Premium taste.
            </span>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="pakeeza-product-title"
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              className="absolute inset-0 bg-[#142218]/70 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.92 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.94 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              onClick={(event) => event.stopPropagation()}
              className="
                relative z-10 w-full max-w-5xl max-h-[92vh] overflow-y-auto
                rounded-[30px] border border-[#c5aa4c]/40 bg-[#f8f8ef]
                shadow-[0_35px_100px_rgba(0,0,0,0.35)] sm:rounded-[38px]
              "
            >
              <button
                type="button"
                onClick={() => setSelectedProduct(null)}
                aria-label="Close product details"
                className="
                  absolute right-4 top-4 z-30 flex h-11 w-11 items-center
                  justify-center rounded-full border border-[#b9a24a]/30
                  bg-white/80 text-[#30452e] shadow-lg backdrop-blur-md
                  transition-all duration-300 hover:rotate-90
                  hover:bg-[#30452e] hover:text-white sm:right-6 sm:top-6
                "
              >
                <X size={21} />
              </button>

              <div className="absolute left-8 right-8 top-0 h-[3px] rounded-full bg-gradient-to-r from-transparent via-[#b69a35] to-transparent" />

              <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
                <div
                  className="
                    relative flex min-h-[350px] items-center justify-center
                    overflow-hidden rounded-t-[30px]
                    bg-gradient-to-br from-[#eef0c9] via-[#e6e8b7] to-[#d5dd8a]
                    p-8 sm:min-h-[430px] sm:p-12
                    lg:rounded-l-[38px] lg:rounded-tr-none
                  "
                >
                  <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/40 blur-3xl" />
                  <div className="absolute -left-16 -top-16 h-40 w-40 rounded-full border border-[#b69a35]/20" />
                  <div className="absolute -bottom-20 -right-20 h-52 w-52 rounded-full border border-[#b69a35]/20" />

                  <span className="absolute left-6 top-5 font-serif text-7xl font-bold text-[#30452e]/10">
                    {selectedProduct.number}
                  </span>

                  <motion.img
                    src={selectedProduct.image}
                    alt={selectedProduct.fullName}
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{
                      delay: 0.15,
                      duration: 0.6,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="
                      relative z-10 max-h-[300px] max-w-[88%] object-contain
                      drop-shadow-[0_30px_35px_rgba(0,0,0,0.25)]
                      sm:max-h-[370px]
                    "
                  />

                  <div
                    className="
                      absolute bottom-6 left-1/2 z-20 -translate-x-1/2
                      whitespace-nowrap rounded-full border
                      border-[#b79b3c]/30 bg-white/70 px-4 py-2
                      text-xs font-semibold tracking-wider text-[#59622f]
                      shadow-lg backdrop-blur-md
                    "
                  >
                    PAKEEZA 1121 BASMATI COLLECTION
                  </div>
                </div>

                <div className="p-7 sm:p-10 lg:p-12">
                  <div
                    className="
                      mb-5 inline-flex items-center gap-2 rounded-full
                      border border-[#b79b3c]/30 bg-[#e9ebc4]/70 px-4 py-2
                    "
                  >
                    <Sparkles size={14} className="text-[#947522]" />
                    <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#59622f]">
                      {selectedProduct.tag}
                    </span>
                  </div>

                  <h2
                    id="pakeeza-product-title"
                    className="
                      font-serif text-3xl font-semibold leading-tight
                      text-[#263c29] sm:text-4xl lg:text-5xl
                    "
                  >
                    {selectedProduct.fullName}
                  </h2>

                  <div className="mt-5 flex items-center gap-3">
                    <div className="h-px w-14 bg-[#aa8b2d]" />
                    <div className="h-2 w-2 rotate-45 bg-[#aa8b2d]" />
                    <div className="h-px w-14 bg-[#aa8b2d]" />
                  </div>

                  <p className="mt-6 text-sm leading-7 text-[#536053] sm:text-base">
                    {selectedProduct.details}
                  </p>

                  <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
                    <div className="rounded-2xl border border-[#b9a24a]/20 bg-[#f1f1d9] p-4">
                      <Wheat size={19} className="mb-3 text-[#9a7d25]" />
                      <p className="text-[10px] font-bold uppercase tracking-wider text-[#777e62]">
                        Rice Type
                      </p>
                      <p className="mt-1 text-xs font-semibold leading-5 text-[#30452e]">
                        {selectedProduct.riceType}
                      </p>
                    </div>

                    <div className="rounded-2xl border border-[#b9a24a]/20 bg-[#f1f1d9] p-4">
                      <Award size={19} className="mb-3 text-[#9a7d25]" />
                      <p className="text-[10px] font-bold uppercase tracking-wider text-[#777e62]">
                        Grade
                      </p>
                      <p className="mt-1 text-xs font-semibold leading-5 text-[#30452e]">
                        {selectedProduct.grade}
                      </p>
                    </div>

                    <div className="rounded-2xl border border-[#b9a24a]/20 bg-[#f1f1d9] p-4">
                      <Sparkles size={19} className="mb-3 text-[#9a7d25]" />
                      <p className="text-[10px] font-bold uppercase tracking-wider text-[#777e62]">
                        Positioning
                      </p>
                      <p className="mt-1 text-xs font-semibold leading-5 text-[#30452e]">
                        {selectedProduct.positioning}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <div className="rounded-2xl border border-[#b9a24a]/20 bg-[#f1f1d9] p-4">
                      <Utensils size={19} className="mb-3 text-[#9a7d25]" />
                      <p className="text-[10px] font-bold uppercase tracking-wider text-[#777e62]">
                        Best For
                      </p>
                      <p className="mt-1 text-xs font-semibold leading-5 text-[#30452e]">
                        {selectedProduct.bestFor}
                      </p>
                    </div>

                    <div className="rounded-2xl border border-[#b9a24a]/20 bg-[#f1f1d9] p-4">
                      <Leaf size={19} className="mb-3 text-[#55764f]" />
                      <p className="text-[10px] font-bold uppercase tracking-wider text-[#777e62]">
                        Available Packs
                      </p>
                      <p className="mt-1 text-xs font-semibold leading-5 text-[#30452e]">
                        {selectedProduct.packs}
                      </p>
                    </div>
                  </div>

                  <div className="mt-8">
                    <div className="mb-4 flex items-center gap-2">
                      <Award size={19} className="text-[#a18328]" />
                      <h3 className="font-serif text-xl font-semibold text-[#30452e]">
                        Quality Highlights
                      </h3>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-2">
                      {selectedProduct.highlights.map((highlight, index) => (
                        <motion.div
                          key={highlight}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.25 + index * 0.08 }}
                          className="
                            flex items-center gap-3 rounded-xl border
                            border-[#c5aa4c]/20 bg-white/60 px-4 py-3
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

                  <div
                    className="
                      mt-8 rounded-2xl border border-[#c5aa4c]/25
                      bg-[#e9ebc4]/50 px-5 py-4
                    "
                  >
                    <p className="text-sm leading-6 text-[#40513f]">
                      <em>{selectedProduct.websiteHighlight}</em>
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}