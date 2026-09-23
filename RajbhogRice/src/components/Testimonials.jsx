import { motion } from "motion/react";
import { Search, MousePointerClick, Handshake } from "lucide-react";

function Testimonials() {
  const steps = [
    {
      number: "01",
      icon: Search,
      title: "Choose Your Service",
      description:
        "Open the application and select the service category you require.",
    },
    {
      number: "02",
      icon: MousePointerClick,
      title: "Find Suitable Options",
      description:
        "Browse listings, professionals, agencies and service providers easily.",
    },
    {
      number: "03",
      icon: Handshake,
      title: "Connect & Get Started",
      description: "Contact the right provider and get the service you need.",
    },
  ];

  return (
    <section id="how-it-works" className="bg-purple-50 py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-semibold text-purple-600">HOW IT WORKS</p>

          <h2 className="mt-3 text-3xl font-bold text-purple-950 sm:text-4xl">
            Getting Services Is Now Simple
          </h2>

          <p className="mt-4 leading-7 text-slate-600">
            Find and connect with the right service in just a few easy steps.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.article
                key={step.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.12 }}
                className="relative rounded-3xl bg-white p-8 shadow-sm"
              >
                <span className="absolute right-7 top-6 text-5xl font-extrabold text-purple-100">
                  {step.number}
                </span>

                <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-600 text-white">
                  <Icon size={25} />
                </div>

                <h3 className="relative mt-7 text-xl font-bold text-purple-950">
                  {step.title}
                </h3>

                <p className="relative mt-3 leading-7 text-slate-600">
                  {step.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
