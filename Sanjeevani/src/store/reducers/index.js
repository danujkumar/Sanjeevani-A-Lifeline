import {combineReducers} from 'redux'
import docReducer from './docReducer'
import userReducer from './userReducer' 

const reducers = combineReducers({
    doc: docReducer,
    patient: userReducer
})

export default reducers;