import {
    CREATE_STREAM,
    GET_STREAMS,
    GET_STREAM_BY_ID,
    DELETE_STREAM,
    UPDATE_STREAM,
    RESET_STREAM
} from '../actions/action';
import _ from 'lodash';

const initialState = {
    stream : null,
    streamArray : []

}

export default (state = initialState, action) => {
    const { key, payload } = action;
    switch (action.type) {
        case GET_STREAMS:
            return {...state, [key] : _.mapKeys(payload, 'id') };
        case GET_STREAM_BY_ID:
            return {...state, [key]: payload };
        case CREATE_STREAM:
            return {...state, [key]: payload };
        case UPDATE_STREAM:
            return {...state, [key]: payload };
        case DELETE_STREAM:
            return _.omit(state, action.payload);
        case RESET_STREAM:
            return {...state, [key]: null}
        default:
            return state;
    }
}