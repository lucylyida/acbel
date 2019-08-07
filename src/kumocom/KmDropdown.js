import React from 'react'

const KmDropdown = props => {
    const { onClick, style, data, selectedItem } = props
    return (
        <div className="dropdown"
            style={{ cursor: 'pointer', background: style ? style.background : null, fontSize: 14 }}>
            <div className="d-flex  border-0 justify-content-center align-items-center"
                id="dropdownMenuButton" data-toggle="dropdown"  >
                <span className="px-2" >{selectedItem.icon}</span>
                <span className="px-1 font-weight-bold">{selectedItem.text}</span>
                <span className="dropdown-toggle px-2 " style={{ color: 'gray', fontSize: 20 }}></span>
            </div>
            <div className="dropdown-menu dropdown-menu-right text-left p-0" aria-labelledby="dropdownMenuButton"
                style={{ backgroundColor: style ? style.backgroundColor : null }}>
                {
                    data.map((v, k) =>
                        <div key={k} className="dropdown-item py-2" onClick={() => onClick(v)} style={{ fontSize: 14 }}>
                            <span className="pr-2" > {v.icon}</span><span>{v.text} </span>
                        </div>
                    )
                }
            </div>
        </div>

    )

}

export default KmDropdown;