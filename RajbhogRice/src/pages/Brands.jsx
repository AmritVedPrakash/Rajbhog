import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles, Leaf, Star } from "lucide-react";

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
  },
  {
    name: "Rajbhog Biryani",
    image: Brand2,
    tag: "Aromatic Rice",
    description:
      "Carefully selected grains designed to bring authentic aroma, flavour and presentation to every biryani.",
    number: "02",
  },
  {
    name: "Rajbhog Everyday",
    image: Brand3,
    tag: "Everyday Choice",
    description:
      "A versatile rice variety made for delicious everyday meals, family gatherings and traditional recipes.",
    number: "03",
  },
  {
    name: "Rajbhog Premium",
    image: Brand4,
    tag: "Extra Long Grain",
    description:
      "Premium grains with exceptional length, delicate aroma and a refined taste for special occasions.",
    number: "04",
  },
  {
    name: "Rajbhog Select",
    image: Brand5,
    tag: "Selected Quality",
    description:
      "Finely selected rice grains offering consistency, natural flavour and a satisfying cooking experience.",
    number: "05",
  },
  {
    name: "Rajbhog Royal",
    image: Brand6,
    tag: "Royal Collection",
    description:
      "A sophisticated rice collection created for those who appreciate premium quality and authentic taste.",
    number: "06",
  },
  {
    name: "Rajbhog Heritage",
    image: Brand7,
    tag: "Traditional Taste",
    description:
      "Inspired by generations of rice expertise, bringing traditional goodness to modern dining tables.",
    number: "07",
  },
  {
    name: "Rajbhog Supreme",
    image: Brand8,
    tag: "Superior Grain",
    description:
      "Distinctive grains selected for their aroma, appearance and excellent texture after cooking.",
    number: "08",
  },
  {
    name: "Rajbhog Gold",
    image: Brand9,
    tag: "Premium Collection",
    description:
      "A premium selection offering beautiful grains, delicate fragrance and a naturally rich taste.",
    number: "09",
  },
  {
    name: "Rajbhog Special",
    image: Brand10,
    tag: "Special Selection",
    description:
      "A carefully crafted selection for celebrations, fine meals and moments worth making memorable.",
    number: "10",
  },
];

// =====================================================
// ANIMATED BRAND CARD
// =====================================================

function BrandCard({ brand, index }) {
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
      className="group relative"
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
          h-[260px]
          sm:h-[290px]
          lg:h-[310px]
          flex
          items-end
          justify-center
          pointer-events-none
        "
      >
        {/* Soft Glow */}

        <div
          className="
            absolute
            bottom-6
            left-1/2
            -translate-x-1/2
            w-44
            h-20
            rounded-full
            bg-[#c5a64b]/20
            blur-3xl
          "
        />

        {/* Shadow */}

        <div
          className="
            absolute
            bottom-2
            left-1/2
            -translate-x-1/2
            w-28
            h-5
            rounded-[50%]
            bg-black/15
            blur-xl
          "
        />

        {/* Brand Image */}

        <img
          src={brand.image}
          alt={brand.name}
          className="
            relative
            z-10
            max-h-[275px]
            sm:max-h-[300px]
            lg:max-h-[325px]
            max-w-[84%]
            object-contain
            drop-shadow-[0_25px_30px_rgba(0,0,0,0.22)]
            transition-transform
            duration-700
            group-hover:scale-[1.06]
          "
        />
      </motion.div>

      {/* ==========================================
          BRAND CARD
      ========================================== */}

      <div
        className="
          relative
          z-10
          -mt-8
          min-h-[315px]
          rounded-[28px]
          border
          border-[#b9a24a]/30
          bg-gradient-to-br
          from-[#f5f3d9]
          via-[#e9eab6]
          to-[#dbe477]
          px-5
          sm:px-7
          pt-12
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
            top-0
            left-8
            right-8
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
            top-4
            left-5
            font-serif
            text-4xl
            font-bold
            text-[#30452e]/10
          "
        >
          {brand.number}
        </span>

        {/* Tag */}

        <div
          className="
            inline-flex
            items-center
            gap-2
            mb-4
            rounded-full
            border
            border-[#b79b3c]/30
            bg-white/35
            px-3.5
            py-1.5
          "
        >
          <Sparkles size={13} className="text-[#947522]" />

          <span
            className="
              text-[10px]
              sm:text-xs
              uppercase
              tracking-[0.12em]
              font-semibold
              text-[#59622f]
            "
          >
            {brand.tag}
          </span>
        </div>

        {/* Title */}

        <h3
          className="
            font-serif
            text-2xl
            sm:text-[27px]
            font-semibold
            text-[#263c29]
            mb-3
          "
        >
          {brand.name}
        </h3>

        {/* Divider */}

        <div
          className="
            flex
            items-center
            justify-center
            gap-2
            mb-5
          "
        >
          <div
            className="
              w-8
              h-[1px]
              bg-[#aa8b2d]
            "
          />

          <div
            className="
              w-1.5
              h-1.5
              rotate-45
              bg-[#aa8b2d]
            "
          />

          <div
            className="
              w-8
              h-[1px]
              bg-[#aa8b2d]
            "
          />
        </div>

        {/* Description */}

        <p
          className="
            max-w-sm
            mx-auto
            text-sm
            sm:text-[15px]
            leading-6
            text-[#3e4b3c]/80
          "
        >
          {brand.description}
        </p>

        {/* Bottom */}

        <div
          className="
            flex
            items-center
            justify-center
            gap-2
            mt-5
            text-sm
            font-semibold
            text-[#66571e]
          "
        >
          <Leaf size={15} />

          <span>Crafted with Care</span>

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
      </div>
    </motion.div>
  );
}

// =====================================================
// MAIN BRANDS COMPONENT
// =====================================================

export default function Brands() {
  return (
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
          absolute
          inset-0
          pointer-events-none
        "
      >
        {/* Center Glow */}

        <div
          className="
            absolute
            top-20
            left-1/2
            -translate-x-1/2
            w-[600px]
            h-[600px]
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
            w-[450px]
            h-[450px]
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
            w-[450px]
            h-[450px]
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
          max-w-7xl
          mx-auto
          px-5
          sm:px-8
          lg:px-10
          py-20
          sm:py-24
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
            text-center
            max-w-3xl
            mx-auto
            mb-14
            lg:mb-20
          "
        >
          {/* Label */}

          <div
            className="
              inline-flex
              items-center
              gap-2
              mb-5
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
                sm:text-xs
                uppercase
                tracking-[0.25em]
                font-semibold
                text-[#ead78b]
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
              sm:text-5xl
              md:text-6xl
              leading-[1.08]
              font-semibold
              text-[#263d2a]
            "
          >
            Discover Our
            <span
              className="
                block
                mt-1
                text-[#a9892d]
              "
            >
              Premium Rice Brands
            </span>
          </h2>

          {/* Divider */}

          <div
            className="
              flex
              items-center
              justify-center
              gap-3
              mt-6
            "
          >
            <div
              className="
                w-16
                sm:w-24
                h-[1px]
                bg-[#b49a42]
              "
            />

            <div
              className="
                w-2.5
                h-2.5
                rotate-45
                bg-[#b49a42]
              "
            />

            <div
              className="
                w-16
                sm:w-24
                h-[1px]
                bg-[#b49a42]
              "
            />
          </div>

          {/* Description */}

          <p
            className="
              mt-6
              text-sm
              sm:text-base
              md:text-lg
              leading-7
              text-[#536053]
            "
          >
            Explore our collection of carefully crafted rice brands, created
            with purity, tradition and uncompromising quality for every
            occasion.
          </p>
        </motion.div>

        {/* ========================================
            10 BRAND CARDS
        ======================================== */}

        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            xl:grid-cols-4
            gap-x-6
            gap-y-12
            lg:gap-x-8
            lg:gap-y-16
            items-start
          "
        >
          {brands.map((brand, index) => (
            <BrandCard key={brand.name} brand={brand} index={index} />
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
            flex
            justify-center
            mt-16
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
  );
}
