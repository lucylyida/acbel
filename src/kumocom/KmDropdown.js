import React from 'react'

const KmDropdown = props => {
    const { onClick, style, data, selectedItem } = props
    return (
        <div className="dropdown"
            style={{ cursor: 'pointer', background: style ? style.background : null }}>
            <div className="d-flex  border-0  px-4"
                id="dropdownMenuButton" data-toggle="dropdown"  >
                <span className="px-2" >{selectedItem.icon}</span>
                <span className="px-1 font-weight-bold">{selectedItem.text}</span>
                <span className="dropdown-toggle px-2 " style={{ color: 'gray', fontSize: 20 }}></span>
            </div>
            <div className="dropdown-menu w-100 text-left" aria-labelledby="dropdownMenuButton"
                style={{ backgroundColor: style ? style.backgroundColor : null }}>
                {
                    data.map((v, k) =>
                        <div key={k} className="dropdown-item  p-2" onClick={() => onClick(v)}>
                            <span className="px-3" > {v.icon}</span><span>{v.text} </span>
                        </div>
                    )
                }
            </div>
        </div>

    )

}

export default KmDropdown;