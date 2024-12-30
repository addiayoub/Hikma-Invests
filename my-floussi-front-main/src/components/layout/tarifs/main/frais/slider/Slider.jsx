import Slider from "@mui/material/Slider";
import { useDispatch, useSelector } from "react-redux";
import { setSommePlacee } from "../../../../../../redux/tarifsSlice.js";
import { addSpacesToNumber } from "../../../../../../utils/sankeyData/sankeyCalucaltors.js";
import Box from "@mui/material/Box";

function valuetext(value) {
  return (
    <div className=" py-2 px-2">
      <h6 className="text-white text-sm lg:text-lg text-center">
        somme placée
      </h6>
      <p className="text-xl text-center flex items-center justify-center text-white text-md ">{`${addSpacesToNumber(value)} MAD`}</p>
    </div>
  );
}

const TarifsSlider = () => {
  const dispatch = useDispatch();

  const { sommePlacee } = useSelector((state) => state.tarifs);
  const handleChange = (e, v) => {
    dispatch(setSommePlacee(v));
  };



    return (
    <div className=" w-[80%] mx-auto my-5">
        <Box>
            <Slider
                aria-label=""
                defaultValue={0}
                valueLabelFormat={valuetext}
                min={0}
                step={500}
                max={1000000}
                size="medium"
                valueLabelDisplay="on"
                value={sommePlacee}
                onChange={handleChange}
            />
        </Box>
    </div>
  );
};

export default TarifsSlider;
