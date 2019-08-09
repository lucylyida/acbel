import React from "react"


import RevenueStatusView from "../components/RevenueStatusView";
import SearchPanel from '../../app/components/SearchPanel'

const RevenueContainer = props => {

    return (
        <div className="container-fluid ">
            <div className="row px-1">
                <div className="p-1 col-12  bg-white "><RevenueStatusView /></div>
            </div>

            <div className="row pt-2 ">
                <div className=" col-md-6 p-1  "><SearchPanel />  </div>

                <div className="col-md-6 p-1">
                    <div className="bg-white h-100" >

                    </div>
                </div>
            </div>
        </div >
    )
}

export default RevenueContainer