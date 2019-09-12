import React from 'react'
import { withMedia } from 'react-media-query-hoc'
import { fsc } from '../helper/fontColorHelper'

const KmSearchbox = props => {
    const { style, onChange, onClick, media, placeholder, noMinwidth = false, icon = null } = props
    const defaultStyle = { cursor: 'pointer', boxShadow: 'none', outline: 'none', }
    const userStyle = style === undefined ? {} : style

    return (
        <div className="p-0" style={{ ...defaultStyle, backgroundColor: userStyle.backgroundColor, }}>
            <input
                className="form-control py-2 "
                type="search"
                aria-label="Search"
                placeholder={placeholder}
                id="search-input"
                style={{ fontSize: fsc(media, 15), ...userStyle, minWidth: noMinwidth ? 500 : 100, ...defaultStyle }}
                onChange={onChange}
            />
            {/* <span className="input-group-append">
                <div className="input-group-text bg-transparent" onClick={onClick}>
                    <i className="fa fa-search"></i>
                </div>
            </span> */}
            <div className='d-flex justify-content-end pr-2'
                style={{ position: 'relative', top: -26 }}
            >
                {icon}
            </div>
        </div>
    )
}
export default withMedia(KmSearchbox);
