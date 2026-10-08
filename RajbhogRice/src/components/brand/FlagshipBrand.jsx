import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Sparkles,
  Leaf,
  Crown,
} from "lucide-react";

// =====================================================
// BRAND IMAGES
// =====================================================

import Rajbhog from "../../assets/brand/rajbhog.png";
import Ijazat from "../../assets/brand/ijazat.png";
import Pakeeza from "../../assets/brand/pakeeza.png";
import SriKhand from "../../assets/brand/srikhand.png";
import LalPatti from "../../assets/brand/lalpatti.png";
import HotelKing from "../../assets/brand/hotelking.png";
import BiryaniNo1 from "../../assets/brand/biryanino1.png";
import Tehzeeb from "../../assets/brand/tehzeeb.png";
import Hukumat from "../../assets/brand/hukumat.png";
import Khazana from "../../assets/brand/khazana.png";

// =====================================================
// BRAND DATA
// =====================================================

const brands = [
  {
    name: "Raj Bhog",
    image: Rajbhog,
    tag: "Premium Rice",
    description:
      "Complete rice range crafted for everyday meals with consistent quality and authentic taste.",
    number: "01",
    to: "/brands/rajbhog",
  },
  {
    name: "Ijazat",
    image: Ijazat,
    tag: "Premium Basmati",
    description:
      "Premium basmati rice with long aromatic grains, elegant texture and exceptional taste.",
    number: "02",
    to: "/brands/ijazat",
  },
  {
    name: "Pakeeza",
    image: Pakeeza,
    tag: "Pure Taste",
    description:
      "Carefully selected rice offering premium quality, beautiful grains and delicious flavour.",
    number: "03",
    to: "/brands/pakeeza",
  },
  {
    name: "Sri Khand",
    image: SriKhand,
    tag: "Excellent Quality",
    description:
      "Premium basmati rice designed to bring rich aroma and superior taste to every meal.",
    number: "04",
    to: "/brands/sri-khand",
  },
  {
    name: "Lal Patti",
    image: LalPatti,
    tag: "Everyday Basmati",
    description:
      "A reliable everyday basmati choice for delicious family meals and daily cooking.",
    number: "05",
    to: "/brands/lal-patti",
  },
  {
    name: "Hotel King",
    image: HotelKing,
    tag: "For Hospitality",
    description:
      "A dependable rice choice for hotels, restaurants and foodservice kitchens.",
    number: "06",
    to: "/brands/hotel-king",
  },
  {
    name: "Biryani No. 1",
    image: BiryaniNo1,
    tag: "Biryani Perfect",
    description:
      "Long aromatic grains specially selected to create flavorful and perfectly cooked biryani.",
    number: "07",
    to: "/brands/biryani-no-1",
  },
  {
    name: "Tehzeeb",
    image: Tehzeeb,
    tag: "Traditional Taste",
    description:
      "Traditional basmati rice that brings authentic flavour and elegance to every dish.",
    number: "08",
    to: "/brands/tehzeeb",
  },
  {
    name: "Hukumat",
    image: Hukumat,
    tag: "Speciality Rice",
    description:
      "Premium rice for biryani, pulao and mehfil-style occasions with rich taste and aroma.",
    number: "09",
    to: "/brands/hukumat",
  },
  {
    name: "Khazana",
    image: Khazana,
    tag: "Complete Range",
    description:
      "A versatile rice range created for everyday needs, special occasions and every kitchen.",
    number: "10",
    to: "/brands/khazana",
  },
];

// =====================================================
// CARD
// =====================================================

function BrandCard({ brand, index }) {
  const card = (
    <motion.article
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
        amount: 0.15,
      }}
      transition={{
        duration: 0.65,
        delay: index * 0.06,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group relative flex h-full flex-col"
    >
      {/* =================================================
          PRODUCT IMAGE ABOVE CARD
      ================================================= */}

      <motion.div
        animate={{
          y: [0, -7, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: index * 0.12,
        }}
        className="
          pointer-events-none
          relative
          z-20
          flex
          h-[230px]
          items-end
          justify-center
          sm:h-[250px]
          xl:h-[235px]
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

        {/* Ground Shadow */}

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

        {/* Brand Image */}

        <img
          src={brand.image}
          alt={`${brand.name} rice`}
          className="
            relative
            z-10
            max-h-[220px]
            max-w-[84%]
            object-contain
            drop-shadow-[0_25px_30px_rgba(0,0,0,0.22)]
            transition-transform
            duration-700
            group-hover:scale-[1.05]
            sm:max-h-[245px]
            xl:max-h-[230px]
          "
        />
      </motion.div>

      {/* =================================================
          CARD WRAPPER
      ================================================= */}

      <div
        className="
          relative
          z-10
          -mt-9
          flex
          min-h-[345px]
          flex-1
          flex-col
          overflow-hidden
          rounded-[30px]
          border
          border-[#b9a24a]/30
          bg-gradient-to-br
          from-[#f5f3d9]
          via-[#e9eab6]
          to-[#dbe477]
          px-5
          pb-7
          pt-14
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
            left-9
            right-9
            top-0
            h-[2px]
            bg-gradient-to-r
            from-transparent
            via-[#b69a35]
            to-transparent
          "
        />

        {/* Decorative Number */}

        <span
          className="
            absolute
            left-5
            top-5
            font-serif
            text-4xl
            font-bold
            text-[#30452e]/10
            select-none
          "
        >
          {brand.number}
        </span>

        {/* Small Crown */}

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
            bg-white/40
          "
        >
          <Crown
            size={14}
            className="text-[#a18127]"
          />
        </div>

        {/* Tag */}

        <div
          className="
            mb-4
            inline-flex
            items-center
            justify-center
            gap-1.5
            self-center
            rounded-full
            border
            border-[#b79b3c]/30
            bg-white/35
            px-3
            py-1.5
          "
        >
          <Sparkles
            size={12}
            className="text-[#947522]"
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
            {brand.tag}
          </span>
        </div>

        {/* Brand Name */}

        <h3
          className="
            font-serif
            text-2xl
            font-semibold
            text-[#263c29]
          "
        >
          {brand.name}
        </h3>

        {/* Divider */}

        <div
          className="
            my-3
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

        {/* Description */}

        <p
          className="
            mx-auto
            min-h-[66px]
            max-w-[260px]
            text-sm
            leading-6
            text-[#3e4b3c]/80
          "
        >
          {brand.description}
        </p>

        {/* Explore Button */}

        <motion.span
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
            justify-center
            gap-2
            self-center
            rounded-full
            bg-[#284934]
            px-5
            py-2.5
            text-xs
            font-semibold
            text-[#f4e7a6]
            shadow-[0_8px_20px_rgba(40,73,52,0.18)]
            transition-all
            duration-300
            hover:bg-[#1f3c2a]
            hover:shadow-[0_12px_25px_rgba(40,73,52,0.28)]
          "
        >
          <span>Explore Brand</span>

          <ArrowUpRight
            size={15}
            className="
              transition-transform
              duration-300
              group-hover:translate-x-0.5
              group-hover:-translate-y-0.5
            "
          />
        </motion.span>

        {/* Bottom detail */}

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

          <span>Quality You Can Trust</span>
        </div>
      </div>
    </motion.article>
  );

  return brand.to ? (
    <Link to={brand.to} className="block h-full" aria-label={`Explore ${brand.name}`}>
      {card}
    </Link>
  ) : (
    card
  );
}

// =====================================================
// MAIN COMPONENT
// =====================================================

export default function FlagshipBrand() {
  return (
    <section
      id="flagship-brands"
      className="
        relative
        w-full
        overflow-hidden
        bg-[#f8f8ef]
        scroll-mt-[76px]
        sm:scroll-mt-[82px]
      "
    >
      {/* =================================================
          BACKGROUND DECORATION
      ================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          overflow-hidden
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
            bg-[#d4dd87]/15
            blur-[130px]
          "
        />

        {/* Left Glow */}

        <div
          className="
            absolute
            -left-48
            top-1/3
            h-[420px]
            w-[420px]
            rounded-full
            bg-[#d8e29b]/15
            blur-[110px]
          "
        />

        {/* Right Glow */}

        <div
          className="
            absolute
            -right-48
            bottom-0
            h-[450px]
            w-[450px]
            rounded-full
            bg-[#c9d87d]/15
            blur-[110px]
          "
        />
      </div>

      {/* =================================================
          CONTENT
      ================================================= */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-[1500px]
          px-5
          py-20
          sm:px-8
          sm:py-24
          lg:px-10
          lg:py-28
        "
      >
        {/* =================================================
            SECTION HEADER
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 35,
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
            lg:mb-18
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
            <Crown
              size={14}
              className="text-[#d8be61]"
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
              Our Flagship Brands
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
            Premium Rice Brands

            <span
              className="
                mt-2
                block
                text-[#a9892d]
              "
            >
              Crafted for Every Kitchen
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
                w-14
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
                w-14
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
            Discover our flagship rice brands, each created with
            careful selection, trusted quality and a commitment
            to delivering exceptional taste to every meal.
          </p>
        </motion.div>

        {/* =================================================
            BRANDS GRID
        ================================================= */}

        <div
          className="
            grid
            grid-cols-1
            gap-x-7
            gap-y-12
            sm:grid-cols-2
            lg:grid-cols-3
            xl:grid-cols-5
          "
        >
          {brands.map((brand, index) => (
            <BrandCard
              key={brand.name}
              brand={brand}
              index={index}
            />
          ))}
        </div>

        {/* =================================================
            BOTTOM MESSAGE
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
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
            mt-14
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
              size={17}
              className="text-[#55764f]"
            />

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
