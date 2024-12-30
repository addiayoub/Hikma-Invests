import { useCallback } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Input from "./Input";
import { useDispatch } from "react-redux";

function valuetext(value) {
  return `${value} %`;
}

// eslint-disable-next-line react/prop-types
export default function OurSlider({
  min,
  max,
  title,
  t1,
  t2,
  v,
  montant,
  step,
  unit,
  setV,
}) {
  const dispatch = useDispatch();

  const onChange = useCallback(
    (e, v) => {
      dispatch(setV(v));
    },
    [v],
  );
  return (
    <div className="smp-Slider my-3 py-2">
      <Box sx={{ width: "100%", marginTop: 2 }}>
        {montant ? (
          <div className="flex items-center">
            <label
              htmlFor="website"
              className="text-sm font-medium text-gray-900"
            >
              {title}
            </label>
            <div className="text-black flex justify-end flex-1">
              <Input unit={unit} v={v} setV={setV} />
            </div>
          </div>
        ) : (
          <div className=" text-black  justify-between opacity-70">
            <h6 className=" text-right">{v}%</h6>
            {/*<h6 className=' text-right'>{100 - v}%</h6>*/}
          </div>
        )}
        <Slider
          aria-label="Temperature"
          defaultValue={0}
          getAriaValueText={valuetext}
          // color="warning"
          step={step ?? 1}
          min={min}
          max={max}
          size="small"
          value={v}
          onChange={onChange}
        />
        <div className="  flex justify-between opacity-70">
          <h6 className=" text-left text-mainLight">{t1}</h6>
          <h6 className=" text-right text-black">{t2}</h6>
        </div>
      </Box>
      <div className=" opacity-50">
        <hr />
      </div>
    </div>
  );
}
