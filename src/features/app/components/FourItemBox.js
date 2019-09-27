import React from 'react'
import { withMedia } from 'react-media-query-hoc';
import { fsc, numberFormat } from '../../../helper/fontColorHelper';

const FourItemBox = props => {
    const { value, unit, desc, active, icon, media, useNumberFormat } = props
    // const temp = typeof value === "number" ? value.toFixed(2) * 1 : value
    const data = useNumberFormat === undefined || useNumberFormat === true ? numberFormat(value) : value;

    const moneyCategory = ["TOTAL ACC. REVENUE", "PRICE SET-UP"]
    const isMoney = moneyCategory.includes(desc)

    return (
        <div className="d-flex align-items-center">
            <div className="d-flex">
                {icon}
                {
                    active !== undefined &&
                    <div style={{ background: 'white', borderRadius: '50%', width: 9, height: 9, paddingTop: 1, paddingLeft: 1, marginLeft: '-20%' }}>
                        <div style={{ borderRadius: '50%', width: 7, height: 7, background: active ? 'green' : 'grey' }} />
                    </div>
                }
            </div>
            <div className={`${active === undefined ? 'pl-2' : ''}`} style={{ lineHeight: 1.3 }}>
                <div className="d-flex align-items-baseline">
                    <div style={{
                        fontSize: fsc(media, 26), fontWeight: 'bold',
                        color: desc === 'SITE STATUS' ? data === 'Online' ? 'green' : 'grey' : '#153784',
                    }}
                    >
                        {isMoney ? media.mobile ? unit + ' ' + data : unit + data : data}
                    </div>
                    <div className="pl-1" style={{ fontSize: fsc(media, 14), fontWeight: 100, color: '#000000' }}>{unit === 'NT$' || unit === "THB" ? null : unit}</div>
                    <div className="pl-1" style={{ fontSize: fsc(media, 14), fontWeight: 100, color: '#000000' }}>{isMoney ? null : unit}</div>
                </div>
                <div className="text-truncate" style={{ fontSize: fsc(media, 13), color: '#aaaaaa' }}>{desc}</div>
            </div>
        </div >
    )
}

export default withMedia(FourItemBox);
