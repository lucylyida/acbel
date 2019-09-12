import React from 'react'

const PanelMap = props => {
    const { data } = props
    const col = 20
    const row = 3
    const tempArr = new Array(row).fill(new Array(col).fill(0))
    const panelView = tempArr.map((c, i) => {
        const colView = c.map((vv, k) => {
            const index = i * col + k
            const v = data[index]
            const color = v.value === 2 ? "#D7F0D2" :
                v.value === 1 ? "#EFFAED" :
                    v.value === 3 ? '#FFD6D2' :
                        v.value === 4 ? '#D5E2D2' : v.value === 5 ? "#FFF4D2" : "#F9C209";
            return (
                <div key={index} className="flex-fill border" style={{ minWidth: 40, maxWidth: 40, minHeight: 40, maxHeight: 40, backgroundColor: color }} />
            )
        })
        return (
            <div key={i} className="d-flex">
                {colView}
            </div>
        )
    })
    return (
        <div className="" style={{ minWidth: 200, overflow: "auto" }}>
            {panelView}
        </div>
    )
}

export default PanelMap;

