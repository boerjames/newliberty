import React, {Component} from 'react'

import Book from './Book.jsx'

import data from '../data/books.json'

class Books extends Component {
    constructor(props) {
        super(props)
        this.state = {
            books: data.books,
            authors: data.authors,
            categories: data.categories
        }
        this.updateFilter = this.updateFilter.bind(this)
    }

    updateFilter() {
        const titleValue = document.getElementById('title-filter').value.toLowerCase()
        const authorValue = document.getElementById('author-filter').value
        const categoryValue = document.getElementById('category-filter').value
        const recommendedValue = document.getElementById('recommended-filter').checked
        
        let filteredBooks = data.books.filter(book => {
            return book.title.toLowerCase().includes(titleValue)
        })

        filteredBooks = filteredBooks.filter(book => {
            for (let author of book.authors) if (author.includes(authorValue)) return true
            return false
        })

        filteredBooks = filteredBooks.filter(book => {
            for (let category of book.categories) if (category.includes(categoryValue)) return true
            return false
        })

        if (recommendedValue) {
            filteredBooks = filteredBooks.filter(book => {
                return book.recommended === 'y'
            })
        }

        this.setState({
            books: filteredBooks
        })
    }

    render() {
        return (
            <div className="container">
                <div className="columns" style={{padding: '15px'}}>
                    <div className="column is-4">

                        <div className="field">
                            <label className="label">Title</label>
                            <p className="control">
                                <input className="input" type="text" id="title-filter" onChange={this.updateFilter} placeholder="Filter by title..."/>
                            </p>
                        </div>

                        <div className="field">
                            <label className="label">Author</label>
                            <p className="control">
                                <span className="select" style={{width:'100%'}}>
                                    <select id="author-filter" onChange={this.updateFilter} style={{width:'100%'}}>
                                        <option value="">Select Author</option>
                                        {this.state.authors.map(author => (<option value={author}>{author}</option>))}
                                    </select>
                                </span>
                            </p>
                        </div>

                        <div className="field">
                            <label className="label">Category</label>
                            <p className="control">
                                <span className="select" style={{width:'100%'}}>
                                    <select id="category-filter" onChange={this.updateFilter} style={{width:'100%'}}>
                                        <option value="">Select Category</option>
                                        {this.state.categories.map(category => (<option value={category}>{category}</option>))}
                                    </select>
                                </span>
                            </p>
                        </div>

                        <div className="field">
                            <p className="control">
                                <label className="label">
                                    <input id="recommended-filter" onChange={this.updateFilter} type="checkbox"/> Recommended Reading
                                </label>
                            </p>
                        </div>

                    </div>
                    <div className="column is-8">
                        <div className="card" style={{maxHeight:'90vh', overflowY:'auto'}}>
                            {this.state.books.map(book => (<Book key={book.title} book={book}/>))}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Books