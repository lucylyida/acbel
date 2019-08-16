import React from "react"
import { withMedia } from "react-media-query-hoc";
import querystring from "query-string"
import * as route from "../../../config/route.config"
import KmButton from "../../../kumocom/KmButton"

const UserProfileView = props => {
    const { match, location, history, edit } = props
    const search = querystring.parse(location.search)
    return (
        <div>
            <div>{ edit ? "Profile Edit" : "Profile" }</div>
            { edit &&   
                <KmButton text="Save Profile" onClick={() => _handleClickedProfileEditedSaved({match, history, search}) } />
            }
        </div>
    )
}

const _handleClickedProfileEditedSaved = ({ match, history, search, }) => { 
    search.e = undefined
    return history.push(`${match.url}?${querystring.stringify(search)}`)
}

export default withMedia(UserProfileView)