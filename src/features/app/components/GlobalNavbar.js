import React from "react"
import { Link } from "react-router-dom"
import * as route from "../../../config/route.config"
import KmLink from '../../../kumocom/KmLink'
import KmDropdown from "../../../kumocom/KmDropdown"

import SgFlag from '../../../assets/icons/Flag_Singapore'
import ThaiFlag from '../../../assets/icons/Flag_Thailand'
import ThaiwanFlag from '../../../assets/icons/Flag_Thaiwan'
import Flag from '../../../assets/icons/Flag_Kingdom'
import AcbelLogo from '../../../assets/icons/Acbel_Logo'

const GlobalNavbar = props => {
    const { match, location } = props
    return (
        <div className="container-fluid px-0 py-3">
            <div className="d-flex align-items-center">
                <div className="d-flex flex-column justify-content-center">
                    <div className="px-3 py-2" style={{ backgroundColor: "#ffffff", borderRadius: 4, cursor: "pointer" }}>
                        <i className="fas fa-bars text-primary" />
                    </div>
                </div>
                <div className="d-flex flex-column justify-content-center px-4">
                    <a className="" style={{ borderRadius: 4, cursor: "pointer" }} href={`/${route.global}${location.search}`}>
                        <AcbelLogo width={40} height={40} />
                    </a>
                </div>
                <div className="d-flex justify-content-center align-items-center pl-2">
                    <div style={{ color: "#2244aa", fontSize: 28 }}>Global</div>
                    <div className="pl-3"><KmLink text="Map View" to={`${match.url}/${route.map}${location.search}`} currentLink={location.pathname + location.search} /></div>
                    <div className="pl-3"><KmLink text="List View" to={`${match.url}/${route.list}${location.search}`} currentLink={location.pathname + location.search} /></div>
                </div>
                <div style={{ flex: 1 }} />
                <div className="d-flex justify-content-between align-items-center">
                    <KmDropdown
                        onClick={() => console.log('click')}
                        selectedItem={{ icon: <Flag width={24} height={24} />, text: 'UK English' }}
                        data={[
                            { icon: <ThaiwanFlag width={24} height={24} />, text: 'TW ThaiWan' },
                            { icon: <ThaiFlag width={24} height={24} />, text: 'TH Thailand' },
                            { icon: <SgFlag width={24} height={24} />, text: 'Sg Singapore' }
                        ]}
                        style={{ backgroundColor: ' #e5e5e5' }}
                    />
                </div>
            </div>
        </div>
    )
}

export default GlobalNavbar

{/* <Link to={`${match.url}/${route.list}${location.search}`} className="h6 ml-3 py-2">List View</Link> */ }
{/* <Link to={`${match.url}/${route.list}${location.search}`} className=" ml-3 py-2"><KmLink text="List View" isSelected /></Link> */ }