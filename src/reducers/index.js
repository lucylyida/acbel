import {combineReducers} from 'redux'
import vendorReducer from './vendorReducer'
import accountReducer from "./accountReducer"
import { weatherCountryReducer } from "./weatherReducer"
import inverterReducer from './inverterReducer'
import globalReducer from './globalReducer'

const allReducers = combineReducers({
    vendorReducer,
    accountReducer,
    weatherCountryReducer,
    inverterReducer,
    globalReducer

})

export default allReducers