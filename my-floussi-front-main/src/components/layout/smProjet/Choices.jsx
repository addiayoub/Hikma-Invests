import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setChoiceIsSelected,
  setTempUserResponses,
  setUserHasSelectedChoice,
} from "../../../redux/smProjectSlice";
import { useSwiper, useSwiperSlide } from "swiper/react";

// eslint-disable-next-line react/prop-types
const Choices = ({ choices, question, categorieId, questionId }) => {
  const swiperSlide = useSwiperSlide();
  const swiper = useSwiper();
  const [score, setScore] = useState(0);
  const [response, setResponse] = useState("");

  // const pass = useSelector(state => state.questionnaire.userHasSelectedChoice)
  const refresh = useSelector(
    (state) => state.smProjetQuestionnaire.refreshSlidersState,
  );
  const dispatch = useDispatch();
  const [selected, setSelected] = useState(false);
  // const { selectedChoice: selected } = useSelector(state => state.smProjetQuestionnaire)

  const selectChoice = (id) => {
    dispatch(
      setChoiceIsSelected({
        id,
        categorieId,
        questionId,
      }),
    );
    setSelected(id);
    dispatch(setUserHasSelectedChoice(true));
  };

  useEffect(() => {
    if (selected !== false && swiperSlide.isActive) {
      dispatch(setUserHasSelectedChoice(true));
    }

    if (swiperSlide.isActive) {
      dispatch(
        setTempUserResponses({
          question,
          response,
          score,
        }),
      );
    }
  }, [refresh, score, response]);

  return (
    <div className="mydict mt-10">
      <div className="w-full">
        {choices.map((c, i) => (
          <div
            style={{
              backgroundColor: c.isSelected === true ? "#AACEEC" : "#fff",
            }}
            onClick={() => {
              selectChoice(c.id);
              setScore(i + 1);
              setResponse(c.name);
            }}
            key={c.id}
            className=" bg-secondaryLight shadow-md transition-all duration-300 hover:shadow-lg rounded-md cursor-pointer py-3 px-3 h-[50px]"
          >
            <h5 className=" text-mainLight text-center">{c.name}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Choices;
