import React,{useState} from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import {InputField } from './KmDatePicker'
import { withMedia } from 'react-media-query-hoc'


const KmTimePicker = props =>{
    const { place = "auto-end", media, placeholder,noIcon,noMinWidth,noWidth,style } = props
    const [startDate, setStartDate] = useState(new Date())
    const [value, setValue] = useState(startDate)
    return(
        <DatePicker
        placeholderText={placeholder}
        customInput={<InputField media={media} noIcon={noIcon} noMinWidth={noMinWidth} style={style} noWidth={noWidth} />}
        value={value}
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        popperPlacement={place}
        showTimeSelect
        showTimeSelectOnly
        timeIntervals={15}
        dateFormat="h:mm aa"
        timeCaption="Time"
    />

    )
}

export default withMedia(KmTimePicker)