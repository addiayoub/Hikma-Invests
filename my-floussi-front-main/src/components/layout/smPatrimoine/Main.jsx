import DataInputs from "./dataInputs/Index.jsx";
import DataProcessor from "./dataProcessor/Index.jsx";

const Main = () => {
  return (
    <div
      className=" w-[95%] h-fit
             bg-white rounded-xl shadow-sm borderborder-grayExtraLight my-3 mx-auto flex max-[640px]:flex-col"
    >
      <DataInputs />
      <DataProcessor />
    </div>
  );
};

export default Main;
