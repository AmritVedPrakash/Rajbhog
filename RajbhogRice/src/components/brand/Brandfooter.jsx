import React from "react";
import brandFooterBg from "../../assets/brand/brand-footer.png";

export default function Brandfooter() {
  return (
    <section
      className="w-full overflow-hidden"
      style={{
        backgroundImage: `url(${brandFooterBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="min-h-[120px] md:min-h-[150px] flex items-center">
        <div className="w-full max-w-7xl mx-auto px-5 md:px-10">
          <div className="flex items-center justify-center md:justify-end">

            {/* Right Side Content */}
            <div className="text-center md:text-left">

              <h2 className="text-[#8b2c20] font-serif font-bold text-xl sm:text-2xl md:text-3xl leading-tight">
                47+ Trusted Rice Brands
              </h2>

              <p className="text-[#6b4635] text-xs sm:text-sm md:text-base mt-1">
                Serving Global Markets
              </p>

              <div className="flex flex-wrap justify-center md:justify-start gap-4 sm:gap-6 md:gap-8 mt-3">

                {/* Households */}
                <div className="text-center">
                  <span className="text-[#6b4635] text-[20px]">⌂</span>
                  <p className="text-[15px] text-[#4f392d]">
                    Households
                  </p>
                </div>

                {/* Retailers */}
                <div className="text-center">
                  <span className="text-[#6b4635] text-[20px]">▣</span>
                  <p className="text-[15px] text-[#4f392d]">
                    Retailers
                  </p>
                </div>

                {/* Restaurants */}
                <div className="text-center">
                  <span className="text-[#6b4635] text-[20px]">♧</span>
                  <p className="text-[15px] text-[#4f392d]">
                    Restaurants
                  </p>
                </div>

                {/* Distributors */}
                <div className="text-center">
                  <span className="text-[#6b4635] text-[20px]">▥</span>
                  <p className="text-[15px] text-[#4f392d]">
                    Distributors
                  </p>
                </div>

                {/* Export Markets */}
                <div className="text-center">
                  <span className="text-[#6b4635] text-[20px]">✈</span>
                  <p className="text-[15px] text-[#4f392d]">
                    Export Markets
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}