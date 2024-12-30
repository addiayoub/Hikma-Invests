import { useSwiper } from "swiper/react";
import { ArrowLeft } from "react-feather";
import { useDispatch } from "react-redux";
import {
  refreshSliders,
  setUserHasSelectedChoice,
} from "../../../redux/smProjectSlice";

const Cancel = ({ onClick }) => {
  const dispatch = useDispatch();
  const swiper = useSwiper();

  return (
    <div
      onClick={() => {
        dispatch(refreshSliders());
        dispatch(setUserHasSelectedChoice(true));
        swiper.slidePrev();
      }}
      className=" mx-auto bg-transparent text-grayLight text-lg border border-lightBlue  text-center mt-5 rounded-md shadow-sm px-5 py-3 transition-all duration-300 hover:shadow-md cursor-pointer flex "
    >
      <ArrowLeft size={25} color="gray" />

      <h3 className=" text-center w-full">Etape precedente</h3>
    </div>
  );
};

export default Cancel;
