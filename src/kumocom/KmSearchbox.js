import React from 'react'

const KmSearchbox = props => {
    const { style, onChange, onClick } = props
    const defaultStyle = { cursor: 'pointer', minWidth:200 }
    const userStyle = style === undefined ? {} : style
    
    return (
        <div className="input-group p-0" style={{ ...defaultStyle, backgroundColor: userStyle.backgroundColor }}>
            <input
                className="form-control py-2 border-right-0 "
                type="search"
                aria-label="Search"
                placeholder="Search"
                id="search-input"
                style={{ ...{ fontSize:15,}, ...userStyle}}
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
export default KmSearchbox;