import {combineReducers} from 'redux'
import docReducer from './docReducer'
import userReducer from './userReducer' 
import userInfoReducer from './userInfoReducer'

const reducers = combineReducers({
    doc: docReducer,
    patient: userReducer,
    details: userInfoReducer
})

export default reducers;