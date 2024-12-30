import Slider from "@mui/material/Slider";

const InvestYearsSlider = ({ v, setV }) => {
  const handleChange = (e, v) => {
    setV(v);
  };

  return (
    <div className="nvest-slider  my-6">
      <Slider
        aria-label="Always visible"
        defaultValue={0}
        min={0}
        step={1}
        max={50}
        size="medium"
        value={v}
        onChange={handleChange}
      />
    </div>
  );
};

export default InvestYearsSlider;
