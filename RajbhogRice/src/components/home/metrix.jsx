import React, { useEffect, useRef, useState } from "react";

// Splits "50+" -> { value: 50, suffix: "+" }, "2000" -> { value: 2000, suffix: "" }
function parseMetric(raw) {
  const match = raw.match(/^(\d+)(.*)$/);
  if (!match) return { value: 0, suffix: raw };
  return { value: parseInt(match[1], 10), suffix: match[2] };
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
      // ease-out for a smooth finish
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * value));

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(tick);
      }
    };

    frameRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameRef.current);
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
      { threshold: 0.3 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-[#faf9f5] py-10 md:py-14">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        {/* Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-y-10 gap-x-6">
          {metrics.map((item, index) => (
            <div
              key={index}
              className="
                relative
                text-center
                px-3
                group
              "
            >
              {/* Number */}
              <div
                className="
                  text-4xl
                  sm:text-5xl
                  md:text-6xl
                  font-semibold
                  tracking-tight
                  text-[#C6A84B]
                  transition-all
                  duration-300
                  group-hover:scale-105
                "
              >
                <CountUpNumber raw={item.number} start={inView} duration={1600} />
              </div>

              {/* Small Golden Line */}
              <div className="w-10 h-[2px] bg-[#C6A84B] mx-auto my-3 opacity-70" />

              {/* Title */}
              <p
                className="
                  text-sm
                  sm:text-base
                  md:text-lg
                  text-[#3d3d3d]
                  font-medium
                  leading-snug
                "
              >
                {item.title}
              </p>

              {/* Vertical divider */}
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
                    bg-[#d8c98f]
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