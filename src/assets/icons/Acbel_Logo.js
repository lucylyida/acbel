import React from 'react'

const Logo = props => {
    const { width, height } = props
    const vw = width === undefined ? 35 : width
    const vh = height === undefined ? 35 : height
    return (
        <svg
            width={vw}
            height={vh}
            viewBox="0 0 48 48"
        >

            <defs
                id="defs44">
                <clipPath
                    clipPathUnits="userSpaceOnUse"
                    id="clipPath61">
                    <rect
                        style={{ fill: '#0000ff', fillRule: 'evenodd' }}
                        id="rect63"
                        width="141.97379"
                        height="135.89708"
                        x="-1583.2562"
                        y="-1535.8087" />
                </clipPath>
                <clipPath
                    clipPathUnits="userSpaceOnUse"
                    id="clipPath74">
                    <path
                        style={{ fill: '#4d4d4d', fillOpacity: 1, stroke: '#ffffff' }}
                        d="m -1511.5222,-1468.2174 59.2715,-57.3184 v 57.3184 z"
                        id="path76"
                    />
                </clipPath>
            </defs>

            <title
                id="title29">Logo Copy 16</title>
            <desc
                id="desc31">Created with Sketch.</desc>

            <rect
                style={{ fill: '#0071be', fillOpacity: 1, fillRule: 'evenodd', strokeWidth: 0.97694737 }}
                id="rect68"
                width="59.271511"
                height="57.318386"
                x="-1511.5222"
                y="-1525.5358"
                clip-path="url(#clipPath74)"
                transform="matrix(0.39586687,0,0,0.39478822,622.80441,604.66579)" />
            <rect
                clip-path="url(#clipPath74)"
                y="-1525.5358"
                x="-1511.5222"
                height="57.318386"
                width="59.271511"
                id="rect78"
                style={{ fill: '#64c902', fillOpacity: 1, fillRule: 'evenodd', strokeWidth: 0.97694737 }}
                transform="matrix(0.39586687,0,0,0.39478822,622.80441,627.52576)" />
            <rect
                transform="matrix(0.39586687,0,0,0.39478822,598.87453,627.52576)"
                style={{ fill: '#00bfd4', fillOpacity: 1, fillRule: 'evenodd', strokeWidth: 0.97694737 }}
                id="rect80"
                width="59.271511"
                height="57.318386"
                x="-1511.5222"
                y="-1525.5358"
                clip-path="url(#clipPath74)" />
            <ellipse
                style={{ fill: '#f6b40a', fillOpacity: 1, fillRule: 'evenodd', strokeWidth: 0.41031581 }}
                id="path82"
                cx="14.277756"
                cy="12.114663"
                rx="11.973147"
                ry="11.940522" />

        </svg>

    )
}
export default Logo;