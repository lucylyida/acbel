import React from 'react'


const KmInputBox = props => {
    const { isSmall, style, onChange, type, value, placeholder } = props
    const defaultStyle = { border: 'none', padding: isSmall === undefined ? "30px" : '25px', borderRadius: '5px', }
    const userStyle = style === undefined ? {} : style

    return (
        <input
            onChange={onChange}
            type={type}
            value={value}
            className="form-control"
            placeholder={placeholder}
            style={{ ...defaultStyle, ...userStyle }}
        />
    )
}
export default KmInputBox