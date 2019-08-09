import React from "react"
import RevenueStatusView from "../components/RevenueStatusView";

const RevenueContainer = props => {
    return (
        <div className="container-fluid">
            <div className="row px-1">
                <div className="p-1 bg-white w-100"><RevenueStatusView /></div>
            </div>



            <div className="row pt-2">
                <div className="col-md-6 p-1">
                    <div className="bg-white " style={{ height: 300 }}>

                    </div>
                </div>

                <div className="col-md-6 p-1">
                    <div className="bg-white" style={{ height: 300 }}>

                    </div>
                </div>
            </div>
        </div >
    )
}

export default RevenueContainer