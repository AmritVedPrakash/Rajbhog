import React, { useEffect, useRef, useState } from "react";

const STEPS = [
  {
    title: "Procurement",
    text: "We carefully select our grains from fertile regions renowned for producing the best-in-class Basmati. Our each batch satisfies the requirements for aroma, length, and flavor.",
  },
  {
    title: "Processing of Rice",
    text: "Rice processing is at the core of agricultural skill, where a great deal of care and precision are applied to turn raw grains into the best-in-class Basmati rice.",
  },
  {
    title: "Quality Control",
    text: "We ensure the quality of the end product. Our process involves systematic examination, checking and re-checking of both paddy and rice.",
  },
  {
    title: "Packaging",
    text: "Our advanced processes and professional teams carefully oversee every stage, from selecting the finest grains to final packaging.",
  },
];

export default function OurProcess() {
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
      },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`op-section ${inView ? "is-visible" : ""}`}
    >
      <style>{`

        /* =========================================
           MAIN SECTION
        ========================================= */

        .op-section {
          position: relative;
          overflow: hidden;

          padding: 88px 24px 100px;

          background:
            linear-gradient(
              160deg,
              rgba(9, 14, 8, 0.88) 0%,
              rgba(20, 38, 16, 0.78) 45%,
              rgba(9, 14, 8, 0.94) 100%
            ),
            repeating-linear-gradient(
              115deg,
              rgba(255,255,255,0.03) 0px,
              rgba(255,255,255,0.03) 2px,
              transparent 2px,
              transparent 46px
            ),
            repeating-linear-gradient(
              25deg,
              rgba(0,0,0,0.12) 0px,
              rgba(0,0,0,0.12) 2px,
              transparent 2px,
              transparent 46px
            ),
            #14210f;

          color: #f4efe2;

          font-family:
            Georgia,
            "Iowan Old Style",
            "Times New Roman",
            serif;
        }


        /* =========================================
           SUBTLE GLOW
        ========================================= */

        .op-section::before {
          content: "";

          position: absolute;

          width: 420px;
          height: 420px;

          top: -220px;
          left: -180px;

          border-radius: 50%;

          background: rgba(212, 175, 55, 0.06);

          filter: blur(80px);

          pointer-events: none;
        }

        .op-section::after {
          content: "";

          position: absolute;

          width: 450px;
          height: 450px;

          bottom: -280px;
          right: -180px;

          border-radius: 50%;

          background: rgba(201, 211, 79, 0.05);

          filter: blur(90px);

          pointer-events: none;
        }


        /* =========================================
           INNER
        ========================================= */

        .op-inner {
          position: relative;

          z-index: 2;

          max-width: 1180px;

          margin: 0 auto;

          text-align: center;
        }


        /* =========================================
           EYEBROW
        ========================================= */

        .op-eyebrow {
          display: inline-flex;

          align-items: center;
          justify-content: center;

          gap: 8px;

          font-family:
            -apple-system,
            BlinkMacSystemFont,
            "Segoe UI",
            sans-serif;

          font-size: 13px;

          font-weight: 600;

          letter-spacing: 0.14em;

          text-transform: uppercase;

          color: #d4af37;

          opacity: 0;

          transform: translateY(15px);

          transition:
            opacity 0.7s ease,
            transform 0.7s ease;
        }

        .op-section.is-visible .op-eyebrow {
          opacity: 1;

          transform: translateY(0);
        }

        .op-eyebrow svg {
          width: 17px;
          height: 17px;

          fill: #d4af37;
        }


        /* =========================================
           HEADING
        ========================================= */

        .op-heading {
          margin: 18px 0 22px;

          font-size: clamp(30px, 4vw, 46px);

          font-weight: 500;

          line-height: 1.2;

          color: #fbf7ec;

          opacity: 0;

          transform: translateY(18px);

          transition:
            opacity 0.8s ease 0.1s,
            transform 0.8s ease 0.1s;
        }

        .op-section.is-visible .op-heading {
          opacity: 1;

          transform: translateY(0);
        }


        /* =========================================
           DESCRIPTION
        ========================================= */

        .op-lede {
          max-width: 850px;

          margin: 0 auto;

          font-family:
            -apple-system,
            BlinkMacSystemFont,
            "Segoe UI",
            sans-serif;

          font-size: 16px;

          line-height: 1.75;

          color: rgba(244, 239, 226, 0.82);

          opacity: 0;

          transform: translateY(15px);

          transition:
            opacity 0.8s ease 0.2s,
            transform 0.8s ease 0.2s;
        }

        .op-section.is-visible .op-lede {
          opacity: 1;

          transform: translateY(0);
        }


        /* =========================================
           TIMELINE
        ========================================= */

        .op-timeline {
          position: relative;

          margin-top: 68px;

          display: grid;

          grid-template-columns: repeat(4, 1fr);

          gap: 0;
        }


        /* =========================================
           HORIZONTAL TRACK
        ========================================= */

        .op-track {
          position: absolute;

          top: 13px;

          left: 12.5%;

          right: 12.5%;

          height: 2px;

          background: rgba(212, 175, 55, 0.22);

          overflow: visible;
        }

        .op-track-fill {
          position: absolute;

          top: 0;
          left: 0;

          width: 0%;

          height: 2px;

          background:
            linear-gradient(
              90deg,
              #b08b2c,
              #d4af37,
              #f3e2a9
            );

          box-shadow:
            0 0 10px rgba(212, 175, 55, 0.35);

          transition:
            width 1.8s
            cubic-bezier(0.65, 0, 0.35, 1)
            0.4s;
        }

        .op-section.is-visible .op-track-fill {
          width: 100%;
        }


        /* =========================================
           NODE
        ========================================= */

        .op-node {
          position: relative;

          min-width: 0;
        }


        /* =========================================
           DOT WRAPPER
        ========================================= */

        .op-dot-wrap {
          position: relative;

          display: flex;

          justify-content: center;

          margin-bottom: 30px;

          z-index: 5;
        }


        /* =========================================
           BIGGER GOLDEN DOT
        ========================================= */

        .op-dot {
          position: relative;

          width: 32px;
          height: 32px;

          flex-shrink: 0;

          border-radius: 50%;

          background: #17220f;

          border: 2px solid rgba(212, 175, 55, 0.55);

          display: flex;

          align-items: center;
          justify-content: center;

          z-index: 5;

          box-shadow:
            0 0 0 5px rgba(20, 33, 15, 0.95),
            0 0 18px rgba(212, 175, 55, 0.12);

          transform: scale(0.5);

          opacity: 0;

          transition:
            transform 0.65s cubic-bezier(0.34, 1.56, 0.64, 1),
            opacity 0.5s ease;
        }

        .op-section.is-visible .op-dot {
          transform: scale(1);

          opacity: 1;
        }


        /* INNER GOLDEN DOT */

        .op-dot::after {
          content: "";

          width: 12px;
          height: 12px;

          border-radius: 50%;

          background: #d4af37;

          box-shadow:
            0 0 12px rgba(212, 175, 55, 0.45);

          transform: scale(0);

          transition:
            transform 0.45s ease 0.35s;
        }

        .op-section.is-visible .op-dot::after {
          transform: scale(1);
        }


        /* =========================================
           PULSING RING
        ========================================= */

        .op-dot::before {
          content: "";

          position: absolute;

          inset: -7px;

          border-radius: 50%;

          border: 1px solid rgba(212, 175, 55, 0);

          transform: scale(0.65);

          opacity: 0;
        }

        .op-section.is-visible .op-dot::before {
          animation:
            op-ring 1.8s ease-out
            forwards;
        }

        @keyframes op-ring {

          0% {
            transform: scale(0.65);

            opacity: 0;

            border-color:
              rgba(212, 175, 55, 0);
          }

          35% {
            transform: scale(1);

            opacity: 1;

            border-color:
              rgba(212, 175, 55, 0.65);
          }

          100% {
            transform: scale(1.65);

            opacity: 0;

            border-color:
              rgba(212, 175, 55, 0);
          }

        }


        /* =========================================
           ARROWS BETWEEN DESKTOP DOTS
        ========================================= */

        .op-arrow {
          position: absolute;

          top: 4px;

          right: -8px;

          width: 18px;
          height: 18px;

          z-index: 6;

          opacity: 0;

          transform: translateX(-8px);

          transition:
            opacity 0.5s ease,
            transform 0.5s ease;
        }

        .op-section.is-visible .op-arrow {
          opacity: 1;

          transform: translateX(0);
        }

        .op-arrow svg {
          width: 18px;
          height: 18px;

          stroke: #d4af37;

          stroke-width: 2.2;

          fill: none;

          filter:
            drop-shadow(
              0 0 4px
              rgba(212, 175, 55, 0.35)
            );
        }


        /* =========================================
           TITLES
        ========================================= */

        .op-title {
          margin: 0 0 13px;

          font-size: 23px;

          font-weight: 500;

          line-height: 1.25;

          color: #fbf7ec;

          opacity: 0;

          transform: translateY(15px);

          transition:
            opacity 0.65s ease,
            transform 0.65s ease;
        }

        .op-section.is-visible .op-title {
          opacity: 1;

          transform: translateY(0);
        }


        /* =========================================
           TEXT
        ========================================= */

        .op-text {
          margin: 0 auto;

          padding: 0 15px;

          max-width: 270px;

          font-family:
            -apple-system,
            BlinkMacSystemFont,
            "Segoe UI",
            sans-serif;

          font-size: 14.5px;

          line-height: 1.72;

          color: rgba(244, 239, 226, 0.74);

          opacity: 0;

          transform: translateY(15px);

          transition:
            opacity 0.65s ease,
            transform 0.65s ease;
        }

        .op-section.is-visible .op-text {
          opacity: 1;

          transform: translateY(0);
        }


        /* =========================================
           TABLET
        ========================================= */

        @media (max-width: 1000px) {

          .op-section {
            padding:
              75px
              20px
              85px;
          }

          .op-timeline {
            margin-top: 55px;
          }

          .op-title {
            font-size: 20px;
          }

          .op-text {
            font-size: 14px;

            padding: 0 10px;
          }

        }


        /* =========================================
           MOBILE
        ========================================= */

        @media (max-width: 760px) {

          .op-section {
            padding:
              65px
              20px
              75px;
          }


          .op-heading {
            font-size: 32px;

            line-height: 1.25;

            margin-top: 15px;
          }


          .op-lede {
            font-size: 15px;

            line-height: 1.7;
          }


          /* Vertical timeline */

          .op-timeline {
            display: flex;

            flex-direction: column;

            margin-top: 50px;

            gap: 0;
          }


          /* Hide desktop line */

          .op-track {
            display: none;
          }


          /* Each step */

          .op-node {
            position: relative;

            text-align: center;

            padding-bottom: 65px;
          }


          /* Dot */

          .op-dot-wrap {
            margin-bottom: 22px;
          }

          .op-dot {
            width: 34px;
            height: 34px;
          }

          .op-dot::after {
            width: 13px;
            height: 13px;
          }


          /* =====================================
             MOBILE ARROW
          ===================================== */

          .op-node:not(:last-child)::after {
            content: "";

            position: absolute;

            left: 50%;

            bottom: 17px;

            width: 2px;

            height: 35px;

            transform:
              translateX(-50%);

            background:
              linear-gradient(
                to bottom,
                #d4af37,
                rgba(212, 175, 55, 0.2)
              );

            opacity: 0;

            transition:
              opacity 0.5s ease 0.6s;
          }

          .op-section.is-visible
            .op-node:not(:last-child)::after {

            opacity: 1;
          }


          /* Arrow head */

          .op-node:not(:last-child)::before {
            content: "";

            position: absolute;

            left: 50%;

            bottom: 13px;

            width: 9px;
            height: 9px;

            border-right:
              2px solid #d4af37;

            border-bottom:
              2px solid #d4af37;

            transform:
              translateX(-50%)
              rotate(45deg);

            opacity: 0;

            transition:
              opacity 0.5s ease 0.8s;
          }

          .op-section.is-visible
            .op-node:not(:last-child)::before {

            opacity: 1;
          }


          .op-title {
            font-size: 23px;

            margin-bottom: 12px;
          }


          .op-text {
            max-width: 390px;

            font-size: 14.5px;

            line-height: 1.7;

            padding: 0 8px;
          }


          /* Hide desktop arrows */

          .op-arrow {
            display: none;
          }

        }


        /* =========================================
           SMALL MOBILE
        ========================================= */

        @media (max-width: 480px) {

          .op-section {
            padding:
              55px
              16px
              65px;
          }

          .op-eyebrow {
            font-size: 11px;

            letter-spacing: 0.13em;
          }

          .op-heading {
            font-size: 29px;
          }

          .op-lede {
            font-size: 14px;
          }

          .op-timeline {
            margin-top: 45px;
          }

          .op-node {
            padding-bottom: 60px;
          }

          .op-title {
            font-size: 21px;
          }

          .op-text {
            font-size: 14px;

            max-width: 350px;
          }

        }


        /* =========================================
           REDUCED MOTION
        ========================================= */

        @media (prefers-reduced-motion: reduce) {

          .op-section *,
          .op-section::before,
          .op-section::after {

            animation-duration: 0.01ms !important;

            animation-iteration-count: 1 !important;

            transition-duration: 0.01ms !important;
          }

        }

      `}</style>

      {/* =========================================
          CONTENT
      ========================================= */}

      <div className="op-inner">
        {/* Eyebrow */}

        <span className="op-eyebrow">
          <svg viewBox="0 0 24 24">
            <path d="M12 2c0 6-4 8-4 13a4 4 0 0 0 8 0c0-5-4-7-4-13z" />
          </svg>
          Our Process
        </span>

        {/* Heading */}

        <h2 className="op-heading">From Grain to Global Excellence!</h2>

        {/* Description */}

        <p className="op-lede">
          We have the best resources and expertise to manage the entire process.
          We sourced matured grains directly from basmati rice farmers to
          process superior small and large batches; and our in-house team
          ensures we handpicked only the finest grains for processing. As one of
          the leading rice exporters in India, we deliver only exceptional
          quality.
        </p>

        {/* =========================================
            TIMELINE
        ========================================= */}

        <div className="op-timeline">
          {/* Desktop line */}

          <div className="op-track">
            <div className="op-track-fill" />
          </div>

          {/* Steps */}

          {STEPS.map((step, i) => (
            <div className="op-node" key={step.title}>
              {/* Dot */}

              <div className="op-dot-wrap">
                <span
                  className="op-dot"
                  style={{
                    transitionDelay: `${0.35 + i * 0.18}s`,
                  }}
                />

                {/* Desktop arrow */}

                {i < STEPS.length - 1 && (
                  <span
                    className="op-arrow"
                    style={{
                      transitionDelay: `${0.9 + i * 0.15}s`,
                    }}
                  >
                    <svg viewBox="0 0 24 24">
                      <path d="M5 12h13" />
                      <path d="m13 6 6 6-6 6" />
                    </svg>
                  </span>
                )}
              </div>

              {/* Title */}

              <h3
                className="op-title"
                style={{
                  transitionDelay: `${0.55 + i * 0.14}s`,
                }}
              >
                {step.title}
              </h3>

              {/* Description */}

              <p
                className="op-text"
                style={{
                  transitionDelay: `${0.65 + i * 0.14}s`,
                }}
              >
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
