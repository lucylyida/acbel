import React from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

import { withMedia } from 'react-media-query-hoc'

const KmDatePicker = props => {
    const { place = "auto-end", media, noMinWidth = true, style = {}, noWidth, noIcon, onChange, value } = props
    const inputFieldRef = React.createRef();

    // const [startDate, setStartDate] = useState(new Date())
    // const [value, setValue] = useState(startDate)
    return (
        <DatePicker
            className=""
            calendarClassName=" "
            popperClassName=""
            popperPlacement={place}
            tabIndex={1}
            placeholderText="calendar"
            customInput={
                <InputField 
                    ref={inputFieldRef}
                    media={media}
                    noMinWidth={noMinWidth}
                    style={style}
                    noWidth={noWidth}
                    noIcon={noIcon}  
                />
            }
            value={value}
            selected={value}
            onChange={onChange}
        />

    )
}
export default withMedia(KmDatePicker);

export const InputField = React.forwardRef((props, ref) => {
    const { onClick, onChange, style, noWidth, media, value, noIcon } = props
    return (
        <div className="d-flex justify-content-between align-items-center p-3 form-control "
            onClick={onClick} onChange={onChange}
            ref={ref}
            style={{
                ...style, width: noWidth ?
                    media.mobile ? '100%' :
                        null : 300,
                cursor: 'pointer'
            }}>
            <div >{value}</div>
            <div >{noIcon ? null : <i className="far fa-calendar" />}</div>
        </div>
        /* old version not given ref */
        // <div className="d-flex justify-content-between align-items-center p-3 form-control "
        //     onClick={onClick} onChange={onChange} 
        //     //  ref={ref}
        //     style={{
        //         ...style, width: noWidth ?
        //             media.mobile ? '100%' :
        //                 null : 300,
        //         cursor: 'pointer'
        //     }}>
        //     <div >{value}</div>
        //     <div >{noIcon ? null : <i className="far fa-calendar" />}</div>
        // </div>

    )
})

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



