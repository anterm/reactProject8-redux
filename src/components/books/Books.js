import React, { Component } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as BookActions from '../../actions/books'

import styles from './books.css'

class Books extends Component {
  render() {
    const books = this.props.books.map((book, i) => {
      return <tr key={i}>
        <td>{book}</td>
        <td><a href="#" onClick={() => this.remove(book)}>удалить</a></td>
      </tr>
    })
    
    return <div className={styles.block}>
      <span className={styles.title}>
        Список книг ({this.props.books.length}):
      </span>
      <table className={styles.book_list}>
        <tbody>{books}</tbody>
      </table>
      <input type='text' ref="book" placeholder="Название книги" />
      <a href="#" onClick={this.add}>Добавить книгу</a>
    </div>
  }
  
  add = () => {
    const book = this.refs.book.value
    if(!book) return
    
    this.props.bookActions.add(book)
    this.refs.book.value = ""
  };
  
  remove = (book) => {
    this.props.bookActions.remove(book)
  };
}


export default connect(
  state => state,
  dispatch => ({
    bookActions: bindActionCreators(BookActions, dispatch)
  })
)(Books)