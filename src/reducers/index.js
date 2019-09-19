import { combineReducers } from 'redux'
import vendorReducer from './vendorReducer'
import accountReducer from "./accountReducer"
import { weatherCountryReducer } from "./weatherReducer"
import inverterReducer from './inverterReducer'
import globalReducer from './globalReducer'
import siteProfileDataReducer from './siteProfileReducer'
import siteReportReducer from './siteReportReducer'

import ActionType from '../action/action'

const rootReducer = combineReducers({
    vendorReducer,
    accountReducer,
    weatherCountryReducer,
    inverterReducer,
    globalReducer,
    siteProfileDataReducer,
    siteReportReducer
})
// const rootReducer = (state, action) => {
//     if (action.type === ActionType.GET_LOGOUT) {
//         const { allReducers } = state;
//         state = { allReducers }

//     }else{

//     }
//     return allReducers(state, action)
// }

export default rootReducer

// const allReducers = combineReducers({
//     vendorReducer,
//     accountReducer,
//     weatherCountryReducer,
//     inverterReducer,
//     globalReducer,
//     siteProfileDataReducer,
//     siteReportReducer
// })

// export default allReducers