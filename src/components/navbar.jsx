import Link from "next/link";
import { useState, useEffect } from "react";
import { Sheet, SheetTrigger, SheetContent } from "./ui/sheet";

const navItems = [
  { href: "/", label: "home" },
  { href: "#expertise", label: "expertise" },
  { href: "#work", label: "work" },
  { href: "/", label: "experience" },
  { href: "/", label: "contact" },
];

export const Navbar = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const viewportHeight = window.innerHeight;

      if (scrollPosition >= viewportHeight * 0.5) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSmoothScroll = (e, href) => {
    e.preventDefault();
    setIsSheetOpen(false);
    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <nav
      className={`w-full flex items-center justify-start md:justify-between gap-x-5 z-50 md:gap-x-0 main-padding pt-2 pb-4 transition-all duration-500 md:duration-700 ease-in-out ${
        isScrolled
          ? "fixed top-0 z-20 bg-[#1a1a1c] shadow-xl opacity-100 translate-y-0"
          : "absolute top-0 opacity-90 translate-y-2"
      }`}
    >
      <div className="md:hidden">
        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <SheetTrigger asChild>
            <button className="bg-white/5 w-[48px] h-[48px] p-3.5 rounded-full hover:bg-white/10 transition-all duration-300 group">
              <span className="block w-5 h-[2px] my-1.5 bg-white group-hover:bg-[#6ddbed] transition-all duration-200"></span>
              <span className="block w-5 h-[2px] my-1.5 bg-white group-hover:bg-[#6ddbed] transition-all duration-200"></span>
            </button>
          </SheetTrigger>
          <SheetContent>
            <div>
              <ul className="space-y-4">
                {navItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className="text-lg font-medium text-black"
                      onClick={
                        (e) =>
                          item.href.startsWith("#")
                            ? handleSmoothScroll(e, item.href)
                            : setIsSheetOpen(false)
                      }
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-5">
              <p className="text-gray-500">
                © {new Date().getFullYear()}, Made with love by Youssef
                Mohammed, All rights reserved.
              </p>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      <div className="pt-1 md:pt-3">
        <Link
          href="/"
          className="text-4xl font-semibold text-[#6ddbed] hover:text-[#6ddbed]/80 transition-all duration-200"
        >
          MatRix
        </Link>
      </div>

      <div className="hidden md:flex flex-grow justify-center">
        <ol className="flex space-x-5 lg:space-x-10 list-none">
          {navItems.map((item, index) => (
            <li
              key={index}
              className={`relative flex flex-col items-end text-lg font-medium transition-all duration-500 ${
                isScrolled ? "text-[#6ddbed]" : "text-white"
              } ${
                hoveredIndex !== null && hoveredIndex !== index
                  ? "opacity-50 scale-[.85]"
                  : "opacity-100"
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <span className="w-[10px] h-[20px] text-[10px] opacity-75">
                {`0${index + 1}`}
              </span>
              <Link
                href={item.href}
                onClick={(e) =>
                  item.href.startsWith("#")
                    ? handleSmoothScroll(e, item.href)
                    : null
                }
              >
                <span className="mr-1">/ /</span> {item.label}
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
};
