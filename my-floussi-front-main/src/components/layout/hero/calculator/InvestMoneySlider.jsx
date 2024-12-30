import Slider from "@mui/material/Slider";

const InvestMoneySlider = ({ v, setV }) => {
  const handleChange = (e, v) => {
    setV(v);
  };

  return (
    <div className="nvest-slider  my-6">
      <Slider
        aria-label="Always visible"
        defaultValue={0}
        min={0}
        step={10}
        max={2000}
        size="medium"
        value={v}
        onChange={handleChange}
      />
    </div>
  );
};

export default InvestMoneySlider;
