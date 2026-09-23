import React, { useEffect, useRef } from "react";

// =====================================================
// LOAD ALL 140 FRAMES
// =====================================================

const frameModules = import.meta.glob(
  "../../assets/home/frames/ezgif-frame-*.jpg",
  {
    eager: true,
    query: "?url",
    import: "default",
  }
);

// Sort frames numerically
const frameUrls = Object.entries(frameModules)
  .sort(([a], [b]) => {
    const numA = parseInt(
      a.match(/ezgif-frame-(\d+)\.jpg$/)?.[1] || "0"
    );

    const numB = parseInt(
      b.match(/ezgif-frame-(\d+)\.jpg$/)?.[1] || "0"
    );

    return numA - numB;
  })
  .map(([, url]) => url);


// =====================================================
// COMPONENT
// =====================================================

export default function AnimatedRice() {
  const sectionRef = useRef(null);
  const canvasRef = useRef(null);

  const imagesRef = useRef([]);
  const currentFrameRef = useRef(0);
  const animationFrameRef = useRef(null);


  // ===================================================
  // PRELOAD ALL FRAMES
  // ===================================================

  useEffect(() => {
    const images = [];

    frameUrls.forEach((src, index) => {
      const img = new Image();

      img.decoding = "async";
      img.loading = "eager";
      img.src = src;

      img.onload = () => {
        images[index] = img;

        // Draw first frame immediately
        if (index === 0) {
          drawFrame(img);
        }
      };

      images[index] = img;
    });

    imagesRef.current = images;

    return () => {
      imagesRef.current = [];
    };
  }, []);


  // ===================================================
  // DRAW FRAME
  // ===================================================

  const drawFrame = (img) => {
    const canvas = canvasRef.current;

    if (
      !canvas ||
      !img ||
      !img.complete ||
      !img.naturalWidth
    ) {
      return;
    }

    /*
      Keep canvas at original image resolution
      for maximum quality.
    */

    if (
      canvas.width !== img.naturalWidth ||
      canvas.height !== img.naturalHeight
    ) {
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
    }

    const ctx = canvas.getContext("2d");

    ctx.clearRect(
      0,
      0,
      canvas.width,
      canvas.height
    );

    ctx.drawImage(
      img,
      0,
      0,
      img.naturalWidth,
      img.naturalHeight
    );
  };


  // ===================================================
  // SCROLL ANIMATION
  // ===================================================

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;

      if (!section) return;

      const rect =
        section.getBoundingClientRect();

      const scrollDistance =
        section.offsetHeight -
        window.innerHeight;

      if (scrollDistance <= 0) return;

      let progress =
        -rect.top / scrollDistance;

      progress = Math.max(
        0,
        Math.min(1, progress)
      );

      const frameIndex = Math.min(
        frameUrls.length - 1,
        Math.floor(
          progress *
            (frameUrls.length - 1)
        )
      );

      if (
        frameIndex ===
        currentFrameRef.current
      ) {
        return;
      }

      currentFrameRef.current =
        frameIndex;

      const img =
        imagesRef.current[frameIndex];

      if (
        !img ||
        !img.complete
      ) {
        return;
      }

      if (animationFrameRef.current) {
        cancelAnimationFrame(
          animationFrameRef.current
        );
      }

      animationFrameRef.current =
        requestAnimationFrame(() => {
          drawFrame(img);
        });
    };

    window.addEventListener(
      "scroll",
      handleScroll,
      { passive: true }
    );

    handleScroll();

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );

      if (animationFrameRef.current) {
        cancelAnimationFrame(
          animationFrameRef.current
        );
      }
    };
  }, []);


  // ===================================================
  // RESIZE
  // ===================================================

  useEffect(() => {
    const handleResize = () => {
      const currentImage =
        imagesRef.current[
          currentFrameRef.current
        ];

      if (currentImage) {
        drawFrame(currentImage);
      }
    };

    window.addEventListener(
      "resize",
      handleResize
    );

    return () => {
      window.removeEventListener(
        "resize",
        handleResize
      );
    };
  }, []);


  // ===================================================
  // UI
  // ===================================================

  return (
    <section
      ref={sectionRef}
      className="
        relative
        w-full
        h-[300vh]
        m-0
        p-0
      "
    >

      {/* =================================================
          STICKY FULL SCREEN
      ================================================= */}

      <div
        className="
          sticky
          top-0
          left-0
          w-full
          h-screen
          overflow-hidden
          m-0
          p-0
        "
      >

        {/* =================================================
            FULL SCREEN FRAME
        ================================================= */}

        <canvas
          ref={canvasRef}
          className="
            absolute
            inset-0
            z-0

            w-screen
            h-screen

            max-w-none
            max-h-none

            object-cover
          "
        />


        {/* =================================================
            SUBTLE TEXT VISIBILITY OVERLAY

            Transparent — no card/background
        ================================================= */}

        <div
          className="
            absolute
            inset-x-0
            top-0
            h-[55%]
            z-10
            pointer-events-none

            bg-gradient-to-b
            from-black/65
            via-black/25
            to-transparent
          "
        />


        {/* =================================================
            TEXT
        ================================================= */}

        <div
          className="
            absolute
            top-0
            left-0
            right-0

            z-20

            flex
            justify-center

            px-5
            sm:px-8
            md:px-12

            pt-10
            sm:pt-12
            md:pt-16
            lg:pt-20

            pointer-events-none
          "
        >

          <div
            className="
              w-full
              max-w-6xl
              text-center
            "
          >

            {/* Small Premium Label */}

            <div
              className="
                inline-flex
                items-center
                gap-3

                mb-4
                sm:mb-5

                px-4
                py-1.5

                rounded-full

                border
                border-white/30

                bg-black/20
                backdrop-blur-sm
              "
            >
              <span
                className="
                  w-2
                  h-2
                  rounded-full
                  bg-[#e1bd55]
                  shadow-[0_0_12px_rgba(225,189,85,0.8)]
                "
              />

              <span
                className="
                  text-[10px]
                  sm:text-xs
                  md:text-sm

                  font-semibold

                  tracking-[0.25em]

                  uppercase

                  text-white
                "
              >
                Premium Basmati Rice
              </span>
            </div>


            {/* =================================================
                MAIN HEADING
            ================================================= */}

            <h1
              className="
                font-serif
                font-semibold

                text-white

                text-3xl
                sm:text-4xl
                md:text-5xl
                lg:text-6xl
                xl:text-7xl

                leading-[1.05]

                tracking-tight

                drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]
              "
            >
              Rice Manufacturer, Supplier

              <span
                className="
                  block

                  text-[#e4c45f]

                  drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]
                "
              >
                & Exporter in India
              </span>
            </h1>


            {/* =================================================
                GOLD DECORATION
            ================================================= */}

            <div
              className="
                flex
                items-center
                justify-center

                gap-3

                my-4
                sm:my-5
              "
            >

              <div
                className="
                  w-12
                  sm:w-20
                  md:w-28

                  h-[1.5px]

                  bg-[#e4c45f]

                  shadow-[0_0_8px_rgba(228,196,95,0.5)]
                "
              />

              <div
                className="
                  w-2.5
                  h-2.5

                  rotate-45

                  bg-[#e4c45f]

                  shadow-[0_0_8px_rgba(228,196,95,0.6)]
                "
              />

              <div
                className="
                  w-12
                  sm:w-20
                  md:w-28

                  h-[1.5px]

                  bg-[#e4c45f]

                  shadow-[0_0_8px_rgba(228,196,95,0.5)]
                "
              />

            </div>


            {/* =================================================
                SUBTITLE
            ================================================= */}

            <h2
              className="
                max-w-4xl
                mx-auto

                font-serif
                font-medium

                text-white

                text-base
                sm:text-lg
                md:text-xl
                lg:text-2xl
                xl:text-3xl

                leading-relaxed

                drop-shadow-[0_3px_10px_rgba(0,0,0,0.9)]
              "
            >
              Welcome to Rajbhog Rice –
              <span className="text-[#e4c45f]">
                {" "}The Royal Choice of Basmati Rice!
              </span>
            </h2>

          </div>
        </div>


        {/* =================================================
            SCROLL INDICATOR
        ================================================= */}

        <div
          className="
            absolute

            bottom-6
            sm:bottom-8

            left-1/2
            -translate-x-1/2

            z-30

            flex
            flex-col
            items-center

            gap-2

            pointer-events-none
          "
        >

          <span
            className="
              text-[9px]
              sm:text-xs

              uppercase

              tracking-[0.3em]

              font-semibold

              text-white

              drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]
            "
          >
            Scroll to explore
          </span>

          <div
            className="
              w-7
              h-11

              rounded-full

              border
              border-white/70

              bg-black/10
              backdrop-blur-sm

              flex
              justify-center

              pt-2
            "
          >

            <div
              className="
                w-1
                h-2.5

                rounded-full

                bg-[#e4c45f]

                animate-bounce
              "
            />

          </div>

        </div>

      </div>
    </section>
  );
}