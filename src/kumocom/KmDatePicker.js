import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

import { withMedia } from 'react-media-query-hoc'
import { fsc } from '../helper/fontColorHelper'

const KmDatePicker = props => {
    const { place = "auto-end", media, noMinWidth = true, style = {}, noWidth,noIcon } = props
    const [startDate, setStartDate] = useState(new Date())
    const [value, setValue] = useState(startDate)
    return (
        <DatePicker
            className=""
            calendarClassName=""
            popperClassName=""
            popperPlacement={place}
            tabIndex={1}
            placeholderText="calendar"
            customInput={<InputField media={media} noMinWidth={noMinWidth} style={style} noWidth={noWidth} noIcon={noIcon} />}
            value={value}
            selected={startDate}
            onChange={(date) => setStartDate(date)}
        />
    )
}
export default withMedia(KmDatePicker);

export const InputField = ({ onClick, placeholder, onChange, value, noMinWidth, media, style, noWidth,noIcon }) => {
    return (
        <div className="d-flex justify-content-between align-items-center p-3 form-control "
            onClick={onClick} onChange={onChange} style={{
                ...style, width: noWidth ?
                    media.mobile ? '100%' :
                        null : 300,
                        cursor:'pointer'
            }}>
            <div >{value}</div>
            <div >{noIcon ? null : <i className="far fa-calendar" />}</div>
        </div>

    )
}


// style={{ width: media.mobile ? '100%' : 400 }}
{/* <div className="d-flex" style={{ minWidth: noMinWidth? null: 200, cursor: "pointer" ,}}>
<div className="flex-grow-1 flex-fill bg-dark"  >
    <div className="d-flex justify-content-between align-items-center p-3 form-control bg-primary"
        onClick={onClick} onChange={onChange}>
        <div >{value}</div>
        <div><i className="far fa-calendar" /></div>
    </div>
</div>
</div>  */}



