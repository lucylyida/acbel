import React from 'react'

const KmButton = props => {
    const { text, type, onClick, icon, style, className, iconPlace } = props
    const defaultStyle = { background: '#86bdd1', padding: 7 }
    const userStyle = style === undefined ? {} : style

    return (
        <div style={{ minWidth: 250 }}>
        <div
            onClick={onClick}
            type={type === undefined ? "button" : type}
            className={`btn btn-block ${className} text-center`}
            style={{ ...defaultStyle, ...userStyle }}>
            {/* added iconPlace to styling front and back of icon position */}
            {
                iconPlace !== undefined || iconPlace ?
                    <div className="d-flex justify-content-center"> <span style={{ color: '#ffffff', fontSize: 15, fontWeight: 'bold' }}>{text}</span><span>{icon} </span></div> :
                    <div className="d-flex justify-content-center"> <span >{icon}</span><span style={{ color: '#ffffff', fontSize: 15, fontWeight: 'bold' }}>{text} </span></div>
            }
        </div>
        </div>
    )
}

export default KmButton;