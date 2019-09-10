import React, { useState } from 'react'
import { withMedia } from 'react-media-query-hoc'
import { fsc } from '../../../helper/fontColorHelper'

const PanelMapSelectView = props => {
    const { media } = props
    const [panel, setPanel] = useState("Panel Map 1");
    
    return (
        <div className="container-fluid p-0 d-flex py-4" style={{ overflowX: 'auto' }}>
            {
                panelMap.map((v, k) =>
                    <div key={k} className="pl-2 pr-4">
                        <span style={{
                            display: "inline-block",
                            fontSize: fsc(media, 16),
                            cursor: 'pointer',
                            borderBottom: panel === v ? '2px solid #FF8902' : null,
                            color: panel === v ? 'black' : 'gray',
                            fontWeight: panel === v ? 'bold' : null,
                            textDecoration: 'none',
                            whiteSpace: 'nowrap'
                        }}
                            onClick={() => setPanel(v)}
                        >
                            {v}
                        </span>
                    </div>
                )
            }
        </div >
    )
}

export default withMedia(PanelMapSelectView);

const panelMap = ["Panel Map 1", "Panel Map 2", "Panel Map 3", "Panel Map 4", "Panel Map 5", "Panel Map 6", "Panel Map 7"]