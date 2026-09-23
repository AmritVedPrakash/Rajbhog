import { motion } from "motion/react";
import {
  CheckCircle2,
  ShieldCheck,
  Smartphone,
  Zap,
  Users,
  LayoutGrid,
} from "lucide-react";

function WhyChooseUs() {
  const points = [
    "Multiple services available from one application",
    "Easy navigation and simple user experience",
    "Local service providers and trusted professionals",
    "Fast access to important daily-life services",
  ];

  return (
    <section
      id="why-us"
      className="overflow-hidden bg-gradient-to-br from-purple-950 via-purple-900 to-violet-950 py-24 text-white"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-semibold text-purple-300">WHY CHOOSE US</p>

          <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">
            Your Daily Services,
            <span className="block text-purple-300">Simplified In One App.</span>
          </h2>

          <p className="mt-6 max-w-xl leading-8 text-purple-100">
            No need to search on multiple platforms. Our multi-service digital
            platform helps users access essential services quickly and easily.
          </p>

          <div className="mt-8 space-y-4">
            {points.map((point) => (
              <div key={point} className="flex items-start gap-3">
                <CheckCircle2
                  size={21}
                  className="mt-0.5 shrink-0 text-purple-300"
                />
                <p className="text-purple-100">{point}</p>
              </div>
            ))}
          </div>

          <a
            href="#download"
            className="mt-10 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-4 font-semibold text-purple-700 transition hover:bg-purple-100"
          >
            <Smartphone size={19} />
            Get The App
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid gap-5 sm:grid-cols-2"
        >
          <div className="rounded-3xl border border-white/10 bg-white/10 p-7 backdrop-blur-sm">
            <LayoutGrid size={32} className="text-purple-300" />
            <h3 className="mt-5 text-xl font-bold">All In One Platform</h3>
            <p className="mt-3 leading-7 text-purple-100">
              Multiple service categories available from one application.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/10 p-7 backdrop-blur-sm sm:mt-8">
            <ShieldCheck size={32} className="text-purple-300" />
            <h3 className="mt-5 text-xl font-bold">Trusted Services</h3>
            <p className="mt-3 leading-7 text-purple-100">
              Find professionals and service providers with confidence.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/10 p-7 backdrop-blur-sm">
            <Zap size={32} className="text-purple-300" />
            <h3 className="mt-5 text-xl font-bold">Quick Access</h3>
            <p className="mt-3 leading-7 text-purple-100">
              Search, connect and get the required service faster.
            </p>
          </div>

          <div className="rounded-3xl bg-purple-600 p-7 shadow-xl shadow-purple-950/50 sm:mt-8">
            <Users size={32} className="text-white" />
            <h3 className="mt-5 text-xl font-bold">Growing Community</h3>
            <p className="mt-3 leading-7 text-purple-100">
              Built to connect users, professionals and businesses together.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default WhyChooseUs;