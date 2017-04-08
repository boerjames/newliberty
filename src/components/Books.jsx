import React, {Component} from 'react'

import Book from './Book.jsx'
import Filter from './Filter.jsx'

import data from '../data/books.json'

class Books extends Component {
    constructor(props) {
        super(props)
        this.books = data.books
    }

    render() {
        return (
            <div className="container">
                <div className="columns">
                    <div className="column is-4">
                        <Filter/>
                    </div>
                    <div className="column is-8">
                        <div className="card" style={{height:'88vh', overflowY:'auto'}}>
                            {this.books.map(book => (<Book key={book.title} book={book}/>))}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Books