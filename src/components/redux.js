import { createStore } from 'redux'
import { combineReducers } from 'redux'
import { commons } from './commons/data/store/reducer'

const rootReducers = combineReducers({
    commons
})

const store = createStore(rootReducers)

export default store