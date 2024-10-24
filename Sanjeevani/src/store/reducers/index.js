import {combineReducers} from 'redux'
import docReducer from './docReducer'
import userReducer from './userReducer' 

export default reducers = combineReducers({
    doc: docReducer,
    patient: userReducer
})