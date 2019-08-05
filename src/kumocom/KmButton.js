import React from 'react'

const KmButton = props => {
    const { text, type, onClick, icon, style, className, iconPlace } = props
    const defaultStyle = { width: 150, background: '#86bdd1',padding:'7px' }
    const userStyle = style === undefined ? {} : style

    return (
        <div>
            <button
                onClick={onClick}        
                type={type === undefined ? "button" : type}
                className={`btn btn-block ${className} text-center`}                                                                                           
                style={{ ...defaultStyle, ...userStyle }}
            >
                {/* added iconPlace to styling front and back of icon position */}
                {
                    iconPlace !== undefined || iconPlace ?        
                       <div> <span className="m-1">{text}</span><span>{icon} </span></div>  :
                       <div> <span className="m-1">{icon}</span><span>{text} </span></div>
                }

            </button>
        </div>
    )
}

export default KmButton;