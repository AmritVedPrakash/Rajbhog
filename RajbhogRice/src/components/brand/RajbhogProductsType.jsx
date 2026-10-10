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
// RAJBHOG PRODUCT IMAGES
// =====================================================
// Images: ../../assets/brand/rajbhog/
// Agar tumhare actual filenames different hain,
// sirf in import names/paths ko change karna hai.

import Excellent from "../../assets/brand/rajbhog/excellent.png";
import Premium from "../../assets/brand/rajbhog/premium.png";
import ClassicAgedBasmati from "../../assets/brand/rajbhog/classic-aged-basmati.png";
import Rice1121 from "../../assets/brand/rajbhog/1121.png";
import Dubar from "../../assets/brand/rajbhog/dubar.png";
import Regular from "../../assets/brand/rajbhog/regular.png";
import Special from "../../assets/brand/rajbhog/special.png";
import MiniMogra from "../../assets/brand/rajbhog/mini-mogra.png";
import Mogra from "../../assets/brand/rajbhog/mogra.png";
import TiniMogra from "../../assets/brand/rajbhog/tini-mogra.png";
import Rozana from "../../assets/brand/rajbhog/rozana.png";

// =====================================================
// PRODUCT DATA
// =====================================================

const products = [
  {
    name: "Excellent",
    fullName: "RAJ BHOG EXCELLENT BASMATI RICE",
    image: Excellent,
    tag: "Premium Selection",
    description: "Exceptional quality and aroma",
    number: "01",
    details:
      "Raj Bhog Excellent Basmati Rice is part of the brand's premium-oriented Basmati range, created for consumers and buyers looking for a refined rice option for everyday meals as well as traditional Indian cuisine. It represents the quality-focused side of the Raj Bhog portfolio while remaining suitable for regular household consumption.",
    riceType: "Basmati Rice",
    grade: "Excellent quality",
    positioning: "Excellent-quality Basmati Rice",
    bestFor:
      "Household cooking, retail, distributors and ethnic-food markets",
    packs: "1 kg, 5 kg, 10 kg, 20 kg and 25 kg*",
    highlights: [
      "Quality-focused Basmati selection",
      "Suitable for everyday meals",
      "Made for traditional Indian cuisine",
      "Suitable for households and retail markets",
    ],
    websiteHighlight:
      "A quality-focused Basmati choice for everyday meals and traditional Indian cuisine.",
    hidden: {
      x: -120,
      y: 40,
      rotate: -5,
      scale: 0.9,
      opacity: 0,
    },
  },

  {
    name: "Premium",
    fullName: "RAJ BHOG PREMIUM BASMATI RICE",
    image: Premium,
    tag: "Premium Quality",
    description: "Rich aroma, elegant grains",
    number: "02",
    details:
      "Raj Bhog Premium Basmati Rice is positioned for consumers and buyers seeking a more premium rice experience. It forms part of Raj Bhog's core premium portfolio and is suitable for households, retail markets and food businesses looking for a dependable premium Basmati offering.",
    riceType: "Basmati Rice",
    grade: "Premium",
    positioning: "Premium Basmati Rice",
    bestFor:
      "Premium households, retail, distributors, restaurants and export markets",
    packs: "1 kg, 5 kg, 10 kg, 20 kg and 25 kg*",
    highlights: [
      "Part of Raj Bhog's core premium portfolio",
      "Designed for a premium rice experience",
      "Suitable for households and retail markets",
      "Suitable for restaurants and export markets",
    ],
    websiteHighlight:
      "A premium Basmati offering designed for refined everyday meals and special occasions.",
    hidden: {
      x: 0,
      y: 100,
      rotate: 0,
      scale: 0.9,
      opacity: 0,
    },
  },

  {
    name: "Classic Aged Basmati",
    fullName: "RAJ BHOG CLASSIC AGED BASMATI RICE",
    image: ClassicAgedBasmati,
    tag: "Aged Basmati",
    description: "Naturally aged, aromatic grains",
    number: "03",
    details:
      "Raj Bhog Classic Aged Basmati Rice is the brand's aged Basmati offering, positioned for buyers looking for a more premium and traditional Basmati selection. It gives Raj Bhog a distinct offering within the premium rice segment and is suitable for retail and international markets where aged Basmati is sought.",
    riceType: "Aged Basmati Rice",
    grade: "Classic aged",
    positioning: "Classic Aged Basmati Rice",
    bestFor:
      "Premium retail, households, restaurants, distributors and export markets",
    packs: "1 kg, 5 kg, 10 kg, 20 kg and 25 kg*",
    highlights: [
      "Raj Bhog's aged Basmati offering",
      "Premium and traditional selection",
      "Suitable for premium retail and households",
      "For markets seeking aged Basmati",
    ],
    websiteHighlight:
      "A classic aged Basmati offering for buyers seeking a premium traditional rice experience.",
    hidden: {
      x: 120,
      y: 40,
      rotate: 5,
      scale: 0.9,
      opacity: 0,
    },
  },

  {
    name: "1121",
    fullName: "RAJ BHOG 1121 RICE",
    image: Rice1121,
    tag: "Long Grain",
    description: "Extra-long grains, rich aroma",
    number: "04",
    details:
      "Raj Bhog 1121 Rice is an important offering within the brand's long-grain Basmati portfolio. The catalogue specifically showcases Raj Bhog 1121 rice in a dedicated product presentation, making it one of the identifiable varieties within the brand's range. It is suitable for household consumption as well as retail and distribution markets.",
    riceType: "1121 Basmati Rice",
    grade: "1121",
    positioning: "1121 Basmati Rice",
    bestFor:
      "Household cooking, retail, distributors, restaurants and international markets",
    packs:
      "3 kg pack shown in the catalogue; broader portfolio packs include 1 kg, 5 kg, 10 kg, 20 kg and 25 kg*",
    highlights: [
      "Distinctive variety in Raj Bhog's Basmati portfolio",
      "Dedicated product presentation in the catalogue",
      "Suitable for household consumption",
      "For retail and distribution markets",
    ],
    websiteHighlight:
      "A distinctive 1121 Basmati offering from the Raj Bhog portfolio.",
    hidden: {
      x: -120,
      y: 50,
      rotate: -5,
      scale: 0.9,
      opacity: 0,
    },
  },

  {
    name: "Dubar",
    fullName: "RAJ BHOG DUBAR RICE",
    image: Dubar,
    tag: "Everyday Choice",
    description: "Delicious grains for daily meals",
    number: "05",
    details:
      "Raj Bhog Dubar Rice is part of the brand's diversified rice range, offering an alternative to its premium Basmati selections. It is designed for buyers looking for a practical rice option across household, retail and commercial consumption.",
    riceType: "Dubar Rice",
    grade: "Dubar",
    positioning: "Value-oriented rice variety",
    bestFor: "Everyday cooking, retail, wholesalers and distributors",
    packs: "10 kg and 25 kg*",
    highlights: [
      "Alternative to premium Basmati selections",
      "Practical option for everyday cooking",
      "Suitable for household and commercial consumption",
      "For retail, wholesale and distribution",
    ],
    websiteHighlight:
      "A practical rice choice designed for everyday consumption and value-focused markets.",
    hidden: {
      x: 0,
      y: 100,
      rotate: 0,
      scale: 0.9,
      opacity: 0,
    },
  },

  {
    name: "Regular",
    fullName: "RAJ BHOG REGULAR RICE",
    image: Regular,
    tag: "Daily Rice",
    description: "Simple, tasty and dependable",
    number: "06",
    details:
      "Raj Bhog Regular Rice is positioned as an everyday rice option within the brand's wider portfolio. It provides buyers with a dependable choice for regular household meals and commercial cooking, complementing Raj Bhog's premium and specialty offerings.",
    riceType: "Regular Rice",
    grade: "Regular",
    positioning: "Regular / Everyday Rice",
    bestFor: "Daily meals, households, retail and foodservice",
    packs: "10 kg and 25 kg*",
    highlights: [
      "Everyday option in the wider Raj Bhog portfolio",
      "A dependable choice for regular meals",
      "Suitable for household cooking",
      "Suitable for commercial cooking and foodservice",
    ],
    websiteHighlight:
      "A dependable everyday rice option for regular family and commercial cooking.",
    hidden: {
      x: 120,
      y: 50,
      rotate: 5,
      scale: 0.9,
      opacity: 0,
    },
  },

  {
    name: "Special",
    fullName: "RAJ BHOG SPECIAL RICE",
    image: Special,
    tag: "Special Selection",
    description: "Perfect for special occasions",
    number: "07",
    details:
      "Raj Bhog Special Rice provides an additional grade within the brand's diversified portfolio, giving retailers and distributors another option between everyday and more premium rice requirements. It is suitable for traditional meals and regular household consumption.",
    riceType: "Special Rice",
    grade: "Special grade",
    positioning: "Special-grade rice",
    bestFor: "Retail, households, distributors and foodservice",
    packs: "10 kg and 25 kg*",
    highlights: [
      "Additional grade in Raj Bhog's diversified portfolio",
      "An option between everyday and premium requirements",
      "Suitable for traditional meals",
      "For households, retail and foodservice",
    ],
    websiteHighlight:
      "A versatile rice selection for everyday meals and traditional cooking.",
    hidden: {
      x: -120,
      y: 50,
      rotate: -5,
      scale: 0.9,
      opacity: 0,
    },
  },

  {
    name: "Mogra",
    fullName: "RAJ BHOG MOGRA RICE",
    image: Mogra,
    tag: "Mogra Variety",
    description: "A versatile Mogra rice option",
    number: "08",
    details:
      "Raj Bhog Mogra Rice is part of the brand's dedicated Mogra variety portfolio. It is offered alongside Mini Mogra, Tini Mogra and Rozana, allowing buyers to select from different rice options according to their market and consumption requirements.",
    riceType: "Mogra Rice",
    grade: "Mogra",
    positioning: "Mogra Rice",
    bestFor:
      "Everyday cooking, value-focused retail, wholesalers and distributors",
    packs: "10 kg and 25 kg*",
    highlights: [
      "Part of Raj Bhog's Mogra variety portfolio",
      "Available alongside Mini Mogra, Tini Mogra and Rozana",
      "For everyday cooking",
      "Suitable for value-focused retail and distribution",
    ],
    websiteHighlight:
      "A versatile Mogra rice option for everyday cooking and value-focused markets.",
    hidden: {
      x: 0,
      y: 100,
      rotate: 0,
      scale: 0.9,
      opacity: 0,
    },
  },

  {
    name: "Mini Mogra",
    fullName: "RAJ BHOG MINI MOGRA RICE",
    image: MiniMogra,
    tag: "Aromatic Rice",
    description: "Small grains, delightful aroma",
    number: "09",
    details:
      "Raj Bhog Mini Mogra Rice is a smaller-format Mogra variety within the Raj Bhog portfolio. It provides an additional choice for markets where Mogra rice varieties are preferred, supporting the brand's broad offering across different consumer and commercial requirements.",
    riceType: "Mini Mogra Rice",
    grade: "Mini Mogra",
    positioning: "Mini Mogra Rice",
    bestFor: "Everyday cooking, retail, wholesalers and distributors",
    packs: "10 kg and 25 kg*",
    highlights: [
      "Smaller-format Mogra variety",
      "Additional choice in the Raj Bhog portfolio",
      "Suitable for everyday cooking",
      "For retail, wholesale and distribution",
    ],
    websiteHighlight:
      "A versatile Mogra variety designed for everyday rice consumption.",
    hidden: {
      x: 0,
      y: 100,
      rotate: 0,
      scale: 0.9,
      opacity: 0,
    },
  },

  {
    name: "Tini Mogra",
    fullName: "RAJ BHOG TINI MOGRA RICE",
    image: TiniMogra,
    tag: "Everyday Favourite",
    description: "Aromatic rice for every meal",
    number: "10",
    details:
      "Raj Bhog Tini Mogra Rice is another specialized Mogra offering within the Raj Bhog range. Its inclusion alongside Mogra and Mini Mogra demonstrates the brand's breadth in catering to different rice preferences and market segments.",
    riceType: "Tini Mogra Rice",
    grade: "Tini Mogra",
    positioning: "Tini Mogra Rice",
    bestFor: "Everyday cooking, retail, wholesale and distribution",
    packs: "10 kg and 25 kg*",
    highlights: [
      "Specialized Mogra offering in the Raj Bhog range",
      "Available alongside Mogra and Mini Mogra",
      "Suitable for everyday cooking",
      "For retail, wholesale and distribution",
    ],
    websiteHighlight:
      "A distinctive Mogra variety offering another choice within the Raj Bhog portfolio.",
    hidden: {
      x: -120,
      y: 50,
      rotate: -5,
      scale: 0.9,
      opacity: 0,
    },
  },

  {
    name: "Rozana",
    fullName: "RAJ BHOG ROZANA RICE",
    image: Rozana,
    tag: "Everyday Rice",
    description: "Perfect rice for daily cooking",
    number: "11",
    details:
      "Raj Bhog Rozana is positioned as an everyday rice offering within the brand's Mogra and regular-consumption portfolio. The name and placement in the catalogue indicate a product intended for regular household and everyday cooking requirements.",
    riceType: "Everyday Rice",
    grade: "Rozana",
    positioning: "Everyday Rice",
    bestFor: "Daily family meals, household cooking, retail and distributors",
    packs: "10 kg and 25 kg*",
    highlights: [
      "Everyday offering in the Raj Bhog portfolio",
      "Part of the Mogra and regular-consumption range",
      "Suitable for daily family meals",
      "For household cooking, retail and distribution",
    ],
    websiteHighlight:
      "An everyday rice choice designed for regular family meals and home cooking.",
    hidden: {
      x: 0,
      y: 100,
      rotate: 0,
      scale: 0.9,
      opacity: 0,
    },
  },
];

function getRelatedProducts(selectedProduct) {
  const getProductFamily = (product) => {
    if (/mogra|rozana/i.test(product.name)) return "mogra";
    if (/basmati/i.test(product.riceType)) return "basmati";
    return product.riceType.toLowerCase().replace(/\s+rice$/, "");
  };

  const otherProducts = products.filter(
    (product) => product.name !== selectedProduct.name,
  );
  const sameFamilyProducts = otherProducts.filter(
    (product) => getProductFamily(product) === getProductFamily(selectedProduct),
  );
  const remainingProducts = otherProducts.filter(
    (product) => !sameFamilyProducts.includes(product),
  );

  return [...sameFamilyProducts, ...remainingProducts].slice(0, 3);
}

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
        amount: 0.18,
      }}
      transition={{
        type: "spring",
        stiffness: 65,
        damping: 17,
        mass: 0.9,
        delay: index * 0.04,
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
          delay: index * 0.15,
        }}
        className="
          relative
          z-20
          flex
          h-[270px]
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

        {/* Product */}

        <img
          src={product.image}
          alt={product.name}
          className="
            relative
            z-10
            max-h-[255px]
            max-w-[82%]
            object-contain
            drop-shadow-[0_25px_30px_rgba(0,0,0,0.22)]
            transition-transform
            duration-700
            group-hover:scale-[1.05]
          "
        />
      </motion.div>

      {/* =================================================
          CARD
      ================================================= */}

      <div
        className="
          relative
          z-10
          -mt-9
          min-h-[315px]
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
          <Sparkles size={14} className="text-[#947522]" />
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
          <Star size={11} className="text-[#947522]" fill="currentColor" />

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
            max-w-[260px]
            font-serif
            text-2xl
            font-semibold
            leading-tight
            text-[#263c29]
            sm:text-[27px]
          "
        >
          {product.name}
        </h3>

        {/* Divider */}

        <div
          className="
            my-4
            flex
            items-center
            justify-center
            gap-2
          "
        >
          <div className="h-[1px] w-8 bg-[#aa8b2d]" />

          <div
            className="
              h-1.5
              w-1.5
              rotate-45
              bg-[#aa8b2d]
            "
          />

          <div className="h-[1px] w-8 bg-[#aa8b2d]" />
        </div>

        {/* Short Description */}

        <p
          className="
            mx-auto
            min-h-[42px]
            max-w-[230px]
            text-sm
            leading-6
            text-[#3e4b3c]/80
          "
        >
          {product.description}
        </p>

        {/* Explore Product */}

        <button
          type="button"
          onClick={() => onViewProduct(product)}
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
          <span>View Product</span>

          <ArrowUpRight
            size={15}
            className="
              transition-transform
              duration-300
              group-hover:translate-x-1
              group-hover:-translate-y-1
            "
          />
        </button>

        {/* Bottom */}

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
          <Leaf size={13} className="text-[#55764f]" />

          <span>Rajbhog Quality</span>
        </div>
      </div>
    </motion.div>
  );
}

// =====================================================
// MAIN COMPONENT
// =====================================================

export default function RajbhogProductsRange() {
  const [selectedProduct, setSelectedProduct] = React.useState(null);
  const modalContentRef = React.useRef(null);

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

  React.useEffect(() => {
    if (selectedProduct) {
      modalContentRef.current?.scrollTo({ top: 0, behavior: "smooth" });
    }
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
            <Star size={14} className="text-[#d8be61]" fill="currentColor" />

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
              Rajbhog Product Range
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
            Explore Our
            <span
              className="
                mt-1
                block
                text-[#a9892d]
              "
            >
              Rice Collection
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
            Discover the complete Rajbhog rice range, carefully selected for
            quality and taste.
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
            lg:grid-cols-3
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

      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="rajbhog-product-title"
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
              ref={modalContentRef}
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
                    RAJ BHOG RICE COLLECTION
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
                    id="rajbhog-product-title"
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

              <section className="border-t border-[#c5aa4c]/25 bg-white/35 px-6 py-7 sm:px-10 sm:py-9 lg:px-12">
                <div className="mb-5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#947522]">
                    Explore the range
                  </p>
                  <h3 className="mt-1 font-serif text-2xl font-semibold text-[#30452e] sm:text-3xl">
                    Related Products from Rajbhog
                  </h3>
                </div>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {getRelatedProducts(selectedProduct).map((product) => (
                    <button
                      key={product.name}
                      type="button"
                      onClick={() => setSelectedProduct(product)}
                      aria-label={`View ${product.fullName} details`}
                      className="
                        group flex min-w-0 items-center gap-3 rounded-2xl
                        border border-[#c5aa4c]/25 bg-[#f8f8ef] p-3 text-left
                        transition-all duration-300 hover:-translate-y-1
                        hover:border-[#a18328]/50 hover:shadow-lg
                        focus-visible:outline focus-visible:outline-2
                        focus-visible:outline-offset-2 focus-visible:outline-[#55764f]
                      "
                    >
                      <span className="flex h-20 w-16 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#eef0c9] to-[#d5dd8a] p-2">
                        <img
                          src={product.image}
                          alt=""
                          className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                        />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-[10px] font-semibold uppercase tracking-wider text-[#947522]">
                          {product.tag}
                        </span>
                        <span className="mt-1 block font-serif text-base font-semibold leading-tight text-[#30452e] sm:text-lg">
                          {product.name}
                        </span>
                        <span className="mt-1 block text-xs text-[#536053]">
                          View product details
                        </span>
                      </span>
                      <ArrowUpRight
                        size={17}
                        className="ml-auto shrink-0 text-[#947522] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </button>
                  ))}
                </div>
              </section>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
