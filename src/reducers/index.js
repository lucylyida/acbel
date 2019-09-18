import {combineReducers} from 'redux'
import vendorReducer from './vendorReducer'
import accountReducer from "./accountReducer"
import { weatherCountryReducer } from "./weatherReducer"
import inverterReducer from './inverterReducer'
import globalReducer from './globalReducer'
import siteProfileDataReducer from './siteProfileReducer'

const allReducers = combineReducers({
    vendorReducer,
    accountReducer,
    weatherCountryReducer,
    inverterReducer,
    globalReducer,
    siteProfileDataReducer,
})

export default allReducers