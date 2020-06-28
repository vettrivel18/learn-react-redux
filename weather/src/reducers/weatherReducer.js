import {FETCH_WEATHER} from '../actions';

export default (state=[], action) =>{
    const {payload} = action;
    switch (action.type) {
        case FETCH_WEATHER:
            return [payload.data, ...state ];
        default:
            return state;
    }
}