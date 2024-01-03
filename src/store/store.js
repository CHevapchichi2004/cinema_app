import {combineReducers, createStore} from 'redux'
import slideReducer from '../reducers/slides'
import currentReducer from '../reducers/current';
import soonReducer from '../reducers/comingSoon';
import orderReducer from '../reducers/order';
import formReducer from '../reducers/form';



const store = createStore(combineReducers({slide: slideReducer, current: currentReducer, soon: soonReducer, order: orderReducer, form: formReducer}));

export default store