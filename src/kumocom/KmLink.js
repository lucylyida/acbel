import React from 'react'
import {Link} from 'react-router-dom'

const KmLink = props => {
    const { onClick, text, className, style, to, currentLink} = props
    const isSelected = currentLink===to
    const defaultStyle = {
        display: "inline-block",
        fontSze:13,
        cursor: 'pointer',
        borderBottom: isSelected ? '2px solid #FF8902' : null,
        color: isSelected ? 'black' : 'gray',
        fontWeight: isSelected ? 'bold' : null,
        textDecoration:'none',
    }
    const userStyle = style === undefined ? {} : style
    return (
        <div className="pl-3"> 
        <Link
            className={`px-1 pb-1 p-1 text-center coolLink ${className}`}
            style={{...defaultStyle,...userStyle }}
            onClick={onClick}
            to={to} >
            {text}
        </Link>
        </div>
    )
}
export default KmLink