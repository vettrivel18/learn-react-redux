import streams from '../apis/streams';
import history from '../history'
import {
    SIGN_IN,
    SIGN_OUT,
    CREATE_STREAM,
    GET_STREAMS,
    GET_STREAM_BY_ID,
    UPDATE_STREAM,
    DELETE_STREAM,
    RESET_STREAM
} from './action';

export const signIn = (userId) => {
    return {
        type: SIGN_IN,
        payload: userId
    };
};

export const signOut = () => {
    return {
        type: SIGN_OUT
    };
};

export const createStream = formValues => async (dispatch, getState) => {
    const { userId} = getState().auth;
    const response = await streams.post('/streams', { ...formValues, userId});
    dispatch({ type: CREATE_STREAM, key: 'stream', payload: response.data })
    resetStream(dispatch);
    history.push('/');
}

export const getStreams = () => async dispatch => {
    const response = await streams.get('/streams');
    dispatch({ type: GET_STREAMS, key: 'streamArray', payload: response.data });
}

export const getStreamById = async (dispatch, id) => {
    const response = await streams.get(`/streams/${id}`);
    dispatch({ type: GET_STREAM_BY_ID, key: 'stream', payload: response.data })
}

export const updateStream = async (dispatch, id, formValues)  => {
    const response = await streams.patch(`/streams/${id}`, formValues);
    dispatch({ type: UPDATE_STREAM, key: 'stream', payload: response.data });
    resetStream(dispatch);
    history.push('/');
}

export const deleteStream =  async (id,dispatch) => {
     await streams.delete(`/streams/${id}`);
    dispatch({ type: DELETE_STREAM, payload: id });
}

export const resetStream = dispatch => {
    dispatch({type: RESET_STREAM, key:'stream'});
} 