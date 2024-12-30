// eslint-disable-next-line react/prop-types
const Header = ({ setV }) => {
  return (
    <div className="flex justify-center w-full gap-6 pb-4">
      <div className="flex items-center">
        <h5
          onClick={() => setV(0)}
          className={`bg-green-400 text-white rounded-lg px-4 py-2 lg:text-xl hover:bg-green-500`}
        >
          Revenus
        </h5>
      </div>

      <h5
        onClick={() => setV(1)}
        className={`bg-cyan-700 text-white rounded-lg px-4 py-2 lg:text-xl hover:bg-cyan-800`}
      >
        Investissements
      </h5>
      <h5
        onClick={() => setV(2)}
        className={`bg-red-500 text-white rounded-lg px-4 py-2 lg:text-xl hover:bg-red-600`}
      >
        Dépenses
      </h5>
    </div>
  );
};

export default Header;
