import React from "react"

const DashboardContainer = props => {
    // console.log({ props })

    return (
        <div className="container-fluid ">
            <div className="row text-center">
                <div className="col-sm-7">
                    <div className="bg-white" style={{ height: 150, marginBottom: 20 }}>
                        status 1
                    </div>
                    <div className="bg-white" style={{ height: 150 }}>
                        status 2
                    </div>
                </div>
                <div className="col-sm-5">
                    <div className="bg-white" style={{ height: 320 }}>Map</div>
                </div>

                <div className="col-sm-6 pt-4">
                    <div className="bg-white" style={{ height: 320 }}>Chart 1</div>
                </div>

                <div className="col-sm-6 pt-4">
                    <div className="bg-white" style={{ height: 320 }}>Chart 2</div>
                </div>

                <div className="col-sm-6 pt-4">
                    <div className="bg-white" style={{ height: 320 }}>Chart 3</div>
                </div>

                <div className="col-sm-6 pt-4">
                    <div className="bg-white" style={{ height: 320 }}>Chart 4</div>
                </div>

            </div>
        </div>
    )
}

export default DashboardContainer