import React from 'react'

const Trash = ({ onClick }) => {


    return (
        <div className=' opacity-60 transition-all duration-300 hover:opacity-100 cursor-pointer'>
            <div onClick={onClick} className=' w-fit h-fit'>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="26" viewBox="0 0 30 33">
                    <g id="Icon_feather-trash" dataname="Icon feather-trash" transform="translate(-3 -1.5)">
                        <path id="Path_1" dataname="Path 1" d="M4.5,9h27" fill="none" stroke="#143cbf" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
                        <path id="Path_2" dataname="Path 2" d="M28.5,9V30a3,3,0,0,1-3,3h-15a3,3,0,0,1-3-3V9M12,9V6a3,3,0,0,1,3-3h6a3,3,0,0,1,3,3V9" fill="none" stroke="#143cbf" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
                    </g>
                </svg>


            </div>
        </div>

    )
}

export default Trash