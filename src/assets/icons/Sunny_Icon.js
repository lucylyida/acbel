import React from 'react'

const Sunny_Icon = props => {
    const { width, height } = props
    const vw = width === undefined ? 35 : width
    const vh = height === undefined ? 35 : height
    return (
        <svg
            width={vw}
            height={vh}
            viewBox="-8 -3 48 48" >

            <g id="Style-Guide" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="A-Icons" transform="translate(-107.000000, -217.000000)" fill="#FFCD59" fillRule="nonzero">
                    <g id="Group-7" transform="translate(87.000000, 197.000000)">
                        <g id="icons8-sun" transform="translate(20.000000, 20.000000)">
                            <path d="M19.9781977,0.446039237 C19.2086403,0.458068642 18.5941126,1.09088584 18.6046512,1.86046512 L18.6046512,6.04651163 C18.5975345,6.54972453 18.861919,7.01778795 19.2965668,7.27147124 C19.7312145,7.52515453 20.2687855,7.52515453 20.7034332,7.27147124 C21.138081,7.01778795 21.4024655,6.54972453 21.3953488,6.04651163 L21.3953488,1.86046512 C21.4005136,1.48330189 21.2527767,1.12011172 20.9858004,0.85364887 C20.7188241,0.587186022 20.3553503,0.440148454 19.9781977,0.446039237 Z M7.15843023,5.76580415 C6.59112684,5.76706206 6.08104334,6.1116268 5.86808456,6.63744356 C5.65512578,7.16326033 5.78168043,7.76566713 6.18822674,8.16133721 L9.14789237,11.121003 C9.49787178,11.4855127 10.0175641,11.6323425 10.5065454,11.5048663 C10.9955267,11.37739 11.37739,10.9955267 11.5048663,10.5065454 C11.6323425,10.0175641 11.4855127,9.49787178 11.121003,9.14789237 L8.16133721,6.18822674 C7.8979743,5.9175022 7.53612229,5.76509169 7.15843023,5.76580415 Z M32.7979651,5.76580665 C32.4354554,5.77660824 32.0913906,5.92811405 31.8386628,6.18822674 L28.8789967,9.14789237 C28.5144912,9.49787276 28.3676646,10.0175631 28.4951415,10.5065419 C28.6226184,10.9955206 29.0044797,11.3773819 29.4934585,11.5048586 C29.9824373,11.6323354 30.5021276,11.4855087 30.8521079,11.121003 L33.811774,8.16133721 C34.2244632,7.76018632 34.3485493,7.14682606 34.1242408,6.61680708 C33.8999322,6.08678811 33.3732447,5.74884077 32.7979651,5.76580665 Z M20,10.2325581 C14.6055908,10.2325581 10.2325581,14.6055908 10.2325581,20 C10.2325581,25.3944092 14.6055908,29.7674419 20,29.7674419 C25.3944092,29.7674419 29.7674419,25.3944092 29.7674419,20 C29.7674419,14.6055908 25.3944092,10.2325581 20,10.2325581 Z M1.86046512,18.6046512 C1.35725221,18.5975345 0.889188794,18.861919 0.635505505,19.2965668 C0.381822216,19.7312145 0.381822216,20.2687855 0.635505505,20.7034332 C0.889188794,21.138081 1.35725221,21.4024655 1.86046512,21.3953488 L6.04651163,21.3953488 C6.54972453,21.4024655 7.01778795,21.138081 7.27147124,20.7034332 C7.52515453,20.2687855 7.52515453,19.7312145 7.27147124,19.2965668 C7.01778795,18.861919 6.54972453,18.5975345 6.04651163,18.6046512 L1.86046512,18.6046512 Z M33.9534884,18.6046512 C33.4502755,18.5975345 32.982212,18.861919 32.7285288,19.2965668 C32.4748455,19.7312145 32.4748455,20.2687855 32.7285288,20.7034332 C32.982212,21.138081 33.4502755,21.4024655 33.9534884,21.3953488 L38.1395349,21.3953488 C38.6427478,21.4024655 39.1108112,21.138081 39.3644945,20.7034332 C39.6181778,20.2687855 39.6181778,19.7312145 39.3644945,19.2965668 C39.1108112,18.861919 38.6427478,18.5975345 38.1395349,18.6046512 L33.9534884,18.6046512 Z M10.1071947,28.4565772 C9.74468507,28.4673786 9.40062028,28.6188843 9.14789237,28.8789967 L6.18822674,31.8386628 C5.82372003,32.1886428 5.67689248,32.7083336 5.80436909,33.1973131 C5.9318457,33.6862925 6.31370742,34.0681543 6.80268681,34.1956311 C7.2916662,34.3231079 7.81135704,34.1762805 8.16133721,33.811774 L11.121003,30.8521079 C11.5336922,30.4509571 11.6577784,29.8375969 11.43347,29.3075779 C11.2091616,28.777559 10.6824742,28.4396115 10.1071947,28.4565772 L10.1071947,28.4565772 Z M29.851926,28.4565772 C29.2841262,28.456726 28.7730291,28.8008867 28.5593704,29.3269539 C28.3457116,29.8530211 28.4720969,30.4560912 28.8789967,30.8521079 L31.8386628,33.811774 C32.1886441,34.1762755 32.7083324,34.323099 33.1973086,34.1956216 C33.6862849,34.0681442 34.0681442,33.6862849 34.1956216,33.1973086 C34.323099,32.7083324 34.1762755,32.1886441 33.811774,31.8386628 L30.8521079,28.8789967 C30.5894039,28.6089512 30.2286726,28.4565772 29.851926,28.4565772 L29.851926,28.4565772 Z M19.9781977,32.5390623 C19.2086402,32.5510917 18.5941125,33.183909 18.6046512,33.9534884 L18.6046512,38.1395349 C18.5975345,38.6427478 18.861919,39.1108112 19.2965668,39.3644945 C19.7312145,39.6181778 20.2687855,39.6181778 20.7034332,39.3644945 C21.138081,39.1108112 21.4024655,38.6427478 21.3953488,38.1395349 L21.3953488,33.9534884 C21.4005137,33.5763251 21.2527767,33.2131349 20.9858005,32.946672 C20.7188242,32.6802091 20.3553503,32.5331715 19.9781977,32.5390623 Z" id="Shape"></path>
                        </g>
                    </g>
                </g>
            </g>
        </svg>)
}
export default Sunny_Icon;