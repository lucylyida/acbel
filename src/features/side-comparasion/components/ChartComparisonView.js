import React from "react"
import { fsc, numberFormat } from '../../../helper/fontColorHelper'
import * as route from "../../../config/route.config"
import { withMedia } from 'react-media-query-hoc'

const ChartComparisonView = props => {
    const { } = props
    return (
        <div className="h-100">
            <div className="h-50 pb-2">
                <div className="bg-white h-100 p-2">Chart A</div>
            </div>
            <div className="h-50 pt-2">
                <div className="bg-white h-100 p-2">Chart B</div>
            </div>
        </div>
    )
}

export default withMedia(ChartComparisonView)