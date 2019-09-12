import React from 'react'
import { withMedia } from 'react-media-query-hoc'
import { fsc } from '../../../helper/fontColorHelper'


const Table = props => {
    const { tblInfo, columns, render, role, isEdit, style, media } = props
    const defaultStyle = { verticalAlign: "middle", border: "none", paddingLeft: 5 }
    const userStyle = style === undefined ? {} : style;
    const header = columns.map((v, k) =>
        <td key={k} style={{ border: "none", paddingLeft: 5 }}>{v}</td>
    )

    const defaultCellRender = v => <td key={Math.random()} style={{ ...defaultStyle, ...userStyle }}>{v}</td>
    const body = tblInfo.map((v, k) => (
        <tr key={k} style={{ borderRadius: "10px", ...defaultStyle, ...userStyle, }} >
            {
                Object.keys(v).map((b, m) => {
                    const value = tblInfo[k]
                    return m !== 0
                        ? render[b] !== undefined
                            ? render[b](value, k, m, role, isEdit)
                            : defaultCellRender(value[b])
                        : null
                })
            }

        </tr>
    ))
    return (
        <table className="table table-borderless" style={{ borderCollapse: "separate" }}>
            <thead className="table-borderless" >
                <tr style={{ fontSize: fsc(media, 14), color: '#C4C4C4', borderSpacing: 0, paddingBottom: 0 }}>
                    {header}
                </tr>
            </thead>
            <tbody >
                {body}
                {(isEdit) ?
                    <tr key={Math.random()} style={{ border: "none" }} className="text-right">
                        <td style={{ border: "none" }}></td>
                        <td style={{ border: "none" }}></td>
                        <td style={{ border: "none" }}></td>
                        <td style={{ border: "none" }}></td>
                    </tr>
                    : null}
            </tbody>
        </table>

    )
}

export default withMedia(Table)

