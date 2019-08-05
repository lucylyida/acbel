import React from 'react'

const Power_Icon=props=>{
    const {width,height}=props
    const vw=width===undefined  ?35 :width
    const vh=height===undefined ?35 :height
    return(
        <svg 
width={vw}
height={vh}
viewBox="0 0 48 48" >
    <g id="Style-Guide" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="A-Icons" transform="translate(-373.000000, -116.000000)">
            <g id="Group-5" transform="translate(357.000000, 100.000000)">
                <g id="Power-Output" transform="translate(16.000000, 16.000000)">
                    <g id="Group-2">
                        <circle id="Oval" fill="#0B3D92" cx="24" cy="24" r="24"></circle>
                        <g id="renewable-energy" transform="translate(17.000000, 12.000000)" fill="#FFFFFF" fillRule="nonzero">
                            <path d="M15.2704532,11.7866828 C15.1833716,11.4192145 14.913571,11.1238912 14.5556737,11.0049789 L9.21955287,9.22593353 L13.0092326,1.64664653 C13.2471299,1.16976435 13.1047976,0.589848943 12.6725076,0.277558912 C12.2381148,-0.0336435045 11.6433353,0.0131238671 11.2673112,0.391178248 L0.391178248,11.2673112 C0.124567976,11.5339215 0.0151540785,11.9194441 0.101220544,12.2858973 C0.188302115,12.6533656 0.458102719,12.9486888 0.816,13.0676012 L6.15212085,14.8466465 L2.36244109,22.4259335 C2.12454381,22.9028157 2.26687613,23.4827311 2.69916616,23.7950211 C3.13210876,24.105281 3.7257281,24.0598912 4.10436254,23.6814018 L14.9804955,12.8052689 C15.2471057,12.5386586 15.3565196,12.153136 15.2704532,11.7866828 Z" id="Path"></path>
                        </g>
                    </g>
                </g>
            </g>
        </g>
    </g>
</svg>)}
export default Power_Icon;