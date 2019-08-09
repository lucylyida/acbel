import React from "react"
import SearchPanel from '../../app/components/SearchPanel'

const ForecastContainer = props => {
    return (
        <div className="container-fluid">
            <div className="row pb-2">
                <div className="col-md-6 p-0 mb-1 d-flex flex-column justify-content-between">
                    <div className="p-1">
                        <div className="bg-white h-100">Weather</div>
                    </div>

                    <div className="pt-1 px-1">
                        <div className="bg-white h-100">Next Cards</div>
                    </div>
                </div>
                <div className="col-md-6 p-1" style={{ height: 300 }}>
                    <div className="bg-white h-100" >Chart</div>
                </div>
            </div>

            <div className="row px-1">
                <div className="col-12" style={{ border: '1px solid lightgrey' }}></div>
            </div>
            <div className="row pt-2">
                <div className="col-md-6 p-1">
                    <div className="bg-white " >
                    <SearchPanel/>
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

export default ForecastContainer