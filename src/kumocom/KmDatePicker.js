import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

import { withMedia } from 'react-media-query-hoc'
import { fsc } from '../helper/fontColorHelper'

const KmDatePicker = props => {
    const { place="auto-end", media } = props
    const [startDate, setStartDate] = useState(new Date())
    const [value, setValue] = useState(startDate)
    return (
        <div >
            <DatePicker
                className="form-control "
                calendarClassName=""
                popperClassName=""
                popperPlacement={place}
                tabIndex={1}
                placeholderText="calendar"
                customInput={<InputField media={media} />}
                value={value}
                selected={startDate}
                onChange={(date) => setStartDate(date)}
            />
        </div>
    )
}
export default withMedia(KmDatePicker);

export const InputField = ({ onClick, placeholder, onChange, value, noMinWidth, media }) => {
    return (
        <div className="d-flex justify-content-between align-items-center p-3 form-control "
            onClick={onClick} onChange={onChange} style={{ minWidth: noMinWidth ? null : 250 }}>
            <div >{value}</div>
            <div ><i className="far fa-calendar" /></div>
        </div>
     
    )
}

{/* <div className="d-flex" style={{ minWidth: noMinWidth? null: 200, cursor: "pointer" ,}}>
<div className="flex-grow-1 flex-fill bg-dark"  >
    <div className="d-flex justify-content-between align-items-center p-3 form-control bg-primary"
        onClick={onClick} onChange={onChange}>
        <div >{value}</div>
        <div><i className="far fa-calendar" /></div>
    </div>
</div>
</div>  */}



