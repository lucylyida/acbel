import React from 'react'

const Dropdown_Grey=props=>{
    const {width,height}=props
    const vw=width===undefined  ?35 :width
    const vh=height===undefined ?35 :height
    return(
        <svg 
width={vw}
height={vh}
viewBox="0 0 48 48" >     
   
   <g id="Style-Guide" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="A-Icons" transform="translate(-656.000000, -134.000000)" fill="#999999" fillRule="nonzero">
            <g id="Group-7" transform="translate(627.000000, 100.000000)">
                <path d="M49.9369014,34.3957752 C49.6731972,34.1318521 49.3606049,34 48.9994163,34 L30.3334063,34 C29.9720717,34 29.6596983,34.1318521 29.3957752,34.3957752 C29.1318521,34.6599901 29,34.9723636 29,35.3334793 C29,35.694522 29.1318521,36.0068954 29.3957752,36.2708915 L38.7288167,45.6039329 C38.9930316,45.867856 39.3054051,46 39.6664478,46 C40.0274905,46 40.3401558,45.867856 40.60386,45.6039329 L49.9369014,36.2708185 C50.2005327,36.0068954 50.3328955,35.694522 50.3328955,35.3334063 C50.3328955,34.9723636 50.2005327,34.6599901 49.9369014,34.3957752 Z" id="Path"></path>
            </g>
        </g>
    </g>
</svg>)}
export default Dropdown_Grey;