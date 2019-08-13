import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

const KmDatePicker = props => {
    const {place}  = props
    const [startDate, setStartDate] = useState(new Date())
    const [value, setValue] = useState(startDate)
    return (
        <div >
            <DatePicker
                className="form-control"
                calendarClassName=" "
                popperClassName=""
                popperPlacement={place}
                tabIndex={1}
                placeholderText="calendar"
                customInput={<InputField />}
                value={value}
                selected={startDate}
                onChange={(date) => setStartDate(date)}
            />
        </div>
    )
}
export default KmDatePicker;

export const InputField = ({ onClick, placeholder, onChange, selected, value }) => {
    return (
        <div className="d-flex" style={{ minWidth: 200, cursor: "pointer" ,}}>
            <div className="flex-grow-1 flex-fill "  >
                <div className="d-flex justify-content-between  form-control "
                    onClick={onClick} onChange={onChange}>
                    <div >{value}</div>
                    <div><i className="far fa-calendar" /></div>
                </div>
            </div>
        </div>
    )
}