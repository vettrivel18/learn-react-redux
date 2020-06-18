import React from 'react';
import { connect } from 'react-redux';


const BookDetail = (props) =>{

    if(props.book){
        return (
            <div>
                <div>Title: {props.book.title}</div>
                <div>Pages: {props.book.pages}</div>
            </div>
        );
    }
    return <div>Select a book to get started</div>;
    
}

const mapStateToProps = state =>({
    book: state.books.selectedBook
});

export default connect(mapStateToProps)(BookDetail);