// Root Reducer File  : All the reducers are mergerd into this file //
import { combineReducers } from 'redux';
import { cardItems } from './reducer';

export default combineReducers({
    cardItems,
});