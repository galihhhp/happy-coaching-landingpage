import { useEffect, useState } from "react";

import NavItem from "./NavItem";
import { useNavigate } from "react-router-dom";

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isButtonVisible, setIsButtonVisible] = useState(false);

  const navigate = useNavigate();
  const footerPages = [
    "Home",
    "Services",
    "About Us",
    "Extra Salespage",
    "Free guide",
  ];
  const footerContact = [
    "+123 456 789",
    "hello@happydigital.id",
    "Instagram",
    "LinkedIn",
  ];

  const setMenu = () => {
    setIsMenuOpen(!isMenuOpen);

    if (isMenuOpen) {
      document.body.style.overflow = "unset";
    } else {
      document.body.style.overflow = "hidden";
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setIsButtonVisible(true);
      } else {
        setIsButtonVisible(false);
      }
    });
  }, []);

  return (
    <>
      <div className="min-h-screen text-purple">
        {isButtonVisible && (
          <button
            onClick={scrollToTop}
            className="bg-tosca rounded-full p-4 fixed right-4 bottom-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="white"
              className="w-6 h-6">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75"
              />
            </svg>
          </button>
        )}
        <nav className="bg-white h-20 top-0 z-40 flex justify-center px-4 md:px-0">
          {isMenuOpen && (
            <div
              className={`bg-white transition-all duration-500 p-4 z-50 absolute right-0 flex flex-col bottom-0 w-full h-full`}>
              <div className="flex justify-between">
                <div className="flex gap-2 w-56 items-center">
                  <img src="/happy-coaching.svg" alt="" />
                  <h1 className="font-bold text-lg">Happy Coaching</h1>
                </div>
                <button
                  onClick={setMenu}
                  className="border border-neutral-300 rounded-lg p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <div className="flex flex-col w-full items-center gap-4 mt-10">
                <NavItem />
                <button
                  onClick={() => navigate("/free-guide")}
                  className="bg-tosca rounded-lg text-white p-2">
                  Get your free guide now
                </button>
              </div>
            </div>
          )}
          <div className="container flex justify-between items-center">
            <div className="flex gap-2 w-56 items-center">
              <img src="/happy-coaching.svg" alt="" />
              <h1 className="font-bold text-lg">Happy Coaching</h1>
            </div>
            <button className="block md:hidden" onClick={setMenu}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
            <div className="hidden md:flex gap-2 items-center text-sm">
              <NavItem />
              <button
                onClick={() => navigate("/free-guide")}
                className="lg:block hidden bg-tosca rounded-lg text-white p-2">
                Get your free guide now
              </button>
              <button
                onClick={() => navigate("/free-guide")}
                className="lg:hidden block bg-tosca rounded-lg text-white p-2">
                Get your free guide
              </button>
            </div>
          </div>
        </nav>
        {children}
        <footer className="w-full">
          <div className="w-full bg-light-yellow py-4 md:py-10 px-4 md:px-0">
            <div className="container flex md:flex-row flex-col gap-4 w-full justify-between">
              <div className="flex flex-col gap-4 w-full">
                <h1 className="font-bold text-[20px] md:text-[30px] text-purple">
                  Get notified when I publish new articles
                </h1>
                <p className="text-[12px] md:text-[20px]">
                  Stay up to date with the latest news, announcements, and
                  articles.
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="border border-neutral-300 lg:w-96 rounded-lg p-2"
                />
                <button className="bg-tosca rounded-lg text-white p-2">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="container grid grid-cols-1 md:grid-cols-3 px-4 md:px-0 py-10 gap-10">
            <div className="flex flex-col gap-8">
              <div className="flex gap-2 w-56 items-center">
                <img src="/happy-coaching.svg" alt="" />
                <h1 className="font-bold text-lg">Happy Coaching</h1>
              </div>
              <p className="text-neutral-300">
                Design amazing digital experiences that create more happy in the
                world
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="font-bold">Pages</h1>
              {footerPages.map((item, index) => {
                return (
                  <a
                    key={index}
                    className="text-neutral-400 hover:text-neutral-500"
                    href="">
                    {item}
                  </a>
                );
              })}
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="font-bold">Contact</h1>
              {footerContact.map((item, index) => {
                return (
                  <a
                    key={index}
                    className="text-neutral-400 hover:text-neutral-500"
                    href="">
                    {item}
                  </a>
                );
              })}
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Layout;
