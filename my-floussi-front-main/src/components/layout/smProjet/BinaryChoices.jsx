import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setBinarySelected,
  setTempUserResponses,
  setUserHasSelectedChoice,
} from "../../../redux/smProjectSlice";
import { useSwiperSlide } from "swiper/react";

// eslint-disable-next-line react/prop-types
const BinaryChoices = ({ onError, choices, setShow, question }) => {
  const dispatch = useDispatch();
  // const [selected, setSelected] = useState(false)
  const swiperSlide = useSwiperSlide();
  const refresh = useSelector(
    (state) => state.smProjetQuestionnaire.refreshSlidersState,
  );
  const selected = useSelector(
    (state) => state.smProjetQuestionnaire.selectedBinary,
  );
  const [yesSelected, setYesSelected] = useState(false);

  const selectChoice = (id, value) => {
    // setSelected(id)
    dispatch(setBinarySelected(id));
    setShow ? setShow(value) : null;
    setYesSelected(value);
    // if (value === true) {
    //     dispatch(setUserHasSelectedChoice(false))
    // } else {
    //     dispatch(setUserHasSelectedChoice(true))
    // }
    value ? dispatch(setUserHasSelectedChoice(true)) : null;
  };

  // const pass = useSelector(state => state.questionnaire.userHasSelectedChoice)

  useEffect(() => {
    if (selected !== false && swiperSlide.isActive && yesSelected === false) {
      dispatch(setUserHasSelectedChoice(true));
    }
  }, [refresh]);

  return (
    <div className="mydict mt-10">
      <div className="w-full">
        {choices.map((c) => (
          <div
            style={{ backgroundColor: selected === c.id ? "#AACEEC" : "#fff" }}
            onClick={() => {
              selectChoice(c.id, c.status);
              dispatch(
                setTempUserResponses({
                  question,
                  score: c.status === false ? 0 : 1,
                  response: c.name,
                }),
              );

              c.status === false ? (onError ? onError() : null) : null;
            }}
            key={c.id}
            className=" bg-secondaryLight shadow-sm transition-all duration-300 hover:shadow-sm rounded-md cursor-pointer py-3 px-3 h-[50px]"
          >
            <h5 className=" text-mainLight text-center">{c.name}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BinaryChoices;
