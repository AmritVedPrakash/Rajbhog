import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import Logo from "../assets/logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about-us" },
    { name: "Brands", to: "/brands" },
    { name: "Contact Us", to: "/contact-us" },
  ];

  return (
    <>
      {/* =====================================================
          NAVBAR
      ====================================================== */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          fixed
          top-0
          left-0
          w-full
          z-[100]
          bg-white/95
          backdrop-blur-xl
          border-b
          border-[#193d2f]/10
          shadow-[0_4px_25px_rgba(25,61,47,0.08)]
        "
      >
        <div
          className="
            w-full
            max-w-7xl
            mx-auto
            px-4
            sm:px-6
            lg:px-8
            h-[76px]
            sm:h-[82px]
            flex
            items-center
            justify-between
          "
        >
          {/* =================================================
              LOGO
          ================================================== */}
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="
              flex
              items-center
              shrink-0
              outline-none
            "
          >
            <img
              src={Logo}
              alt="Rajbhog Rice"
              className="
                h-[54px]
                sm:h-[62px]
                lg:h-[68px]
                w-auto
                object-contain
                transition-transform
                duration-300
                hover:scale-105
              "
            />
          </Link>

          {/* =================================================
              DESKTOP MENU
          ================================================== */}
          <nav
            className="
              hidden
              md:flex
              items-center
              gap-8
              lg:gap-10
            "
          >
            {navLinks.map((item) => {
              const isActive = location.pathname === item.to;

              return (
                <Link
                  key={item.name}
                  to={item.to}
                  className={`
                    relative
                    py-2
                    text-[15px]
                    lg:text-[16px]
                    font-medium
                    transition-colors
                    duration-300
                    ${
                      isActive
                        ? "text-[#193d2f]"
                        : "text-slate-700 hover:text-[#193d2f]"
                    }

                    after:absolute
                    after:left-0
                    after:-bottom-1
                    after:h-[2px]
                    after:bg-[#b08b2c]
                    after:transition-all
                    after:duration-300

                    ${
                      isActive
                        ? "after:w-full"
                        : "after:w-0 hover:after:w-full"
                    }
                  `}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* =================================================
              MOBILE MENU BUTTON
          ================================================== */}
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            className="
              md:hidden
              w-11
              h-11
              rounded-xl
              flex
              items-center
              justify-center
              text-[#193d2f]
              bg-[#193d2f]/5
              border
              border-[#193d2f]/10
              transition-all
              duration-300
              hover:bg-[#193d2f]
              hover:text-white
              active:scale-95
            "
          >
            {isOpen ? (
              <X size={25} strokeWidth={1.8} />
            ) : (
              <Menu size={25} strokeWidth={1.8} />
            )}
          </button>
        </div>
      </motion.header>

      {/* =====================================================
          MOBILE MENU
      ====================================================== */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Background overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsOpen(false)}
              className="
                fixed
                inset-0
                z-[80]
                bg-[#193d2f]/20
                backdrop-blur-[2px]
                md:hidden
              "
            />

            {/* Mobile menu */}
            <motion.div
              initial={{
                opacity: 0,
                y: -15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -15,
              }}
              transition={{
                duration: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                fixed
                top-[76px]
                sm:top-[82px]
                left-0
                right-0
                z-[90]
                md:hidden
                px-4
                pt-3
                pb-4
              "
            >
              <div
                className="
                  rounded-2xl
                  overflow-hidden
                  bg-white
                  border
                  border-[#193d2f]/10
                  shadow-[0_15px_40px_rgba(25,61,47,0.15)]
                "
              >
                <nav className="flex flex-col p-3">
                  {navLinks.map((item, index) => {
                    const isActive =
                      location.pathname === item.to;

                    return (
                      <motion.div
                        key={item.name}
                        initial={{
                          opacity: 0,
                          x: -15,
                        }}
                        animate={{
                          opacity: 1,
                          x: 0,
                        }}
                        transition={{
                          delay: index * 0.06,
                          duration: 0.3,
                        }}
                      >
                        <Link
                          to={item.to}
                          onClick={() => setIsOpen(false)}
                          className={`
                            flex
                            items-center
                            px-4
                            py-3.5
                            rounded-xl
                            font-medium
                            text-[15px]
                            transition-all
                            duration-300

                            ${
                              isActive
                                ? "bg-[#193d2f] text-white"
                                : "text-slate-700 hover:bg-[#193d2f]/5 hover:text-[#193d2f]"
                            }
                          `}
                        >
                          {/* Gold indicator */}
                          <span
                            className={`
                              mr-3
                              w-1.5
                              h-1.5
                              rounded-full
                              transition-all
                              duration-300
                              ${
                                isActive
                                  ? "bg-[#c9d34f]"
                                  : "bg-[#b08b2c]/50"
                              }
                            `}
                          />

                          {item.name}
                        </Link>
                      </motion.div>
                    );
                  })}
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;