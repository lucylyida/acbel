import React from 'react'
import {withMedia} from 'react-media-query-hoc'
import {fsc} from '../helper/fontColorHelper'

const KmSearchbox = props => {
    const { style, onChange, onClick,media ,placeholder} = props
    const defaultStyle = { cursor: 'pointer', minWidth:200 }
    const userStyle = style === undefined ? {} : style
    
    return (
        <div className="input-group p-0" style={{ ...defaultStyle, backgroundColor: userStyle.backgroundColor }}>
            <input
                className="form-control py-2 border-right-0 "
                type="search"
                aria-label="Search"
                placeholder={placeholder}
                id="search-input"
                style={{ ...{ fontSize:fsc(media,15),}, ...userStyle}}
                onChange={onChange}
            />
            <span className="input-group-append">
                <div className="input-group-text bg-transparent" onClick={onClick}>
                    <i className="fa fa-search"></i>
                </div>
            </span>
        </div>
    )
}
export default withMedia(KmSearchbox);