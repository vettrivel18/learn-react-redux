import {SELECTED_BOOK} from '../actions/bookAction'

const initialState = {
    bookArray : [
        {title : 'Harry Potter', pages: 30},
        {title : 'Learn React', pages: 40},
        {title : 'Learn Angular', pages: 50},
        {title : 'Learn Vue.js', pages: 60}
    ],
    selectedBook : null
}

export default (state = initialState , action)=>{
    const {key, payload} = action;
    switch(action.type){
        case SELECTED_BOOK:
            return {...state , [key]: payload};
        default:
            return state;
    }

};