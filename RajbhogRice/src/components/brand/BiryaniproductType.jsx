import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  Award,
  CheckCircle2,
  Sparkles,
  Leaf,
  Star,
  Utensils,
  Wheat,
  X,
} from "lucide-react";
import RelatedBrandProducts from "./RelatedBrandProducts.jsx";

// ─────────────────────────────────────────────
// Product Images — Biryani
// ─────────────────────────────────────────────
import platinum from "../../assets/brand/biryani/platinum.png";
import diamond from "../../assets/brand/biryani/diamond.png";
import gold from "../../assets/brand/biryani/gold.png";
import silver from "../../assets/brand/biryani/silver.png";

// ─────────────────────────────────────────────
// Product Data
// ─────────────────────────────────────────────
const products = [
  {
    id: 1,
    number: "01",
    name: "Platinum",
    subtitle: "Biryani Rice",
    tag: "Premium Quality",
    description: "Extra-long grains for rich flavorful biryani",
    image: platinum,
    fullName: "BIRYANI NO. 1 PLATINUM",
    details:
      "Biryani No. 1 Platinum represents the highest grade within the Biryani No. 1 portfolio. It is positioned for consumers and professional foodservice buyers seeking a premium-oriented rice option specifically suited to biryani and other rich rice preparations. The product is particularly relevant for restaurants, caterers, hospitality businesses and premium retail channels where biryani is an important part of the culinary offering.",
    riceType: "Biryani Rice",
    grade: "Platinum",
    positioning: "Premium biryani-focused rice",
    bestFor:
      "Restaurants, caterers, hotels, premium retail and foodservice distributors",
    packs: "1 kg / 5 kg / 10 kg / 25 kg",
    websiteHighlight:
      "A premium-grade rice selection created for biryani and distinguished rice preparations.",
    highlights: [
      "Highest grade within the Biryani No. 1 portfolio",
      "Premium-oriented rice for biryani and rich preparations",
      "For restaurants, caterers and hospitality businesses",
      "Suitable for premium retail and foodservice",
    ],
  },
  {
    id: 2,
    number: "02",
    name: "Diamond",
    subtitle: "Biryani Rice",
    tag: "Diamond Quality",
    description: "Elegant grains for aromatic delicious biryani",
    image: diamond,
    fullName: "BIRYANI NO. 1 DIAMOND",
    details:
      "Biryani No. 1 Diamond offers a high-grade rice option within the brand's biryani-focused portfolio. It is designed for consumers and commercial buyers seeking a dependable rice selection for biryani, traditional rice dishes and rich meal preparations. The product is well suited to restaurants, caterers and foodservice operators requiring a branded rice option for regular commercial use.",
    riceType: "Biryani Rice",
    grade: "Diamond",
    positioning: "High-grade biryani rice",
    bestFor: "Restaurants, caterers, hotels, foodservice distributors and retail",
    packs: "1 kg / 5 kg / 10 kg / 25 kg",
    websiteHighlight:
      "A high-grade rice option designed for biryani, traditional cuisine and professional foodservice.",
    highlights: [
      "High-grade choice in the biryani-focused portfolio",
      "Dependable rice for biryani and traditional dishes",
      "Suitable for rich meal preparations",
      "For restaurants, caterers and foodservice operators",
    ],
  },
  {
    id: 3,
    number: "03",
    name: "Gold",
    subtitle: "Biryani Rice",
    tag: "Gold Quality",
    description: "Long grains for perfectly cooked biryani",
    image: gold,
    fullName: "BIRYANI NO. 1 GOLD",
    details:
      "Biryani No. 1 Gold is positioned as a versatile biryani rice option within the portfolio. It is suitable for restaurants, catering businesses and households preparing biryani and other traditional rice dishes. Its Gold grade provides buyers with a practical choice within the brand's structured range.",
    riceType: "Biryani Rice",
    grade: "Gold",
    positioning: "Versatile biryani-focused rice",
    bestFor:
      "Restaurants, caterers, households, ethnic-food retailers and distributors",
    packs: "1 kg / 5 kg / 10 kg / 25 kg",
    websiteHighlight:
      "A versatile biryani rice selection for households, restaurants and traditional rice cuisine.",
    highlights: [
      "Versatile biryani rice option within the portfolio",
      "Practical choice in the structured Biryani No. 1 range",
      "Suitable for households and catering businesses",
      "For restaurants, ethnic-food retail and distribution",
    ],
  },
  {
    id: 4,
    number: "04",
    name: "Silver",
    subtitle: "Biryani Rice",
    tag: "Everyday Quality",
    description: "Aromatic grains for tasty homemade biryani",
    image: silver,
    fullName: "BIRYANI NO. 1 SILVER",
    details:
      "Biryani No. 1 Silver provides an accessible option within the Biryani No. 1 range, designed around regular consumption and commercial biryani preparation. It is suitable for households, restaurants, caterers and retailers looking for a practical branded rice option specifically associated with biryani and traditional rice dishes.",
    riceType: "Biryani Rice",
    grade: "Silver",
    positioning: "Accessible biryani rice",
    bestFor:
      "Households, restaurants, caterers, ethnic-food retailers and distributors",
    packs: "1 kg / 5 kg / 10 kg / 25 kg",
    websiteHighlight:
      "A practical biryani rice option for everyday traditional meals and commercial foodservice.",
    highlights: [
      "Accessible option within the Biryani No. 1 range",
      "Designed for regular consumption and commercial preparation",
      "Suitable for biryani and traditional rice dishes",
      "For households, foodservice and retail",
    ],
  },
];

// ─────────────────────────────────────────────
// Product Card
// ─────────────────────────────────────────────
const ProductCard = ({ product, onViewProduct }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 60,
        rotate: -2,
        scale: 0.96,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        rotate: 0,
        scale: 1,
      }}
      viewport={{
        once: false,
        amount: 0.2,
      }}
      transition={{
        duration: 0.7,
        type: "spring",
        stiffness: 90,
        damping: 16,
      }}
      className="group relative"
    >
      {/* ───────────────── Image Area ───────────────── */}
      <div className="relative z-20 flex h-[285px] items-end justify-center pointer-events-none">
        {/* Glow */}
        <div
          className="
            absolute bottom-5 left-1/2
            h-20 w-44
            -translate-x-1/2
            rounded-full
            bg-[#c5a64b]/20
            blur-3xl
          "
        />

        {/* Ground Shadow */}
        <div
          className="
            absolute bottom-2 left-1/2
            h-5 w-28
            -translate-x-1/2
            rounded-[50%]
            bg-black/15
            blur-xl
          "
        />

        {/* Product Image */}
        <motion.img
          src={product.image}
          alt={`${product.name} Biryani Rice`}
          className="
            max-h-[270px]
            max-w-[84%]
            object-contain
            drop-shadow-[0_25px_30px_rgba(0,0,0,0.22)]
            transition-transform
            duration-700
            group-hover:scale-[1.05]
          "
          animate={{
            y: [0, -7, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* ───────────────── Card ───────────────── */}
      <div
        className="
          relative z-10
          -mt-9
          min-h-[325px]
          overflow-hidden
          rounded-[30px]
          border border-[#b9a24a]/30
          bg-gradient-to-br
          from-[#f5f3d9]
          via-[#e9eab6]
          to-[#dbe477]
          px-5 pt-14 pb-7
          text-center
          shadow-[0_18px_50px_rgba(40,60,30,0.12)]
          transition-all duration-500
          group-hover:-translate-y-2
          group-hover:shadow-[0_28px_65px_rgba(40,60,30,0.20)]
        "
      >
        {/* Decorative Number */}
        <span
          className="
            pointer-events-none
            absolute right-5 top-3
            text-[75px]
            font-black
            leading-none
            text-[#284934]/[0.06]
          "
        >
          {product.number}
        </span>

        {/* Top Gold Line */}
        <div
          className="
            absolute left-1/2 top-0
            h-[3px] w-20
            -translate-x-1/2
            rounded-full
            bg-[#b9a24a]
          "
        />

        {/* Tag */}
        <div
          className="
            relative z-10
            mx-auto mb-4
            flex w-fit items-center gap-1.5
            rounded-full
            border border-[#b9a24a]/30
            bg-[#284934]
            px-3.5 py-1.5
            text-[10px]
            font-semibold
            uppercase
            tracking-[0.16em]
            text-[#ead78b]
          "
        >
          <Sparkles size={11} />
          {product.tag}
        </div>

        {/* Product Name */}
        <h3
          className="
            relative z-10
            font-serif
            text-[28px]
            font-semibold
            leading-tight
            text-[#263d2a]
          "
        >
          {product.name}
        </h3>

        {/* Subtitle */}
        <p
          className="
            relative z-10
            mt-1
            text-[11px]
            font-semibold
            uppercase
            tracking-[0.18em]
            text-[#a9892d]
          "
        >
          {product.subtitle}
        </p>

        {/* Divider */}
        <div className="mx-auto my-4 flex items-center justify-center gap-2">
          <span className="h-px w-10 bg-[#b9a24a]/60" />

          <Star
            size={12}
            fill="currentColor"
            className="text-[#b9a24a]"
          />

          <span className="h-px w-10 bg-[#b9a24a]/60" />
        </div>

        {/* Description */}
        <p
          className="
            mx-auto
            max-w-[245px]
            text-sm
            leading-6
            text-[#536053]
          "
        >
          {product.description}
        </p>

        {/* Explore Button */}
        <motion.button
          type="button"
          onClick={() => onViewProduct(product)}
          whileHover={{
            scale: 1.04,
          }}
          whileTap={{
            scale: 0.97,
          }}
          className="
            mx-auto mt-5
            flex items-center gap-2
            rounded-full
            bg-[#284934]
            px-5 py-2.5
            text-xs
            font-semibold
            text-[#ead78b]
            shadow-[0_8px_20px_rgba(40,73,52,0.18)]
            transition-all duration-300
            hover:bg-[#1f3828]
          "
        >
          View Product
          <ArrowUpRight size={15} />
        </motion.button>

        {/* Bottom Brand Quality */}
        <div
          className="
            mt-5
            flex items-center justify-center gap-1.5
            text-[10px]
            font-medium
            uppercase
            tracking-[0.14em]
            text-[#536053]/80
          "
        >
          <Leaf size={12} className="text-[#71884a]" />
          Biryani Premium Quality
        </div>
      </div>
    </motion.div>
  );
};

// ─────────────────────────────────────────────
// Main Component
// ─────────────────────────────────────────────
export default function BiryaniproductType() {
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
    <section className="relative overflow-hidden bg-[#f8f8ef] py-20 md:py-24">
      {/* Background Glow */}
      <div
        className="
          pointer-events-none
          absolute -left-32 top-20
          h-72 w-72
          rounded-full
          bg-[#dbe477]/20
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute -right-32 bottom-10
          h-80 w-80
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
            duration: 0.7,
          }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          {/* Brand Pill */}
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
            Biryani Rice
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
            Premium{" "}
            <span className="text-[#a9892d]">
              Biryani Rice
            </span>
          </h2>

          {/* Gold Divider */}
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
          <p className="mx-auto max-w-2xl text-sm leading-7 text-[#536053] sm:text-base">
            Explore premium biryani rice, crafted for
            aromatic, flavorful and perfectly cooked meals.
          </p>
        </motion.div>

        {/* ───────────────── Product Grid ───────────────── */}
        <div
          className="
            grid
            grid-cols-1
            gap-x-6
            gap-y-14
            sm:grid-cols-2
            xl:grid-cols-4
          "
        >
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onViewProduct={setSelectedProduct}
            />
          ))}
        </div>

        {/* ───────────────── Bottom Message ───────────────── */}
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
            mx-auto mt-16
            flex w-fit items-center gap-2
            rounded-full
            border border-[#b9a24a]/25
            bg-[#284934]/5
            px-5 py-2.5
            text-xs
            font-medium
            text-[#536053]
          "
        >
          <Leaf size={14} className="text-[#71884a]" />
          Aromatic grains. Rich flavor. Perfect biryani.
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="biryani-product-title"
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
                    BIRYANI NO. 1 RICE COLLECTION
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
                    id="biryani-product-title"
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
              <RelatedBrandProducts
                products={products}
                selectedProduct={selectedProduct}
                brandName="Biryani No. 1"
                onSelect={setSelectedProduct}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}