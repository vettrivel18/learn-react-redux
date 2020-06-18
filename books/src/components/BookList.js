import React from 'react';
import {connect} from 'react-redux';
import {selectBook} from '../actions'

const BookList = (props) =>{
    const renderList = () =>{
        return props.books.bookArray.map( book => {
        return <li onClick={()=>props.selectBook(book)} key={book.title} className="list-group-item">{book.title}</li>
        });
    }

    return(
        <div>
            <ul className="list-group col-sm-4">
                {renderList()}
            </ul>
        </div>
    );
}

const mapStateToProps = (state)=>({
        books : state.books
});

const mapDispatchToProps = dispatch => ({
    selectBook : (book) => selectBook(book,dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(BookList);