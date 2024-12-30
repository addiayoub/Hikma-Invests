import { useEffect, useState } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import "dayjs/locale/fr";
import { useDispatch } from "react-redux";
import {
  setTempUserResponses,
  setUserHasSelectedChoice,
} from "../../../redux/smProjectSlice";
import { calculateAge } from "../../../utils/calculateAge";

const AgeInput = ({ date, setDate }) => {
  const dispatch = useDispatch();
  const [error, setError] = useState(null);
  const [age, setAge] = useState(0);
  const [score, setScore] = useState(0);

  const handleDate = (newDate) => {
    setDate(newDate);
  };
  useEffect(() => {
    if (error || !date) {
      dispatch(setUserHasSelectedChoice(false));
    }
    if (!error) {
      setAge(calculateAge(date));
    }

    if (age > 0 && age <= 30) {
      setScore(1);
    } else if (age > 30 && age <= 40) {
      setScore(2);
    } else if (age > 40 && age <= 50) {
      setScore(3);
    } else if (age > 50 && age <= 60) {
      setScore(4);
    }
    if (age > 60) {
      setScore(5);
    }

    if (age > 0 && !error) {
      dispatch(
        setTempUserResponses({
          question: "Age",
          response: age,
          score,
        }),
      );
    }
  }, [error, age, score]);

  return (
    <div className=" w-full flex justify-center items-center  gap-x-5 px-4 py-6">
      <h5>Votre date de naissance</h5>
      <LocalizationProvider adapterLocale="fr" dateAdapter={AdapterDayjs}>
        <DatePicker
          onError={(e) => {
            setError(e);
          }}
          value={date}
          label=""
          format="DD/MM/YYYY"
          onChange={handleDate}
        />
      </LocalizationProvider>
      {/* <input type={'date'} /> */}
    </div>
  );
};

export default AgeInput;
