import React from 'react'
import Table from '../components/Table'
import { withMedia } from 'react-media-query-hoc'
import { fsc } from '../../../helper/fontColorHelper'
import FourItemBox from '../../app/components/FourItemBox';


const ProfileInverterView = props => {
    const { media, totalInverter, inverterDetailList } = props   

    const tblInfo = inverterDetailList.reduce((r, c, i) =>
        [...r, { id: i + 1, brand: c.brand, model: c.model, spec: c.spec, amount: c.amount }]
        , [])

    const firstTblInfo = tblInfo.length < 8 ?
        tblInfo :
        tblInfo.length < 17
            ? tblInfo.slice(0, 8)
            : tblInfo.slice(0, Math.ceil(tblInfo.length) / 2)

    const secondTblInfo = tblInfo.length > 17
        ? tblInfo.slice(Math.ceil(tblInfo.length) / 2)
        : tblInfo.length > 8
            ? tblInfo.slice(8)
            : []

    return (
        <div className="p-4" style={{ backgroundColor: '#FFFFFF', borderRadius: 4 }}>
            <div className='p-2' style={{ color: '#FF8902', fontSize: fsc(media, 14) }}>{"INVERTERS"}</div>
            <div className="flex-fill py-2">
                <FourItemBox value={totalInverter} desc={"NO. OF INVERTERS"} unit={'Inverters'} />
            </div>

            <div className='p-2' style={{ color: '#FF8902', fontSize: fsc(media, 14) }}>{"INVERTERS SPEC/BRAND MODEL"}</div>
            <div className=" d-flex flex-wrap pt-0">
                <div className="flex-grow-1">
                    <div className="table-responsive">
                        <Table
                            columns={["BRANDS", "MODEL", "SPEC", "AMOUNT"]}
                            tblInfo={firstTblInfo}
                            render={{

                            }}
                            style={{
                                fontSize: fsc(media, 15),
                                borderSpacing: 0,
                                paddingTop: 0,

                            }}
                        />
                    </div>

                </div>


                {/* <div className="flex-grow-1 ">
                    <div className="table-responsive">
                        {
                            secondTblInfo.length > 0 &&
                            <Table
                                columns={["BRANDS", "SPEC"]}
                                tblInfo={secondTblInfo}
                                render={{
                                }}
                                style={{
                                    fontSize: fsc(media, 15),
                                    borderSpacing: 0,
                                    paddingTop: 0,
                                }}
                            />
                        }
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default withMedia(ProfileInverterView)