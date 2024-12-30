import { useEffect, useState } from "react";
import AgeInput from "./AgeInput";
import { isValidDate } from "../../../utils/isValidDate";
import { generateDate } from "../../../utils/generateDate";
import Validation from "./Validation";
import { useDispatch } from "react-redux";
import { setUserHasSelectedChoice } from "../../../redux/smProjectSlice";

const AgeRetraite = () => {
  const dispatch = useDispatch();
  const [date, setDate] = useState("");
  const [dateNaissance, setDateNaissance] = useState("");

  // const date = useSelector(state => state.smProjetQuestionnaire.birthDate)
  // const setDate = (newDate) => {
  //     dispatch(setBirthDate(newDate))
  // }
  useEffect(() => {
    const valideDate = isValidDate(date);
    if (isValidDate(valideDate) && date) {
      setDateNaissance(generateDate(date));
      dispatch(setUserHasSelectedChoice(true));
    }
  }, [date, dateNaissance]);
  return (
    <div className=" my-6  ">
      <AgeInput date={date} setDate={setDate} />
      <div className="w-[60%] mx-auto ">
        <Validation />
      </div>
    </div>
  );
};

export default AgeRetraite;
