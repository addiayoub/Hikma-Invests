import { Link } from "react-router-dom";

const EndSection = () => {
  return (
    <div className="pt-8 space-y-8">
      <figure className="max-w-screen-md mx-auto text-center">
        <svg
          className="w-10 h-10 mx-auto mb-3 text-gray-400 dark:text-gray-600"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 18 14"
        >
          <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
        </svg>
        <blockquote>
          <p className="text-2xl italic font-medium text-gray-900 dark:text-white">
            "Simplifiez votre gestion de patrimoine avec Hikma Invest!"
          </p>
        </blockquote>
      </figure>

      <div className="flex justify-center h-fit px-2">
        <Link
          to="/sign-up"
          className="bg-cyan-700 text-white rounded-3xl shadow-md px-6 py-2 text-center  text-lg flex items-center justify-center hover:bg-cyan-800"
        >
          Créer un compte
        </Link>
      </div>
    </div>
  );
};

export default EndSection;
