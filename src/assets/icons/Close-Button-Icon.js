import React from 'react'

const CloseButton_Icon = props => {
    const { width, height } = props
    const vw = width === undefined ? 35 : width
    const vh = height === undefined ? 35 : height
    return (
        <svg
            width={vw}
            height={vh}
            viewBox="0 0 48 48" >

            <g id="Style-Guide" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="A-Icons" transform="translate(-655.000000, -220.000000)" fill="#BBBBBB" fillRule="nonzero">
                    <g id="Group-7" transform="translate(627.000000, 192.000000)">
                        <g id="close-button" transform="translate(28.000000, 28.000000)">
                            <polygon id="Path" points="24 2.4 21.6 0 12 9.6 2.4 0 0 2.4 9.6 12 0 21.6 2.4 24 12 14.4 21.6 24 24 21.6 14.4 12"></polygon>
                        </g>
                    </g>
                </g>
            </g>
        </svg>)
}
export default CloseButton_Icon;