import { useDispatch } from "react-redux";
import {
  setInputValue,
  setTempUserResponses,
} from "../../../redux/smProjectSlice";
import Input from "./Input";

// eslint-disable-next-line react/prop-types
const Inputs = ({ inputs, categorieId, questionId }) => {
  const dispatch = useDispatch();
  const handleChange = (e, id, question) => {
    const value = e.target.value;
    dispatch(
      setInputValue({
        id,
        categorieId,
        questionId,
        value,
      }),
    );

    let score = 1;
    if (value > 100000 && value < 250000) {
      score = 2;
    } else if (value > 250000 && value < 400000) {
      score = 3;
    } else if (value > 400000 && value < 600000) {
      score = 4;
    } else if (value > 600000) {
      score = 5;
    }
    dispatch(
      setTempUserResponses({
        question,
        response: value,
        score,
      }),
    );
  };
  return (
    <div className=" w-full h-fit mt-10">
      {inputs.map((inp) => (
        <div key={inp.id} className=" my-5 ">
          <h5 key={inp.id} className=" text-black  text-md mb-2 ">
            {inp.label}
          </h5>
          <Input
            inp={inp}
            onChange={(e) => handleChange(e, inp.id, inp.label)}
          />
        </div>
      ))}
    </div>
  );
};

export default Inputs;
