import React from "react"
import { fsc, numberFormat } from '../../../helper/fontColorHelper'
import * as route from "../../../config/route.config"
import { withMedia } from 'react-media-query-hoc'
import querystring from "query-string"

const SiteComparisonView = props => {
    const { history, match, location } = props
    const search = location.search
    const cr = querystring.parse(search).cr
    return (
        <div className="bg-white p-2 h-100" >
            <div>
                Comparator Input
            </div>
            <button className="btn btn-primary" onClick={() => history.push(`${match.url}${search}${cr ? "" : "&cr=1" }`) }>COMPARE</button>
        </div>
    )
}

export default withMedia(SiteComparisonView)