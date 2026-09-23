import React from "react";
import {
  Factory,
  Leaf,
  HeartHandshake,
  ArrowRight,
} from "lucide-react";

export default function AdvanceSkills() {
  const features = [
    {
      icon: Factory,
      title: "Advanced Mills",
      description:
        "We incorporate modern technology to ensure efficiency and superior quality while producing rice.",
    },
    {
      icon: Leaf,
      title: "Sustainability Focus",
      description:
        "Our eco-friendly processes are effective in conserving the environment and utilizing resources wisely.",
    },
    {
      icon: HeartHandshake,
      title: "Customer Satisfaction",
      description:
        "Being a customer-centric organization, it focuses on fulfilling customer needs with consistency & reliability.",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden">
      {/* Background */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-[#102f25]
          via-[#173d2d]
          to-[#0d2a20]
        "
      />

      {/* Decorative Background */}
      <div
        className="
          absolute
          -top-32
          -left-32
          w-96
          h-96
          rounded-full
          bg-[#c6a84b]/10
          blur-3xl
        "
      />

      <div
        className="
          absolute
          -bottom-40
          right-0
          w-[450px]
          h-[450px]
          rounded-full
          bg-[#6c8c55]/10
          blur-3xl
        "
      />

      {/* Content */}
      <div
        className="
          relative
          z-10
          max-w-7xl
          mx-auto
          px-5
          sm:px-8
          lg:px-10
          py-14
          md:py-16
          lg:py-20
        "
      >
        {/* Section Heading */}
        <div className="text-center mb-12">
          <span
            className="
              inline-block
              mb-3
              text-xs
              sm:text-sm
              uppercase
              tracking-[0.3em]
              font-semibold
              text-[#d8bd62]
            "
          >
            Why Choose Rajbhog
          </span>

          <h2
            className="
              font-serif
              text-3xl
              sm:text-4xl
              md:text-5xl
              font-semibold
              text-white
            "
          >
            Excellence in Every Grain
          </h2>

          <div className="flex justify-center items-center gap-3 mt-5">
            <div className="w-16 h-[1px] bg-[#c6a84b]" />

            <div
              className="
                w-2.5
                h-2.5
                rotate-45
                bg-[#c6a84b]
              "
            />

            <div className="w-16 h-[1px] bg-[#c6a84b]" />
          </div>
        </div>

        {/* Feature Cards */}
        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-3
            gap-6
            lg:gap-8
          "
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="
                  group
                  relative
                  rounded-2xl
                  border
                  border-white/15
                  bg-white/[0.07]
                  backdrop-blur-md
                  p-6
                  sm:p-7
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:bg-white/[0.11]
                  hover:border-[#c6a84b]/50
                "
              >
                {/* Top Golden Line */}
                <div
                  className="
                    absolute
                    top-0
                    left-8
                    right-8
                    h-[2px]
                    bg-gradient-to-r
                    from-transparent
                    via-[#c6a84b]
                    to-transparent
                    opacity-70
                  "
                />

                {/* Icon + Number */}
                <div className="flex items-center justify-between mb-6">
                  <div
                    className="
                      flex
                      items-center
                      justify-center
                      w-16
                      h-16
                      rounded-full
                      border
                      border-[#c6a84b]/50
                      bg-[#102f25]/80
                      text-[#d8bd62]
                      transition-all
                      duration-500
                      group-hover:scale-110
                      group-hover:bg-[#c6a84b]
                      group-hover:text-[#18372a]
                    "
                  >
                    <Icon size={30} strokeWidth={1.7} />
                  </div>

                  <span
                    className="
                      font-serif
                      text-4xl
                      font-semibold
                      text-white/10
                    "
                  >
                    0{index + 1}
                  </span>
                </div>

                {/* Title */}
                <h3
                  className="
                    font-serif
                    text-2xl
                    sm:text-3xl
                    font-semibold
                    text-white
                    mb-3
                  "
                >
                  {feature.title}
                </h3>

                {/* Description */}
                <p
                  className="
                    text-sm
                    sm:text-base
                    leading-7
                    text-white/70
                  "
                >
                  {feature.description}
                </p>

                {/* Bottom Arrow */}
                <div
                  className="
                    flex
                    items-center
                    gap-2
                    mt-6
                    text-[#d8bd62]
                    text-sm
                    font-semibold
                    opacity-0
                    translate-y-2
                    transition-all
                    duration-300
                    group-hover:opacity-100
                    group-hover:translate-y-0
                  "
                >
                  <span>Discover More</span>
                  <ArrowRight size={17} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}