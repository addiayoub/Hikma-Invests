import Message from "./Message";
import { useSwiperSlide } from "swiper/react";
import { useDispatch, useSelector } from "react-redux";
import {
  setTempUserResponses,
  setUserHasSelectedChoice,
} from "../../../redux/smProjectSlice";
import {useEffect, useState} from "react";

const chars = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const bdColors = {
  0: "rgb(34 197 94)",
  1: "#E61C0E",
  2: "rgb(115 115 115)",
};
const bgColors = {
  0: "rgb(187 247 208)",
  1: "rgb(254 226 226)",
  2: "rgb(229 231 235)",
};

// eslint-disable-next-line react/prop-types
const Prospects = ({ prospects, question }) => {
  const swiperSlide = useSwiperSlide();
  const [selected, setSelected] = useState(false);
  const [id, setId] = useState(null);
  const [borderColor, setBorderColor] = useState("");
  const [bgColor, setBgColor] = useState("");
  const [message, setMessage] = useState("");
  const [disabled, setDisabled] = useState(false);

  // const pass = useSelector(state => state.questionnaire.userHasSelectedChoice)
  const refresh = useSelector(
    (state) => state.smProjetQuestionnaire.refreshSlidersState,
  );
  const dispatch = useDispatch();

  const handleSelect = (type, id, message, response) => {
    setSelected(type);
    setId(id);
    setBorderColor(bdColors[type]);
    setBgColor(bgColors[type]);
    setMessage(message);
    dispatch(setUserHasSelectedChoice(true));

    let score = 0;
    if (type === 0) {
      score = 1;
    } else if (type === 1) {
      score = 0;
    } else {
      score = -1;
    }

    dispatch(
      setTempUserResponses({
        question,
        response,
        score,
      }),
    );
    setDisabled(true);
  };
  useEffect(() => {
    if (selected !== false && swiperSlide.isActive) {
      dispatch(setUserHasSelectedChoice(true));
    }
  }, [refresh]);

  return (
    <>
      {/* eslint-disable-next-line react/prop-types */}
      {prospects.map((p, i) => (
        <button
          disabled={disabled}
          key={p.id}
          style={{
            borderColor: id === p.id ? borderColor : "#000",
            borderWidth: id === p.id ? 2 : 0,
            backgroundColor: id === p.id ? bgColor : "white",
          }}
          onClick={() => handleSelect(p.type, p.id, p.message, p.name)}
          className={`
                cursor-pointer rounded-md px-5 py-3  w-full my-5 shadow-md transition-all duration-100  flex gap-x-6
                mb-10
            `}
        >
          <p className=" w-fit h-full text-lg text-grayLight">{chars[i]}</p>
          <p className="w-full h-full text-lg text-grayLight font-light ">
            {p.name}
          </p>
        </button>
      ))}

      {message && <Message message={message} color={bgColor} />}
    </>
  );
};

export default Prospects;
