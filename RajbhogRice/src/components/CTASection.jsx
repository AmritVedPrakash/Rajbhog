import { motion } from "motion/react";
import { Download, Smartphone, Star } from "lucide-react";

function CTASection() {
  return (
    <section id="download" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-purple-700 via-purple-600 to-fuchsia-600 px-6 py-16 text-center text-white shadow-2xl shadow-purple-300 sm:px-12"
        >
          <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-24 -right-10 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

          <div className="relative">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15">
              <Smartphone size={30} />
            </div>

            <h2 className="mt-6 text-3xl font-bold sm:text-4xl">
              Download The Multi-Service App Today
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-purple-100">
              Get quick access to property, jobs, marriage bureau, legal
              consultation, healthcare, astrology and many more services.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-4 font-semibold text-purple-700 transition hover:-translate-y-1 hover:bg-purple-50"
              >
                <Download size={19} />
                Download App
              </a>

              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 py-4 font-semibold text-white transition hover:bg-white/20"
              >
                <Star size={19} />
                Explore Services
              </a>
            </div>

            <p className="mt-6 text-sm text-purple-100">
              Available for Android users.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default CTASection;
