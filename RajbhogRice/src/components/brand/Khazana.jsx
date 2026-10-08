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

// ─────────────────────────────────────────────
// Product Images — Khazana
// ─────────────────────────────────────────────
import premium from "../../assets/brand/khazana/premium.png";
import superMogra from "../../assets/brand/khazana/super-mogra.png";
import mogra from "../../assets/brand/khazana/mogra.png";
import dubar from "../../assets/brand/khazana/dubar.png";
import special from "../../assets/brand/khazana/special.png";
import superDubar from "../../assets/brand/khazana/super-dubar.png";
import miniMogra from "../../assets/brand/khazana/mini-mogra.png";
import tiniMogra from "../../assets/brand/khazana/tini-mogra.png";

// ─────────────────────────────────────────────
// Product Data
// ─────────────────────────────────────────────
const products = [
  {
    id: 1,
    number: "01",
    name: "Premium",
    subtitle: "Premium Rice",
    tag: "Premium Quality",
    description: "Delicate grains with rich natural aroma",
    image: premium,
    fullName: "KHAZANA PREMIUM RICE",
    details:
      "Khazana Premium Rice represents the premium end of the Khazana portfolio and is designed for buyers seeking a more elevated rice offering. As part of a broad multi-variety range, it gives retailers, distributors and wholesalers an option for serving customers looking for premium rice for household consumption and traditional meals.",
    productCategory: "Premium Rice",
    grade: "Premium",
    positioning: "Premium rice offering",
    bestFor:
      "Retailers, premium households, distributors, wholesalers and export markets",
    packs: "1 kg / 5 kg / 10 kg / 20 kg / 25 kg",
    websiteHighlight:
      "A premium rice selection created for consumers and markets seeking an elevated everyday rice experience.",
    highlights: [
      "Premium end of the Khazana portfolio",
      "Part of a broad multi-variety range",
      "For household consumption and traditional meals",
      "Suitable for retail, distribution and export markets",
    ],
  },
  {
    id: 2,
    number: "02",
    name: "Super Mogra",
    subtitle: "Mogra Rice",
    tag: "Super Quality",
    description: "Aromatic grains with delightful soft texture",
    image: superMogra,
    fullName: "KHAZANA SUPER MOGRA RICE",
    details:
      "Khazana Super Mogra Rice is one of the specialty varieties within the Khazana portfolio. It expands the brand's offering into the Mogra segment and provides buyers with a distinct rice option for everyday and traditional cooking. Its inclusion in the broad Khazana range makes it suitable for retailers and distributors serving diverse consumer preferences.",
    productCategory: "Super Mogra Rice",
    grade: "Super Mogra",
    positioning: "Specialty Mogra rice",
    bestFor: "Retailers, households, wholesalers, distributors and export markets",
    packs: "1 kg / 5 kg / 10 kg / 20 kg / 25 kg",
    websiteHighlight:
      "A distinctive Super Mogra selection for traditional meals and everyday rice consumption.",
    highlights: [
      "Specialty variety in the Khazana portfolio",
      "Expands the brand's Mogra selection",
      "Suitable for everyday and traditional cooking",
      "For buyers serving diverse consumer preferences",
    ],
  },
  {
    id: 3,
    number: "03",
    name: "Mogra",
    subtitle: "Mogra Rice",
    tag: "Mogra Quality",
    description: "Fragrant grains for delicious everyday meals",
    image: mogra,
    fullName: "KHAZANA MOGRA RICE",
    details:
      "Khazana Mogra Rice is a core variety within the brand's diversified rice portfolio. It offers buyers a Mogra rice option alongside Super Mogra, Mini Mogra and Tini Mogra, allowing the Khazana brand to address different market preferences within this category.",
    productCategory: "Mogra Rice",
    grade: "Mogra",
    positioning: "Mogra rice for everyday and traditional consumption",
    bestFor:
      "Retailers, wholesalers, distributors, households and export markets",
    packs: "1 kg / 5 kg / 10 kg / 20 kg / 25 kg",
    websiteHighlight:
      "A versatile Mogra rice option for traditional cooking and everyday consumption.",
    highlights: [
      "Core variety in Khazana's diversified portfolio",
      "Available alongside Super Mogra, Mini Mogra and Tini Mogra",
      "For everyday and traditional consumption",
      "Serves different market preferences",
    ],
  },
  {
    id: 4,
    number: "04",
    name: "Dubar",
    subtitle: "Dubar Rice",
    tag: "Dubar Quality",
    description: "Tasty grains for wholesome family meals",
    image: dubar,
    fullName: "KHAZANA DUBAR RICE",
    details:
      "Khazana Dubar Rice provides a differentiated rice option within the Khazana range, complementing the brand's premium and Mogra varieties. It is suited to value-conscious and everyday rice markets, giving retailers and distributors another option for serving varied consumer requirements.",
    productCategory: "Dubar Rice",
    grade: "Dubar",
    positioning: "Value-oriented rice variety",
    bestFor:
      "Retailers, wholesalers, distributors, households and everyday consumption",
    packs: "1 kg / 5 kg / 10 kg / 20 kg / 25 kg",
    websiteHighlight:
      "A practical rice selection for everyday consumption and value-focused markets.",
    highlights: [
      "Differentiated option in the Khazana range",
      "Complements premium and Mogra varieties",
      "Suited to value-conscious, everyday rice markets",
      "For varied consumer requirements",
    ],
  },
  {
    id: 5,
    number: "05",
    name: "Special",
    subtitle: "Special Rice",
    tag: "Special Quality",
    description: "Selected grains for flavorful rice dishes",
    image: special,
    fullName: "KHAZANA SPECIAL RICE",
    details:
      "Khazana Special Rice offers a differentiated selection within the Khazana portfolio, positioned between the brand's premium and specialty varieties. It gives retailers and distributors additional flexibility when serving customers with different rice preferences and requirements.",
    productCategory: "Special Rice",
    grade: "Special",
    positioning: "Special-grade rice",
    bestFor: "Retailers, households, wholesalers, distributors and export markets",
    packs: "1 kg / 5 kg / 10 kg / 20 kg / 25 kg",
    websiteHighlight:
      "A versatile special-grade rice offering for diverse consumer and market requirements.",
    highlights: [
      "Differentiated selection in the Khazana portfolio",
      "Positioned between premium and specialty varieties",
      "Offers flexibility for different rice preferences",
      "For retail, distribution and export markets",
    ],
  },
  {
    id: 6,
    number: "06",
    name: "Super Dubar",
    subtitle: "Dubar Rice",
    tag: "Super Quality",
    description: "Quality grains with pleasant natural aroma",
    image: superDubar,
    fullName: "KHAZANA SUPER DUBAR RICE",
    details:
      "Khazana Super Dubar Rice is a distinct variety within the Khazana portfolio, offering buyers an additional option within the Dubar segment. Its inclusion alongside Premium, Mogra and other varieties strengthens Khazana's ability to serve different rice preferences and market segments.",
    productCategory: "Super Dubar Rice",
    grade: "Super Dubar",
    positioning: "Specialty Dubar variety",
    bestFor: "Retailers, wholesalers, distributors and value-focused markets",
    packs: "1 kg / 5 kg / 10 kg / 20 kg / 25 kg",
    websiteHighlight:
      "A distinctive Super Dubar selection expanding choice across the Khazana rice portfolio.",
    highlights: [
      "Distinct variety in the Khazana portfolio",
      "Additional option within the Dubar segment",
      "Complements Premium, Mogra and other varieties",
      "For value-focused markets and distribution",
    ],
  },
  {
    id: 7,
    number: "07",
    name: "Mini Mogra",
    subtitle: "Mogra Rice",
    tag: "Mini Mogra",
    description: "Small aromatic grains for everyday cooking",
    image: miniMogra,
    fullName: "KHAZANA MINI MOGRA RICE",
    details:
      "Khazana Mini Mogra Rice is part of the brand's dedicated Mogra collection and provides an additional choice for buyers seeking a differentiated Mogra variety. Together with Super Mogra, Mogra and Tini Mogra, it demonstrates the breadth of Khazana's offering within this rice category.",
    productCategory: "Mini Mogra Rice",
    grade: "Mini Mogra",
    positioning: "Specialty Mogra variety",
    bestFor: "Retailers, wholesalers, distributors and households",
    packs: "1 kg / 5 kg / 10 kg / 20 kg / 25 kg",
    websiteHighlight:
      "A distinctive Mini Mogra variety for diverse household and retail rice requirements.",
    highlights: [
      "Part of Khazana's dedicated Mogra collection",
      "Differentiated Mogra variety for buyers",
      "Available alongside Super Mogra, Mogra and Tini Mogra",
      "For household and retail requirements",
    ],
  },
  {
    id: 8,
    number: "08",
    name: "Tini Mogra",
    subtitle: "Mogra Rice",
    tag: "Tini Mogra",
    description: "Fine grains with delicate aromatic flavor",
    image: tiniMogra,
    fullName: "KHAZANA TINI MOGRA RICE",
    details:
      "Khazana Tini Mogra Rice completes the Mogra-focused portion of the Khazana portfolio, offering buyers another differentiated variety within this category. Its inclusion gives retailers and distributors greater flexibility when serving markets with varied rice preferences.",
    productCategory: "Tini Mogra Rice",
    grade: "Tini Mogra",
    positioning: "Specialty Mogra variety",
    bestFor: "Retailers, wholesalers, distributors and everyday rice markets",
    packs: "1 kg / 5 kg / 10 kg / 20 kg / 25 kg",
    websiteHighlight:
      "A distinctive Tini Mogra selection offering greater choice within the Khazana portfolio.",
    highlights: [
      "Completes the Mogra-focused Khazana range",
      "Differentiated variety within the Mogra category",
      "Adds flexibility for retailers and distributors",
      "For markets with varied rice preferences",
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
        {/* Image Glow */}
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
          alt={product.name}
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

        {/* Product Tag */}
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
            text-[27px]
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

        {/* Gold Divider */}
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

        {/* Brand Quality */}
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
          Khazana Premium Quality
        </div>
      </div>
    </motion.div>
  );
};

// ─────────────────────────────────────────────
// Main Component
// ─────────────────────────────────────────────
export default function Khazana() {
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
            Khazana Rice
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
              Rice Range
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
            Discover Khazana rice varieties crafted for
            aroma, quality and delicious everyday meals.
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
          Fine grains. Rich aroma. Everyday excellence.
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="khazana-product-title"
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
                    KHAZANA RICE COLLECTION
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
                    id="khazana-product-title"
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
                        Product Category
                      </p>
                      <p className="mt-1 text-xs font-semibold leading-5 text-[#30452e]">
                        {selectedProduct.productCategory}
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