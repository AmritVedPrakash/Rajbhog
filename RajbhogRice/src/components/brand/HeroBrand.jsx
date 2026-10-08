import { Link } from "react-router-dom";
import { Crown, Wheat, ArrowRight } from "lucide-react";
import heroBanner from "../../assets/brand/banner.png";

export default function HeroBrand() {
  return (
    <section className="w-full overflow-hidden bg-[#f8f8ef] pt-[76px] sm:pt-[82px]">
      {/* Hero Image */}
      <div className="relative w-full">
        <img
          src={heroBanner}
          alt="Our Rice Brands"
          className="w-full h-auto block object-cover object-center"
        />

        {/* Cards */}
        <div className="relative mx-auto mt-4 w-full max-w-[1200px] px-5 pb-10 md:absolute md:bottom-[-1px] md:left-1/2 md:mt-0 md:-translate-x-1/2 md:pb-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">

            {/* Flagship Brands */}
            <Link
              to="/brands/flagship-brands"
              className="group relative flex min-h-[105px] items-center gap-4 rounded-xl border border-[#e9e3d8] bg-white p-5 shadow-[0_4px_20px_rgba(0,0,0,0.12)] transition-transform hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7b2025] md:p-6"
            >
              
              {/* Icon */}
              <div className="flex-shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#c99b4a] flex items-center justify-center">
                <Crown
                  size={30}
                  strokeWidth={1.8}
                  className="text-white"
                />
              </div>

              {/* Content */}
              <div className="flex-1 pr-7">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] md:text-xs font-semibold text-[#b18a43]">
                    01
                  </span>

                  <h3 className="text-[#6b2024] text-base md:text-lg font-semibold">
                    Flagship Brands
                  </h3>
                </div>

                <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                  Our leading rice brands with comprehensive product portfolios.
                </p>
              </div>

              {/* Arrow */}
              <span className="absolute right-4 top-1/2 flex h-8 w-8 -translate-y-1/2 flex-shrink-0 items-center justify-center rounded-full bg-[#7b2025] text-white transition-colors group-hover:bg-[#5f181c] md:right-5">
                <ArrowRight size={16} />
              </span>
            </Link>

            {/* Signature Rice Collection */}
            <Link
              to="/brands/signature-rice-collection"
              className="group relative flex min-h-[105px] items-center gap-4 rounded-xl border border-[#e9e3d8] bg-white p-5 shadow-[0_4px_20px_rgba(0,0,0,0.12)] transition-transform hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7b2025] md:p-6"
            >

              {/* Icon */}
              <div className="flex-shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#c99b4a] flex items-center justify-center">
                <Wheat
                  size={30}
                  strokeWidth={1.8}
                  className="text-white"
                />
              </div>

              {/* Content */}
              <div className="flex-1 pr-7">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] md:text-xs font-semibold text-[#b18a43]">
                    02
                  </span>

                  <h3 className="text-[#6b2024] text-base md:text-lg font-semibold">
                    Signature Rice Collection
                  </h3>
                </div>

                <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                  An extensive collection of established rice brands for
                  diverse consumer, retail, foodservice and international
                  market requirements.
                </p>
              </div>

              {/* Arrow */}
              <span className="absolute right-4 top-1/2 flex h-8 w-8 -translate-y-1/2 flex-shrink-0 items-center justify-center rounded-full bg-[#7b2025] text-white transition-colors group-hover:bg-[#5f181c] md:right-5">
                <ArrowRight size={16} />
              </span>
            </Link>

          </div>
        </div>
      </div>
      <div className="h-6 bg-[#f8f8ef] md:h-16" />
    </section>
  );
}