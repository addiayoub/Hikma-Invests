import { useDispatch } from "react-redux";

// eslint-disable-next-line react/prop-types
const Input = ({ title, v, unit, setV }) => {
  const dispatch = useDispatch();
  const onChange = (e) => {
    dispatch(setV(e.target.value));
  };
  return (
    <div className="flex items-start">
      <div>
        <label
          htmlFor="website"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          {title}
        </label>
        <div className="relative">
          <input
            type="number"
            id="default-search"
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
            onChange={onChange}
            value={v?.toString()}
            required
          />
          <h1 className="text-white absolute end-2.5 bottom-2.5 bg-cyan-700 font-medium rounded-lg text-sm px-4 py-2">
            {unit}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Input;
