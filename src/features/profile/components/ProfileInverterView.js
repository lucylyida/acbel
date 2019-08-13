import React from 'react'
import Table from '../components/Table'
import { withMedia } from 'react-media-query-hoc'
import { fsc } from '../../../helper/fontColorHelper'


const ProfileInverterView = props => {
    const { media } = props
    return (
        <div>
            <div style={{ color: '#FF8902', fontSize: fsc(media, 14) }}>INVERTERS</div>
            <div className="flex-fill py-2">
                <div className="d-flex">
                    <div style={{ fontSize: fsc(media, 25), color: '#0B3D92' }} className="font-weight-bold ">
                        {"38"}
                    </div>
                    <div style={{ fontSize: fsc(media, 15) }} className=" pt-2"> &nbsp;Inverters</div>
                </div>
                <div style={{ fontSize: fsc(media, 12), color: '#C4C4C4' }}>NO.OF INVERTERS</div>
            </div>

            <div style={{ color: '#FF8902', fontSize: fsc(media, 14) }} className="pt-3" >INVERTERS SPEC/BRAND MODEL</div>
            <div className=" d-flex flex-wrap pt-0">
                <div className="flex-grow-1">
                    <div className="table-responsive">
                        <Table
                            columns={["BRANDS", "SPEC"]}
                            tblInfo={[
                                { id: 1, brand: 'ABB', spec: 'Trio' },
                                { id: 2, brand: 'ABB', spec: 'PRO' },
                                { id: 3, brand: 'ABB', spec: 'PVS' },
                                { id: 4, brand: 'Fronius', spec: 'Primo' },
                                { id: 5, brand: 'Fronius', spec: 'Galvo' },
                                { id: 6, brand: 'Fronius', spec: 'Symo' },
                                { id: 7, brand: 'Fronius', spec: 'Eco' },
                                { id: 8, brand: 'SolarEdge', spec: 'SE Wave' },
                            ]}
                            render={{

                            }}
                            style={{
                                fontSize: fsc(media, 15),
                                borderSpacing: 0,
                                paddingTop:0,
                              
                            }}

                        />
                    </div>

                </div>

                <div className="flex-grow-1 ">
                    <div className="table-responsive">
                        <Table
                            columns={["BRANDS", "SPEC"]}
                            tblInfo={[
                                { id: 1, brand: 'SolarEdge', spec: 'HD Wave' },
                                { id: 2, brand: 'SolarEdge', spec: 'sE 3-pharse' },
                                { id: 3, brand: 'SMA', spec: 'Sunny boy' },
                                { id: 4, brand: 'SMA', spec: 'Sunny Tripower' },
                                { id: 5, brand: 'SMA', spec: 'Core 1' },
                                { id: 6, brand: 'Sungrow', spec: 'SG-KLT' },
                                { id: 7, brand: 'Sungrow', spec: 'SG-KTL range' },
                                { id: 8, brand: 'Solax Power', spec: 'X1' },
                            ]}
                            render={{
                            }}
                            style={{
                                fontSize: fsc(media, 15),
                                borderSpacing: 0,
                                paddingTop:0,
                            }}
                        />
                    </div>

                </div>

            </div>
        </div>
    )
}

export default withMedia(ProfileInverterView)