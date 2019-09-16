import React, { useState } from 'react'
import { withMedia } from 'react-media-query-hoc'
import { fsc } from '../../../helper/fontColorHelper'

const InverterCollapseItem = props => {
    const { data, text, codeno, selected, style, onClick, media } = props
    const [expand, setExpand] = useState(false)

    return (
        <div className="py-2"  >
            <div className="py-1 px-4" style={{ border: `2px solid ${selected ? '#0B3D92dd' : '#0000'}`, borderRadius: 4, background: style === undefined ? 'white' : style.background }}>
                {/* <div className="py-2 d-flex justify-content-between border-0 align-items-center" 
                onClick={() => expand ? null : onClick(text)}>
                    <div style={{ color: "#343434", fontWeight: 600, fontSize: fsc(media, 16) }}>Inverter {text}</div>
                    <div className="d-flex ">
                        <div className="px-2 mx-2 text-center d-flex align-items-center rounded"
                            style={{ background: style === undefined ? '#e5eefa' : style.background, fontSize: fsc(media, 12) }}>
                            {codeno}
                        </div>
                        <div data-toggle="collapse" id="inverter-collapse" className="px-2"
                            style={{ cursor: 'pointer', fontSize: fsc(media, 18), color: '#dadadd ' }}
                            onClick={() => setExpand(!expand)}
                        >
                            {expand ? <span ><i className="fas fa-sort-up"></i></span> : <span ><i className="fas fa-sort-down"></i></span>}
                        </div>
                    </div>
                </div> */}
                <div className="py-2 d-flex border-0 align-items-center">
                    <div className=" d-flex justify-content-between" style={{ minWidth: '100%' }} onClick={() => expand ? null : onClick(text)}>
                        <div style={{ color: "#343434", fontWeight: 600, fontSize: fsc(media, 16) }}>Inverter {text}</div>

                        <div className="px-2 mx-2 text-center d-flex align-items-center rounded"
                            style={{ background: style === undefined ? '#e5eefa' : style.background, fontSize: fsc(media, 12) }}>
                            {codeno}
                        </div>
                    </div>
                    {/* px-2,id ကိုဖ ်က္ရန္ */}
                    <div data-toggle="collapse"  
                        style={{ cursor: 'pointer', fontSize: fsc(media, 18), color: '#dadadd ', }}
                        onClick={() => setExpand(!expand)}
                    >
                     <span ><i className={`fas fa-sort-${expand ? 'up pt-2' : 'down pb-2'}`}></i></span>
                    </div>
                </div>
                <div className={`drop collapse ${expand ? `show` : `none`}`}
                    style={{ cursor: 'pointer' }}
                >
                    {
                        data.map((v, k) =>
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