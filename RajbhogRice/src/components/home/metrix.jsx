import React, { useEffect, useRef, useState } from "react";

// "50+" -> { value: 50, suffix: "+" }
// "2000" -> { value: 2000, suffix: "" }
function parseMetric(raw) {
  const match = raw.match(/^(\d+)(.*)$/);

  if (!match) {
    return {
      value: 0,
      suffix: raw,
    };
  }

  return {
    value: parseInt(match[1], 10),
    suffix: match[2],
  };
}

function CountUpNumber({ raw, start, duration = 1500 }) {
  const { value, suffix } = parseMetric(raw);

  const [display, setDisplay] = useState(0);
  const frameRef = useRef(null);

  useEffect(() => {
    if (!start) return;

    const startTime = performance.now();

    const tick = (now) => {
      const elapsed = now - startTime;

      const progress = Math.min(elapsed / duration, 1);

      // Smooth ease-out
      const eased = 1 - Math.pow(1 - progress, 3);

      setDisplay(Math.round(eased * value));

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(tick);
      }
    };

    frameRef.current = requestAnimationFrame(tick);

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [start, value, duration]);

  return (
    <>
      {display}
      {suffix}
    </>
  );
}

export default function Metrix() {
  const metrics = [
    {
      number: "50+",
      title: "Years of Experience",
    },
    {
      number: "2000",
      title: "MT per Week Supply Ability",
    },
    {
      number: "350",
      title: "MT per Day Production Capacity",
    },
    {
      number: "20+",
      title: "Export Countries",
    },
    {
      number: "100+",
      title: "Team Members",
    },
  ];

  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;

    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.2,
      }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="
        w-full
        bg-[#faf9f5]
        py-9
        sm:py-11
        md:py-14
        lg:py-16
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto
          px-4
          sm:px-6
          md:px-8
          lg:px-10
        "
      >
        {/* Metrics Grid */}
        <div
          className="
            grid
            grid-cols-2
            lg:grid-cols-5
            gap-y-9
            sm:gap-y-11
            lg:gap-y-0
            gap-x-3
            sm:gap-x-6
            lg:gap-x-0
          "
        >
          {metrics.map((item, index) => (
            <div
              key={index}
              className={`
                relative
                text-center
                px-2
                sm:px-4
                lg:px-5
                group

                ${
                  index === metrics.length - 1
                    ? "col-span-2 lg:col-span-1"
                    : ""
                }
              `}
            >
              {/* Number */}
              <div
                className="
                  text-3xl
                  xs:text-4xl
                  sm:text-5xl
                  md:text-5xl
                  lg:text-5xl
                  xl:text-6xl

                  font-semibold
                  tracking-tight
                  leading-none

                  text-[#C6A84B]

                  transition-all
                  duration-500
                  ease-out

                  group-hover:scale-105
                "
              >
                <CountUpNumber
                  raw={item.number}
                  start={inView}
                  duration={1600}
                />
              </div>

              {/* Golden Line */}
              <div
                className="
                  w-8
                  sm:w-10
                  h-[2px]

                  bg-[#C6A84B]

                  mx-auto
                  my-2.5
                  sm:my-3

                  opacity-70

                  transition-all
                  duration-300

                  group-hover:w-14
                  sm:group-hover:w-16
                "
              />

              {/* Title */}
              <p
                className="
                  text-xs
                  sm:text-sm
                  md:text-base
                  lg:text-lg

                  text-[#3d3d3d]

                  font-medium
                  leading-snug

                  max-w-[150px]
                  sm:max-w-[190px]
                  lg:max-w-[210px]

                  mx-auto
                "
              >
                {item.title}
              </p>

              {/* Desktop Vertical Divider */}
              {index !== metrics.length - 1 && (
                <div
                  className="
                    hidden
                    lg:block

                    absolute
                    right-0
                    top-1/2
                    -translate-y-1/2

                    w-px
                    h-16
                    xl:h-20

                    bg-[#d8c98f]
                    opacity-70
                  "
                />
              )}

              {/* Mobile Horizontal Divider */}
              {index < 4 && (
                <div
                  className="
                    lg:hidden

                    absolute
                    -bottom-5
                    sm:-bottom-6

                    left-1/2
                    -translate-x-1/2

                    w-16
                    sm:w-20

                    h-px

                    bg-[#d8c98f]
                    opacity-50

                    last:hidden
                  "
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}