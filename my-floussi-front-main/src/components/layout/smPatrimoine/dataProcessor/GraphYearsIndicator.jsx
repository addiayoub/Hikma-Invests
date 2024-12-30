import { memo } from 'react'

const GraphYearsIndicator = ({ years }) => {
    return (
        years && <div className=' opacity-70 text-black flex justify-between items-center  w-[90%] my-0 mx-auto'>
            <h6 className=' text-left'>Aujourd'hui</h6>
            <h6 className=' text-right'>{years} ans</h6>

        </div>
    )
}

export default memo(GraphYearsIndicator)