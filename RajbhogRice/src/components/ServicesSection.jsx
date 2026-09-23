import { motion } from "motion/react";
import {
  Phone,
  Building2,
  HeartHandshake,
  HardHat,
  BriefcaseBusiness,
  Scale,
  Gift,
  Wrench,
  Sparkles,
  Stethoscope,
} from "lucide-react";

function ServicesSection() {
  const services = [
    {
      icon: Phone,
      title: "Phone Directory",
      description:
        "Find important contact numbers and local business details easily.",
    },
    {
      icon: Building2,
      title: "Property Listings",
      description: "Explore property options for buying, selling and renting.",
    },
    {
      icon: HeartHandshake,
      title: "Marriage Bureau",
      description:
        "Connect with suitable profiles and find meaningful matches.",
    },
    {
      icon: HardHat,
      title: "Labour Hiring",
      description: "Hire skilled workers and labour for your required work.",
    },
    {
      icon: BriefcaseBusiness,
      title: "Placement Agency",
      description:
        "Find job opportunities and connect with potential employers.",
    },
    {
      icon: Scale,
      title: "Lawyer Consultation",
      description:
        "Get connected with legal experts for professional guidance.",
    },
    {
      icon: Gift,
      title: "Refer & Earn",
      description: "Invite your friends and earn rewards through referrals.",
    },
    {
      icon: Wrench,
      title: "Text Tech Services",
      description:
        "Access technology and digital support services when needed.",
    },
    {
      icon: Sparkles,
      title: "Astrology Consultation",
      description:
        "Consult astrologers and get guidance for your important decisions.",
    },
    {
      icon: Stethoscope,
      title: "Medical & Healthcare",
      description:
        "Find healthcare professionals and medical related services.",
    },
  ];

  return (
    <section id="services" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-semibold text-purple-600">OUR SERVICES</p>

          <h2 className="mt-3 text-3xl font-bold text-purple-950 sm:text-4xl">
            Multiple Services, One Platform
          </h2>

          <p className="mt-4 leading-7 text-slate-600">
            From property and jobs to healthcare and legal consultation,
            everything is available through one simple application.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -7 }}
                className="group rounded-2xl border border-purple-100 bg-white p-5 shadow-sm transition hover:border-purple-300 hover:shadow-xl hover:shadow-purple-100"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 text-purple-600 transition group-hover:bg-purple-600 group-hover:text-white">
                  <Icon size={22} />
                </div>

                <h3 className="mt-5 text-base font-bold text-purple-950">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {service.description}
                </p>

                <a
                  href="#download"
                  className="mt-5 inline-block text-sm font-semibold text-purple-600 transition hover:text-purple-800"
                >
                  Explore Service →
                </a>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
