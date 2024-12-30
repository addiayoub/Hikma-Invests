import logo from "../../../../../assets/imgs/logo/logo-v2.svg";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropDownOpen, setDropDownOpen] = useState(false);

  return (
    <header className="inset-x-0 top-0 z-50">
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Hikam Invest</span>
            <img src={logo} alt="ida tech logo" className="w-40" />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setIsOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <div className="relative">
            <button
              onClick={() => setDropDownOpen(!dropDownOpen)}
              className="flex items-center text-sm font-semibold leading-6 text-gray-900 hover:text-gray-600"
            >
              Hikma Invest
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="ml-2 h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </button>
            {dropDownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                <Link
                  to="/"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => setDropDownOpen(!dropDownOpen)}
                >
                  Hikma Invest
                </Link>
                <ScrollLink
                  to="service"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => setDropDownOpen(!dropDownOpen)}
                >
                  Nos services
                </ScrollLink>
                <ScrollLink
                  to="testimonial"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => setDropDownOpen(!dropDownOpen)}
                >
                  Témoignages
                </ScrollLink>
                <ScrollLink
                  to="blog"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => setDropDownOpen(!dropDownOpen)}
                >
                  Blog
                </ScrollLink>
                <ScrollLink
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => setDropDownOpen(!dropDownOpen)}
                >
                  Contactez-nous
                </ScrollLink>
              </div>
            )}
          </div>
          <Link
            to="/questionnaire"
            className="text-sm font-semibold leading-6 text-gray-900 hover:text-gray-600"
          >
            Questionnaire
          </Link>
          <Link
            to="/budget"
            className="text-sm font-semibold leading-6 text-gray-900 hover:text-gray-600"
          >
            Budget
          </Link>
          <Link
            to="/tarifs"
            className="text-sm font-semibold leading-6 text-gray-900 hover:text-gray-600"
          >
            Tarifs
          </Link>
          <Link
            to="/patrimoine"
            className="text-sm font-semibold leading-6 text-gray-900 hover:text-gray-600"
          >
            Simulateur
          </Link>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end space-x-4 items-center">
          <Link
            to="/login"
            className="text-sm font-semibold leading-6 text-gray-900 hover:text-gray-600"
          >
            Connexion
          </Link>
          <Link
            to="/sign-up"
            className="rounded-md bg-cyan-600 py-2 px-3 text-sm font-semibold leading-6 text-white hover:bg-cyan-700"
          >
            Inscription
          </Link>
        </div>
      </nav>

      {isOpen && (
        <div className="lg:hidden" role="dialog" aria-modal="true">
          <div className="fixed inset-0 z-50" />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link to="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Hikam Invest</span>
                <img src={logo} alt="ida tech logo" className="w-40" />
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setIsOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <svg
                  className="h-6 w-6 text-black"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#000000"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <div className="relative">
                    <button
                      className="flex -mx-3 w-full rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 text-left  items-center"
                      onClick={() => setDropDownOpen(!dropDownOpen)}
                    >
                      Hikma Invest
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="ml-2 h-4 w-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m19.5 8.25-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </button>
                    {dropDownOpen && (
                      <div className="mt-2 space-y-1">
                        <ScrollLink
                          to="service"
                          spy={true}
                          smooth={true}
                          offset={50}
                          duration={500}
                          className="block px-4 py-2 text-base text-gray-700 hover:bg-gray-100"
                          onClick={() => {
                            setDropDownOpen(!dropDownOpen);
                            setIsOpen(false);
                          }}
                        >
                          Nos services
                        </ScrollLink>
                        <ScrollLink
                          to="testimonial"
                          spy={true}
                          smooth={true}
                          offset={50}
                          duration={500}
                          className="block px-4 py-2 text-base text-gray-700 hover:bg-gray-100"
                          onClick={() => {
                            setDropDownOpen(!dropDownOpen);
                            setIsOpen(false);
                          }}
                        >
                          Témoignages
                        </ScrollLink>
                        <ScrollLink
                          to="blog"
                          spy={true}
                          smooth={true}
                          offset={50}
                          duration={500}
                          className="block px-4 py-2 text-base text-gray-700 hover:bg-gray-100"
                          onClick={() => {
                            setDropDownOpen(!dropDownOpen);
                            setIsOpen(false);
                          }}
                        >
                          Blog
                        </ScrollLink>
                        <ScrollLink
                          to="contact"
                          spy={true}
                          smooth={true}
                          offset={50}
                          duration={500}
                          className="block px-4 py-2 text-base text-gray-700 hover:bg-gray-100"
                          onClick={() => {
                            setDropDownOpen(!dropDownOpen);
                            setIsOpen(false);
                          }}
                        >
                          Contactez-nouz
                        </ScrollLink>
                      </div>
                    )}
                  </div>
                  <Link
                    to="/tarifs"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Tarifs
                  </Link>
                  <Link
                    to="/questionnaire"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Questionnaire
                  </Link>
                  <Link
                    to="/budget"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Budget
                  </Link>
                  <Link
                    to="/patrimoine"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Simulateur
                  </Link>
                </div>
                <div className="py-6">
                  <Link
                    to="/login"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Connexion
                  </Link>
                  <Link
                    to="/sign-up"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Inscription
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
