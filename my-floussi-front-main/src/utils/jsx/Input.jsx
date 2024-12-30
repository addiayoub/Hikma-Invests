import React, { memo, useState } from 'react'
import TextField from '@mui/material/TextField';



const FormInput = ({ FormLabel, type, value, setValue }) => {
    const handleChange = (e, type) => {

        const v = e.target.value
        const regex = /^[0-9\b]+$/;
        if (type === 'number') {
            if (v.match(regex)) {
                setValue(v);
            }
            return
        }
        if (type === 'string') {
            setValue(v)
        }

        if (type === 'float') {
            const regex = /^\d*\.?\d{0,2}$/
            if (v.match(regex)) {
                setValue(v)
            }

        }
    }

    return (

        <TextField
            value={value}
            id="filled-basic"
            label={FormLabel} variant="filled"
            onChange={(e) => {
                handleChange(e)

            }}
        />
    )
}

export default memo(FormInput)