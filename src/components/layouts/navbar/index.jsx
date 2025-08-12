import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import logo from "@/assets/img/myphoto.jpeg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  // Cek preferensi user di localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`font-jakarta-sans fixed top-0 left-0 z-50 w-full transition-colors duration-300 ${
        scrolled ? "bg-teal-100 dark:bg-teal-950" : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between py-6">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="mr-3 h-14 w-14 rounded-full" />
        </div>

        {/* Menu Desktop */}
        <ul className="hidden text-teal-950 md:flex md:space-x-8 dark:text-neutral-50">
          <li className="nav-item">
            <Link
              to="hero"
              smooth={true}
              className="nav-link cursor-pointer text-[16px] transition-all duration-500 ease-in-out hover:font-bold md:text-sm"
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="about"
              smooth={true}
              className="nav-link cursor-pointer text-[16px] transition-all duration-500 ease-in-out hover:font-bold md:text-sm"
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="projects"
              smooth={true}
              className="nav-link cursor-pointer text-[16px] transition-all duration-500 ease-in-out hover:font-bold md:text-sm"
            >
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="certificates"
              smooth={true}
              className="nav-link cursor-pointer text-[16px] transition-all duration-500 ease-in-out hover:font-bold md:text-sm"
            >
              Certificates
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="contacts"
              smooth={true}
              className="nav-link cursor-pointer text-[16px] transition-all duration-500 ease-in-out hover:font-bold md:text-sm"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Toggle Dark Mode */}
        <button
          onClick={toggleDarkMode}
          className="hidden h-12 w-12 rounded-full border border-teal-950 p-2 text-neutral-50 transition-colors duration-300 hover:bg-neutral-100 hover:text-teal-950 md:block dark:border-neutral-50 dark:hover:bg-neutral-800 dark:hover:text-neutral-50"
        >
          {darkMode ? "☀️" : "🌙"}
        </button>

        {/* Menu Mobile + Dark Mode */}
        <div className="flex items-center gap-3 md:hidden">
          {/* Toggle Dark Mode di Mobile */}
          <button
            onClick={toggleDarkMode}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-teal-950 text-neutral-50 transition-colors duration-300 hover:bg-neutral-100 hover:text-teal-950 dark:border-neutral-50 dark:hover:bg-neutral-800 dark:hover:text-neutral-50"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>

          {/* Toggle Menu */}
          <button
            onClick={toggleMenu}
            className="text-teal-950 focus:outline-none dark:text-white dark:hover:text-neutral-100"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>

          {isOpen && (
            <ul className="absolute top-[100px] right-10 w-1/3 space-y-2 rounded-none bg-teal-100 px-6 py-2 text-right text-teal-950 shadow-md shadow-black transition-colors duration-300 dark:bg-teal-950 dark:text-neutral-50">
              <li>
                <Link
                  to="hero"
                  smooth={true}
                  onClick={toggleMenu}
                  className="block cursor-pointer py-1 text-sm ease-in-out hover:font-bold"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="about"
                  smooth={true}
                  onClick={toggleMenu}
                  className="block cursor-pointer py-1 text-sm ease-in-out hover:font-bold"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="projects"
                  smooth={true}
                  onClick={toggleMenu}
                  className="block cursor-pointer py-1 text-sm ease-in-out hover:font-bold"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="certificates"
                  smooth={true}
                  onClick={toggleMenu}
                  className="block cursor-pointer py-1 text-sm ease-in-out hover:font-bold"
                >
                  Certificates
                </Link>
              </li>
              <li>
                <Link
                  to="contact"
                  smooth={true}
                  onClick={toggleMenu}
                  className="block cursor-pointer py-1 text-sm ease-in-out hover:font-bold"
                >
                  Contact
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
}
