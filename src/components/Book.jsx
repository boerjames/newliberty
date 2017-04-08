import React, {Component} from 'react'

/**
 * title: string
 * authors: string[]
 * categories: string[]
 * urls: {}
 */

class Book extends Component {
    constructor(props) {
        super(props)
        this.book = this.props.book
        this.getAuthors = this.getAuthors.bind(this)
        this.getCategories = this.getCategories.bind(this)
        this.getURLs = this.getURLs.bind(this)
    }

    getAuthors() {
        return this.book.authors.join(', ')
    }

    getCategories() {
        return this.book.categories.join(' | ')
    }

    getURLs() {
        return (
            <div>
            {
                Object.entries(this.book.urls).map(
                    ([key, value]) => {
                        return <a key={value} href={value} target="_blank">{key} </a>
                    }
                )
            }
            </div>
        )
    }

    render() {
        return (
            <div className="card">
                <div className="card-content">
                    <div className="content">
                        <strong>{this.book.title}</strong>
                        <br/>
                        {this.getAuthors()}
                        <br/>
                        {this.getCategories()}
                        <br/>
                        {this.getURLs()}
                    </div>
                </div>
            </div>
        )
    }
}

export default Book