import React, { useEffect, useState } from "react";

import banner1 from "../assets/home/banner1.png";
import banner2 from "../assets/home/banner2.png";
import banner3 from "../assets/home/banner3.png";

export default function HeroSection() {
  const images = [banner1, banner2, banner3];

  const [currentIndex, setCurrentIndex] = useState(0);

  // ==============================
  // AUTO CHANGE EVERY 3 SECONDS
  // ==============================
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        return (prevIndex + 1) % images.length;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // ==============================
  // PREVIOUS
  // ==============================
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => {
      return (prevIndex - 1 + images.length) % images.length;
    });
  };

  // ==============================
  // NEXT
  // ==============================
  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      return (prevIndex + 1) % images.length;
    });
  };

  return (
    /*
      Navbar is fixed.
      So we add top padding equal to navbar height.
    */
    <div className="pt-20">
      <section
        className="
          relative
          w-full
          overflow-hidden
          bg-[#f8f7f2]
        "
      >
        {/* ==================================================
            BASE IMAGE
            Keeps the exact aspect ratio of your banner.
            This prevents mobile layout problems.
        ================================================== */}
        <img
          src={images[0]}
          alt=""
          aria-hidden="true"
          className="
            block
            w-full
            h-auto
            invisible
            select-none
            pointer-events-none
          "
        />

        {/* ==================================================
            BANNERS
        ================================================== */}
        {images.map((image, index) => (
          <img
            key={image}
            src={image}
            alt={`Rajbhog Rice Banner ${index + 1}`}
            className={`
              absolute
              inset-0
              w-full
              h-full
              object-contain
              block
              select-none
              pointer-events-none
              transition-opacity
              duration-[1200ms]
              ease-in-out
              ${
                currentIndex === index
                  ? "opacity-100 z-[2]"
                  : "opacity-0 z-[1]"
              }
            `}
          />
        ))}

        {/* ==================================================
            LEFT ARROW
        ================================================== */}
        <button
          type="button"
          onClick={handlePrevious}
          aria-label="Previous banner"
          className="
            absolute
            left-2
            sm:left-4
            md:left-6
            top-1/2
            -translate-y-1/2

            z-10

            w-9
            h-9
            sm:w-11
            sm:h-11
            md:w-14
            md:h-14

            rounded-full

            flex
            items-center
            justify-center

            bg-black/30
            hover:bg-black/55
            backdrop-blur-sm

            text-white

            text-xl
            sm:text-2xl
            md:text-4xl

            transition-all
            duration-300

            hover:scale-110
            active:scale-95

            shadow-lg
          "
        >
          <span className="relative -left-[1px]">‹</span>
        </button>

        {/* ==================================================
            RIGHT ARROW
        ================================================== */}
        <button
          type="button"
          onClick={handleNext}
          aria-label="Next banner"
          className="
            absolute
            right-2
            sm:right-4
            md:right-6
            top-1/2
            -translate-y-1/2

            z-10

            w-9
            h-9
            sm:w-11
            sm:h-11
            md:w-14
            md:h-14

            rounded-full

            flex
            items-center
            justify-center

            bg-black/30
            hover:bg-black/55
            backdrop-blur-sm

            text-white

            text-xl
            sm:text-2xl
            md:text-4xl

            transition-all
            duration-300

            hover:scale-110
            active:scale-95

            shadow-lg
          "
        >
          <span className="relative left-[1px]">›</span>
        </button>

        {/* ==================================================
            DOTS
        ================================================== */}
        <div
          className="
            absolute
            bottom-3
            sm:bottom-4
            md:bottom-6

            left-1/2
            -translate-x-1/2

            z-10

            flex
            items-center
            gap-2
          "
        >
          {images.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to banner ${index + 1}`}
              className={`
                h-2
                sm:h-2.5

                rounded-full

                transition-all
                duration-500
                ease-out

                ${
                  currentIndex === index
                    ? `
                      w-7
                      sm:w-9
                      bg-white
                      shadow-md
                    `
                    : `
                      w-2
                      sm:w-2.5
                      bg-white/60
                      hover:bg-white/90
                    `
                }
              `}
            />
          ))}
        </div>
      </section>
    </div>
  );
}