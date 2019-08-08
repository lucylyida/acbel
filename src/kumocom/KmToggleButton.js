import React from 'react'

const KmToggleButton = (props) => {
    const { text, btnNumber, selected, onClick } = props
    return (
        <button
            onClick={() => onClick(btnNumber)}
            type="button"
            className={`btn px-2 py-1`}
            style={{
                outline: 'none',
                boxShadow: 'none',
                border: 'none',
                borderRadius: 4,
                border: `1px solid ${selected ? "#416AAC" : "#88A2CD"}`,
                color: selected ? "#416AAC" : "#88A2CD",
                fontSize: 12,
            }}>
            <b>{text}</b>
        </button>
    )
}

export default KmToggleButton