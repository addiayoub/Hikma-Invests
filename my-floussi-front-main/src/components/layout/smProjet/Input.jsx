import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSwiperSlide } from "swiper/react";
import { setUserHasSelectedChoice } from "../../../redux/smProjectSlice";

// eslint-disable-next-line react/prop-types
const Input = ({ onChange, inp }) => {
  const refresh = useSelector(
    (state) => state.smProjetQuestionnaire.refreshSlidersState,
  );
  const dispatch = useDispatch();

  const swiperSlide = useSwiperSlide();

  useEffect(() => {
    let t;
    if (swiperSlide.isActive) {
      t = setTimeout(() => {
        const value = inp.value.toString().trim();
        if (value && value != 0 && swiperSlide.isActive) {
          dispatch(setUserHasSelectedChoice(true));
        } else {
          dispatch(setUserHasSelectedChoice(false));
        }
      }, 10);
    }
    return () => clearTimeout(t);
  }, [inp.value, refresh, swiperSlide.isActive]);

  return (
    <div>
      <input
        type={"number"}
        value={inp.value.toString()}
        onChange={onChange}
        className=" bg-white outline-none w-full text-black border border-grayLight px-3 py-5 rounded-md"
      />
    </div>
  );
};

export default Input;
