import React from 'react'
import { Link } from 'react-router-dom'
import { fsc } from "../helper/fontColorHelper"
import { withMedia } from "react-media-query-hoc"

const KmLink = props => {
    const { onClick, text, className, style, to, currentLink, media } = props
    const isSelected = currentLink === to

    const defaultStyle = {
        display: "inline-block",
        fontSize: fsc(media, 16),
        cursor: 'pointer',
        borderBottom: isSelected ? '2px solid #FF8902' : null,
        color: isSelected ? 'black' : 'gray',
        fontWeight: isSelected ? 'bold' : null,
        textDecoration: 'none',
        whiteSpace: 'nowrap'
    }
    const userStyle = style === undefined ? {} : style
    return (

        <Link
            className={`text-center coolLink ${className}`}
            style={{ ...defaultStyle, ...userStyle }}
            onClick={onClick}
            to={to} >
            {text}
        </Link>

    )
}
export default withMedia(KmLink)