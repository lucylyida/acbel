import React from 'react'


const KmInputBox = props => {
    const { isSmall, style, onChange, type, value, placeholder } = props
    const defaultStyle = {
        border: 'none', borderRadius: '5px', cursor: 'pointer',
        focus: {
            bordeColor: '#28a745',
            boxShadow: '0 0 0 0.2rem rgba(40, 167, 69, 0.25)'
        },
        hover: {
            borderColor: ' #66afe9',
            outline: 0,
        },
      
    }
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
// padding: isSmall === undefined ? "30px" : '25px',