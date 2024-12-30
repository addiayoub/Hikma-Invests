import logo from "../../../../assets/imgs/logo/logo-v2.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white rounded-lg shadow m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link
            to="/#"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <img src={logo} alt="ida tech logo" className="w-40" />
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0">
            <li>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-700 me-4 md:me-6"
              >
                Hikma invest
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-700 me-4 md:me-6"
              >
                Tarifs
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-700 me-4 md:me-6"
              >
                Questionnaire
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-700 me-4 md:me-6"
              >
                budget
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-700 me-4 md:me-6"
              >
                Accessibility
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center400">
          © 2024{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            ID&A Tech™{" "}
          </a>
          , Inc. Tous droits réservés.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
