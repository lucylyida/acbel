import React, { useState } from 'react'
import { withMedia } from 'react-media-query-hoc'
import { fsc } from '../../../helper/fontColorHelper'


const InverterCollapseItem = props => {
    const { data, text, codeno, selected, style, onClick, media } = props
    const [expand, setExpand] = useState(false)

    return (
        <div className="py-2">
            <div className="py-1 px-4" style={{ border: selected ? '2px solid #0B3D92dd' : null, borderRadius: 4, background: style === undefined ? 'white' : style.background }}>
                <div className="py-2 d-flex justify-content-between border-0 align-items-center">
                    <div style={{ color: "#343434", fontWeight: 600, fontSize: fsc(media, 16) }}>{text}</div>
                    <div className="d-flex ">
                        <div className="px-2 mx-2 text-center d-flex align-items-center rounded"
                            style={{ background: style === undefined ? '#e5eefa' : style.background, fontSize: fsc(media, 12) }}>
                            {codeno}
                        </div>
                        <div data-toggle="collapse" className="px-2"
                            style={{ cursor: 'pointer', fontSize: fsc(media, 18), color: '#dadadd ' }}
                            onClick={() => setExpand((!expand))}
                        >
                            {expand ? <span ><i class="fas fa-sort-up"></i></span> : <span ><i class="fas fa-sort-down"></i></span>}
                        </div>
                    </div>
                </div>
                <div className={`drop collapse ${expand ? `show` : `none`}`}
                    style={{ cursor: 'pointer' }}
                    onClick={onClick} >
                    {data.map((v, k) =>
                        <div className="py-2 px-3 d-flex justify-content-between" key={k} style={{ borderTop: '1px solid #e5e5e5' }}>
                            <div style={{ color: "gray", fontWeight: 600, fontSize: fsc(media, 14) }}>{v.name}</div>
                            <div style={{ color: "#343434", fontSize: fsc(media, 14) }}>{v.value}</div>
                        </div>
                    )
                    }
                </div>
            </div>
        </div>
    )
}
export default withMedia(InverterCollapseItem)