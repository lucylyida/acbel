import React from 'react'

const Edit_Icon=props=>{
    const {width,height}=props
    const vw=width===undefined  ?35 :width
    const vh=height===undefined ?35 :height
    return(
        <svg 
width={vw}
height={vh}
viewBox="0 0 48 48" >     
   
   <g id="Style-Guide" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" opacity="0.45">
        <g id="A-Icons" transform="translate(-385.000000, -220.000000)" fill="#0B3D92" fillRule="nonzero">
            <g id="Group-7" transform="translate(357.000000, 192.000000)">
                <g id="pencil-edit-button" transform="translate(28.000000, 28.000000)">
                    <path d="M14.9209679,3.99810964 L19.8021777,8.8792741 L7.44648771,21.2349641 L2.56804537,16.3537996 L14.9209679,3.99810964 Z M23.5060718,2.82088469 L21.3292401,0.64405293 C20.4879698,-0.197217391 19.1219206,-0.197217391 18.2777921,0.64405293 L16.1926049,2.72924008 L21.0738147,7.61044991 L23.5060718,5.17819282 C24.1585633,4.52565595 24.1585633,3.47337618 23.5060718,2.82088469 Z M0.013610586,23.2146692 C-0.075221172,23.6144575 0.285731569,23.9726881 0.685565217,23.8754631 L6.12485444,22.5566427 L1.2464121,17.6754783 L0.013610586,23.2146692 Z" id="Shape"></path>
                </g>
            </g>
        </g>
    </g>
</svg>)}
export default Edit_Icon;