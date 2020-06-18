import {SELECTED_BOOK} from './bookAction'
export const selectBook = (book, dispatch) =>{
    dispatch({type: SELECTED_BOOK, key: 'selectedBook', payload: book })
}