import React from 'react'

const Home_Icon=props=>{
    const {width,height}=props
    const vw=width===undefined  ?35 :width
    const vh=height===undefined ?35 :height
    return(
        <svg 
width={vw}
height={vh}
viewBox="0 0 48 48" >     
   
   <g id="Style-Guide" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="A-Icons" transform="translate(-553.000000, -116.000000)">
            <g id="Group-7" transform="translate(537.000000, 100.000000)">
                <g id="Logo-Copy-16" transform="translate(16.000000, 16.000000)">
                    <rect id="Rectangle" fill="#FF8800" x="0" y="0" width="48" height="48" rx="3"></rect>
                    <g id="home-button-(1)" opacity="0.803013393" transform="translate(10.800000, 12.000000)" fill="#FFFFFF" fillRule="nonzero">
                        <polygon id="Path" points="10.56 21.5875576 10.56 13.9728111 15.84 13.9728111 15.84 21.5875576 22.44 21.5875576 22.44 11.4345622 26.4 11.4345622 13.2 0.0124423963 0 11.4345622 3.96 11.4345622 3.96 21.5875576"></polygon>
                    </g>
                </g>
            </g>
        </g>
    </g>
</svg>)}
export default Home_Icon;