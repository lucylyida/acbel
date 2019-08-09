import React from 'react'
import { withMedia } from 'react-media-query-hoc'
import { fsc } from '../helper/fontColorHelper'

const KmDropdown = props => {
    const { onClick, style, data, media, selectedItem, labelHide = false } = props
    return (
        <div className="dropdown"
            style={{ cursor: 'pointer', background: style ? style.background : null, fontSize: fsc(media, 14), whiteSpace: 'nowrap' }}>
            <div className="d-flex  border-0 justify-content-center align-items-center"
                id="dropdownMenuButton" data-toggle="dropdown">
                {selectedItem !== undefined && <span className="px-0" >{selectedItem.icon}</span>}
                {!labelHide && selectedItem !== undefined && <span className="px-2 font-weight-bold">{selectedItem.text}</span>}
                {!labelHide && <span className="dropdown-toggle " style={{ color: 'gray', fontSize: 20 }}></span>}
            </div>
            <div className="dropdown-menu dropdown-menu-right text-left p-0 mt-2" aria-labelledby="dropdownMenuButton"
                style={{ backgroundColor: style ? style.backgroundColor : null, }}>
                {
                    data.map((v, k) =>
                        <div key={k} className="dropdown-item py-2" onClick={() => onClick(v)} style={{ fontSize: fsc(media, 14) }}>
                            <span className="pr-2" >{v.icon}</span><span style={{ color: style ? style.color : null }}>{v.text}</span>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default withMedia(KmDropdown);