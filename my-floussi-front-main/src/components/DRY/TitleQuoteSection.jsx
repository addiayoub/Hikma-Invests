// eslint-disable-next-line react/prop-types
const TitleQuoteSection = ({ title, qoute }) => {
  return (
    <div className="flex flex-col">
      <div className="space-y-10">
        <div className="text-center space-y-3">
          <h2 className="text-4xl font-bold text-cyan-700 transition-transform transform hover:scale-105 mb-8">
            {title}
          </h2>
          <blockquote className="p-4 mt-12 border-s-4 lg:border-s-0 border-gray-300 bg-gray-50 dark:border-gray-500">
            <p className="text-xl italic font-medium leading-relaxed text-gray-900 dark:text-white">
              {qoute}
            </p>
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default TitleQuoteSection;
