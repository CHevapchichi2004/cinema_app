import {combineReducers, createStore} from 'redux'
import slideReducer from '../reducers/slides'
import currentReducer from '../reducers/current';
import soonReducer from '../reducers/comingSoon';



const store = createStore(combineReducers({slide: slideReducer, current: currentReducer, soon: soonReducer}));

export default store