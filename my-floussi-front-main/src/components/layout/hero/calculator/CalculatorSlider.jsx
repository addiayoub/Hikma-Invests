import Slider from '@mui/material/Slider';


const CalculatorSlider = ({ v, setV }) => {
    // const dispatch = useDispatch()

    const handleChange = (e, v) => {
        setV(v)
    }

    return (
        <div className='calc-slider ml-0 my-8 '>
            <Slider
                aria-label="Always visible"
                defaultValue={0}
                min={1}
                step={1}
                max={10}
                size='medium'
                valueLabelDisplay="on"
                value={v}
                onChange={handleChange}
            />

        </div>
    )
}

export default CalculatorSlider 