import React from 'react'

const Export_Icon=props=>{
    const {width,height}=props
    const vw=width===undefined  ?35 :width
    const vh=height===undefined ?35 :height
    return(
        <svg 
width={vw}
height={vh}
viewBox="0 0 48 48" >     
   
   <g id="Style-Guide" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" opacity="0.45">
        <g id="A-Icons" transform="translate(-475.000000, -220.000000)" fill="#0B3D92" fillRule="nonzero">
            <g id="Group-7" transform="translate(447.000000, 192.000000)">
                <g id="scale-symbol" transform="translate(28.000000, 28.000000)">
                    <polygon id="Path" points="11.9841245 0 11.9841245 1.99736965 20.5727626 1.99736965 8.28901167 14.2810739 9.6871751 15.6792374 21.9708794 3.39548638 21.9708794 11.884249 23.968249 11.884249 23.968249 0"></polygon>
                    <polygon id="Path" points="17.9761868 21.9708794 1.99736965 21.9708794 1.99736965 5.99206226 11.9841245 5.99206226 13.9814942 3.99469261 -8.52651283e-14 3.99469261 -8.52651283e-14 23.968249 19.9735564 23.968249 19.9735564 9.98675486 17.9761868 11.9841245"></polygon>
                </g>
            </g>
        </g>
    </g>
</svg>)}
export default Export_Icon;