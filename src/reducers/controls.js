import { combineReducers } from 'redux';
import {
    MOVE,
    PadDirections,
    move
} from '../actions/controls'

//todo : https://redux.js.org/docs/basics/Actions.html
const initialState = {
    players: [],
    grid: []
};

function pandaApp(state = initialState, action) {
    switch (action.type) {
        case MOVE:
            return Object.assign({}, state, action.direction)
    }

    return state;
}
const controlsApp = combineReducers({
});

export default controlsApp;