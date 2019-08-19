import React from 'react'
import { withMedia } from 'react-media-query-hoc'
import { fsc } from '../helper/fontColorHelper'

const KmInputBox = props => {
    const {
        isSmall, style, onChange = () => null, type = 'text', value, placeholder, disabled = false, id,
        required = true, icon = null, onClick = () => null, media
    } = props
    const defaultStyle = { border: '1px solid #cccccc', borderRadius: '5px', cursor: 'pointer', fontSize: fsc(media, 14) }
    const userStyle = style === undefined ? {} : style
    const inputbox = document.getElementById(id)
    return (
        <div>
            <input
                id={id}
                onChange={onChange}
                type={type}
                value={value}
                className="form-control"
                placeholder={placeholder}
                style={{ ...defaultStyle, ...userStyle, outline: 'none', boxShadow: 'none' }}
                disabled={disabled}
                required={required}
                onFocus={e => document.getElementById(id).style.border = '2px solid #193D91'}
                onBlur={e => document.getElementById(id).style.border = '1px solid #cccccc'}
            />
            <div onClick={onClick} style={{ cursor: 'pointer', position: 'absolute', right: 20, marginTop: -28 }}>{icon}</div>
        </div>
    )
}
export default withMedia(KmInputBox)
// padding: isSmall === undefined ? "30px" : '25px',