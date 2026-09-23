import React, { useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import {
  ArrowUpRight,
  Sparkles,
  Leaf,
  Star,
} from "lucide-react";

import RajbhogRice1 from "../../assets/home/rajbhogrice1.png";
import RajbhogRice2 from "../../assets/home/rajbhogrice2.png";
import RajbhogRice3 from "../../assets/home/rajbhogrice3.png";


// =====================================================
// PRODUCT DATA
// =====================================================

const products = [
  {
    name: "Rajbhog Biryani",
    description:
      "Long, aromatic grains that remain perfectly separate and non-sticky, making every biryani and pulao truly special.",
    image: RajbhogRice1,
    tag: "Aromatic & Flavourful",
    number: "01",

    // Left side
    hidden: {
      x: -180,
      y: 40,
      rotate: -8,
      scale: 0.88,
      opacity: 0,
    },
  },

  {
    name: "Rajbhog Classic",
    description:
      "Premium long-grain basmati rice with exceptional aroma, fluffy texture and a naturally delicious taste.",
    image: RajbhogRice2,
    tag: "Premium Long Grain",
    number: "02",

    // Bottom
    hidden: {
      x: 0,
      y: 180,
      rotate: 0,
      scale: 0.88,
      opacity: 0,
    },
  },

  {
    name: "Rajbhog Everyday",
    description:
      "A versatile everyday rice crafted to complement diverse cuisines and bring deliciousness to every meal.",
    image: RajbhogRice3,
    tag: "Perfect Everyday Rice",
    number: "03",

    // Right side
    hidden: {
      x: 180,
      y: 40,
      rotate: 8,
      scale: 0.88,
      opacity: 0,
    },
  },
];


// =====================================================
// SMOOTH ANIMATION
// =====================================================

function AnimatedProductCard({ product }) {
  const ref = React.useRef(null);

  const controls = useAnimation();

  const isInView = useInView(ref, {
    once: false,
    amount: 0.25,
  });


  useEffect(() => {
    if (isInView) {
      // Enter animation
      controls.start({
        x: 0,
        y: 0,
        rotate: 0,
        scale: 1,
        opacity: 1,

        transition: {
          type: "spring",
          stiffness: 65,
          damping: 16,
          mass: 0.9,
        },
      });
    } else {
      // Reverse animation
      controls.start({
        ...product.hidden,

        transition: {
          type: "spring",
          stiffness: 65,
          damping: 18,
          mass: 0.9,
        },
      });
    }
  }, [isInView, controls, product.hidden]);


  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial={product.hidden}
      className="relative group"
    >

      {/* =================================================
          PRODUCT IMAGE AREA
      ================================================= */}

      <motion.div
        animate={{
          y: [0, -7, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          relative
          z-20

          h-[270px]
          sm:h-[300px]
          lg:h-[325px]

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

            bottom-5
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


        {/* Rice Image */}

        <img
          src={product.image}
          alt={product.name}
          className="
            relative
            z-10

            max-h-[290px]
            sm:max-h-[320px]
            lg:max-h-[345px]

            max-w-[82%]

            object-contain

            drop-shadow-[0_25px_30px_rgba(0,0,0,0.22)]

            transition-transform
            duration-700

            group-hover:scale-[1.04]
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

          min-h-[330px]

          rounded-[30px]

          border
          border-[#b9a24a]/30

          bg-gradient-to-br
          from-[#f5f3d9]
          via-[#e9eab6]
          to-[#dbe477]

          px-6
          sm:px-8

          pt-14
          pb-8

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
            left-10
            right-10

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
            top-5
            left-6

            font-serif

            text-4xl

            font-bold

            text-[#30452e]/10
          "
        >
          {product.number}
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

            px-4
            py-1.5
          "
        >
          <Sparkles
            size={13}
            className="text-[#947522]"
          />

          <span
            className="
              text-[10px]
              sm:text-xs

              uppercase

              tracking-[0.14em]

              font-semibold

              text-[#59622f]
            "
          >
            {product.tag}
          </span>
        </div>


        {/* Title */}

        <h3
          className="
            font-serif

            text-2xl
            sm:text-3xl
            lg:text-[31px]

            font-semibold

            text-[#263c29]

            mb-3
          "
        >
          {product.name}
        </h3>


        {/* Decorative Divider */}

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
              w-9
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
              w-9
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

            leading-7

            text-[#3e4b3c]/80
          "
        >
          {product.description}
        </p>


        {/* Bottom */}

        <div
          className="
            flex
            items-center
            justify-center
            gap-2

            mt-6

            text-sm
            font-semibold

            text-[#66571e]
          "
        >
          <Leaf size={16} />

          <span>
            Crafted with Care
          </span>

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
// MAIN COMPONENT
// =====================================================

export default function OurProduct() {

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

            w-[550px]
            h-[550px]

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

            w-[400px]
            h-[400px]

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

            w-[400px]
            h-[400px]

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

        {/* =================================================
            SECTION HEADER
        ================================================= */}

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

            mb-16
            lg:mb-20
          "
        >

          {/* Small Label */}

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

            <Star
              size={14}
              className="text-[#d8be61]"
              fill="currentColor"
            />

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
              Our Finest Collection
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
            Rice Crafted for

            <span
              className="
                block

                mt-1

                text-[#a9892d]
              "
            >
              Every Occasion
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
            From aromatic biryani to everyday family meals,
            discover the Rajbhog collection crafted with
            purity, tradition and uncompromising quality.
          </p>

        </motion.div>


        {/* =================================================
            PRODUCTS
        ================================================= */}

        <div
          className="
            grid

            grid-cols-1
            md:grid-cols-3

            gap-12
            md:gap-7
            lg:gap-9

            items-start
          "
        >

          {products.map((product) => (
            <AnimatedProductCard
              key={product.name}
              product={product}
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
            flex
            justify-center

            mt-16
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
              Pure grains. Royal taste. Trusted quality.
            </span>

          </div>

        </motion.div>

      </div>

    </section>
  );
}