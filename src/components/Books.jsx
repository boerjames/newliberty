import React, {Component} from 'react'

import Book from './Book.jsx'

import data from '../data/books.json'

class Books extends Component {
    constructor(props) {
        super(props)
        this.books = data.books
    }

    render() {
        return (
            <div>
                {
                    this.books.map(book => (
                        <Book key={book.title} book={book}/>
                    ))
                }
            </div>
        )
    }
}

export default Books