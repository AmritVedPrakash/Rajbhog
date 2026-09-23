import React from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";

import Logo from "../assets/logo.png";

export default function Footer() {
  const quickLinks = [
    { name: "Home", link: "/" },
    { name: "About Us", link: "/about-us" },
    { name: "Contact Us", link: "/contact-us" },
  ];

  return (
    <footer className="relative overflow-hidden bg-[#19382d] text-white">

      {/* Decorative Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-[#c8d34d]/10 blur-3xl" />

        <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-[#b08b2c]/10 blur-3xl" />

        <div className="absolute top-1/2 left-1/2 w-80 h-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.02] blur-3xl" />
      </div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-14">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10">

          {/* ================= COMPANY ================= */}
          <div>
            <img
              src={Logo}
              alt="Rajbhog Rice"
              className="
                h-20
                w-auto
                object-contain
                mb-6
                hover:scale-105
                transition-transform
                duration-300
              "
            />

            <p className="text-white/70 text-sm leading-7 max-w-sm">
              Premium Basmati rice crafted with purity, tradition and
              excellence. Bringing the royal taste of India to tables
              across the world.
            </p>

            {/* Address */}
            <div className="flex gap-3 mt-6">

              <MapPin
                size={20}
                className="text-[#c8d34d] shrink-0 mt-1"
              />

              <p className="text-white/70 text-sm leading-6">
                India
                <br />
                Basmati Rice Manufacturing
                <br />
                & Exporting
              </p>

            </div>
          </div>


          {/* ================= QUICK LINKS ================= */}
          <div>

            <h3 className="font-serif text-2xl text-white">
              Quick Links
            </h3>

            {/* Underline */}
            <div className="flex items-center gap-1 mt-4 mb-7">
              <span className="w-10 h-[2px] bg-[#c8d34d]" />
              <span className="w-5 h-[2px] bg-[#c8d34d]/40" />
            </div>

            <div className="space-y-4">

              {quickLinks.map((item) => (
                <Link
                  key={item.name}
                  to={item.link}
                  className="
                    group
                    flex
                    items-center
                    gap-3
                    text-white/75
                    hover:text-[#c8d34d]
                    transition-all
                    duration-300
                  "
                >

                  <ArrowRight
                    size={16}
                    className="
                      text-[#c8d34d]
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  />

                  <span>{item.name}</span>

                </Link>
              ))}

            </div>
          </div>


          {/* ================= SOCIAL LINKS ================= */}
          <div>

            <h3 className="font-serif text-2xl text-white">
              Social Links
            </h3>

            <div className="flex items-center gap-1 mt-4 mb-7">
              <span className="w-10 h-[2px] bg-[#c8d34d]" />
              <span className="w-5 h-[2px] bg-[#c8d34d]/40" />
            </div>


            <div className="space-y-5">

              {/* Facebook */}
              <a
                href="#"
                className="
                  group
                  flex
                  items-center
                  gap-4
                  text-white/75
                  hover:text-[#c8d34d]
                  transition-all
                  duration-300
                "
              >

                <span
                  className="
                    w-10
                    h-10
                    rounded-full
                    border
                    border-white/20
                    flex
                    items-center
                    justify-center
                    font-bold
                    text-lg
                    group-hover:border-[#c8d34d]
                    group-hover:bg-[#c8d34d]/10
                    transition-all
                  "
                >
                  f
                </span>

                <span>Facebook</span>

                <ArrowUpRight
                  size={15}
                  className="
                    ml-auto
                    opacity-0
                    -translate-x-2
                    group-hover:opacity-100
                    group-hover:translate-x-0
                    transition-all
                  "
                />

              </a>


              {/* Instagram */}
              <a
                href="#"
                className="
                  group
                  flex
                  items-center
                  gap-4
                  text-white/75
                  hover:text-[#c8d34d]
                  transition-all
                  duration-300
                "
              >

                <span
                  className="
                    w-10
                    h-10
                    rounded-full
                    border
                    border-white/20
                    flex
                    items-center
                    justify-center
                    group-hover:border-[#c8d34d]
                    group-hover:bg-[#c8d34d]/10
                    transition-all
                  "
                >
                  {/* Instagram CSS Icon */}
                  <span
                    className="
                      relative
                      w-5
                      h-5
                      rounded-[6px]
                      border-2
                      border-current
                    "
                  >
                    <span
                      className="
                        absolute
                        w-2
                        h-2
                        rounded-full
                        border-2
                        border-current
                        top-1/2
                        left-1/2
                        -translate-x-1/2
                        -translate-y-1/2
                      "
                    />

                    <span
                      className="
                        absolute
                        w-1
                        h-1
                        rounded-full
                        bg-current
                        top-0.5
                        right-0.5
                      "
                    />
                  </span>
                </span>

                <span>Instagram</span>

                <ArrowUpRight
                  size={15}
                  className="
                    ml-auto
                    opacity-0
                    -translate-x-2
                    group-hover:opacity-100
                    group-hover:translate-x-0
                    transition-all
                  "
                />

              </a>

            </div>
          </div>


          {/* ================= CONTACT ================= */}
          <div>

            <h3 className="font-serif text-2xl text-white">
              Enquire With Us
            </h3>

            <div className="flex items-center gap-1 mt-4 mb-7">
              <span className="w-10 h-[2px] bg-[#c8d34d]" />
              <span className="w-5 h-[2px] bg-[#c8d34d]/40" />
            </div>


            {/* Email */}
            <div className="flex gap-4 mb-7">

              <div
                className="
                  w-10
                  h-10
                  rounded-full
                  border
                  border-[#c8d34d]/40
                  flex
                  items-center
                  justify-center
                  shrink-0
                "
              >
                <Mail
                  size={18}
                  className="text-[#c8d34d]"
                />
              </div>

              <div>

                <p className="text-sm text-white/50 mb-1">
                  Email Address
                </p>

                <a
                  href="mailto:sales@rajbhogrice.com"
                  className="
                    text-[#c8d34d]
                    text-sm
                    hover:text-white
                    transition-colors
                    break-all
                  "
                >
                  sales@rajbhogrice.com
                </a>

              </div>

            </div>


            {/* Phone */}
            <div className="flex gap-4">

              <div
                className="
                  w-10
                  h-10
                  rounded-full
                  border
                  border-[#c8d34d]/40
                  flex
                  items-center
                  justify-center
                  shrink-0
                "
              >
                <Phone
                  size={18}
                  className="text-[#c8d34d]"
                />
              </div>

              <div>

                <p className="text-sm text-white/50 mb-1">
                  Contact Us
                </p>

                <a
                  href="tel:+910000000000"
                  className="
                    text-[#c8d34d]
                    text-sm
                    hover:text-white
                    transition-colors
                  "
                >
                  +91 00000 00000
                </a>

              </div>

            </div>

          </div>

        </div>


        {/* ================= BOTTOM BAR ================= */}
        <div
          className="
            mt-12
            pt-6
            border-t
            border-white/10
            flex
            flex-col
            md:flex-row
            items-center
            justify-between
            gap-3
          "
        >

          <p className="text-xs sm:text-sm text-white/45 text-center">
            © {new Date().getFullYear()} Rajbhog Rice. All rights reserved.
          </p>

          <p className="text-xs sm:text-sm text-white/45">
            Purity • Aroma • Tradition
          </p>

        </div>

      </div>
    </footer>
  );
}