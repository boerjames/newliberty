import React, {Component} from 'react'

import Book from './Book.jsx'

// import data from '../data/books-old.json'
import data from '../data/books.json'

// TODO make filtering logic way better e.g. individual methods per filter type
class Books extends Component {
    constructor(props) {
        super(props)
        this.state = {
            books: data.books,
            authors: data.authors,
            topics: data.topics
        }
        this.updateFilter = this.updateFilter.bind(this)
    }

    updateFilter() {
        const titleValue = document.getElementById('title-filter').value.toLowerCase()
        const authorValue = document.getElementById('author-filter').value
        const topicValue = document.getElementById('topic-filter').value
        // const recommendedValue = document.getElementById('recommended-filter').checked
        
        let filteredBooks = data.books.filter(book => {
            return book.titlesearch.includes(titleValue)
        })

        if (authorValue !== '') {
            filteredBooks = filteredBooks.filter(book => {
                return book.author === authorValue
            })
        }

        if (topicValue !== '') {
            filteredBooks = filteredBooks.filter(book => {
                for (let topic of book.topics) if (topic.includes(topicValue)) return true
                return false
            })
        }


        // if (recommendedValue) {
        //     filteredBooks = filteredBooks.filter(book => {
        //         return book.recommended === 'y'
        //     })
        // }

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
                            <label className="label">Topic</label>
                            <p className="control">
                                <span className="select" style={{width:'100%'}}>
                                    <select id="topic-filter" onChange={this.updateFilter} style={{width:'100%'}}>
                                        <option value="">Select Topic</option>
                                        {this.state.topics.map(topic => (<option value={topic}>{topic}</option>))}
                                    </select>
                                </span>
                            </p>
                        </div>

                        {/*<div className="field">*/}
                            {/*<p className="control">*/}
                                {/*<label className="label">*/}
                                    {/*<input id="recommended-filter" onChange={this.updateFilter} type="checkbox"/> Recommended Reading*/}
                                {/*</label>*/}
                            {/*</p>*/}
                        {/*</div>*/}

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