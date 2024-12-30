import { addSpacesToNumber } from "../../../../utils/sankeyData/sankeyCalucaltors.js";

// eslint-disable-next-line react/prop-types
const Results = ({ results }) => {
  return (
    <div className="flex flex-wrap gap-6 my-4 mx-auto w-full items-center justify-center">
      {/* eslint-disable-next-line react/prop-types */}
      {results.map((e, i) => (
        <div
          key={e.name}
          className="flex flex-col items-center justify-center gap-2 p-4 w-1/5 bg-gray-100 shadow-md rounded-lg transition-transform transform hover:scale-105 hover:bg-gray-300"
        >
          <h6 className="text-gray-600 opacity-80 text-sm">{e.name}</h6>
          <h5 className="font-bold text-gray-600 text-lg">
            {addSpacesToNumber(parseInt(e.value))}
          </h5>
        </div>
      ))}
    </div>
  );
};

export default Results;
