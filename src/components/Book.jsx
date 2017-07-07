import React, {Component} from 'react'

/**
 * title: string
 * author: string
 * categories: string[]
 * links: {}
 * recommended: y/n
 */

class Book extends Component {
    constructor(props) {
        super(props)
        this.book = this.props.book
        this.getTopics = this.getTopics.bind(this)
        this.getLinks = this.getLinks.bind(this)
        // this.getRecommended = this.getRecommended.bind(this)
    }

    getTopics() {
        return this.book.topics.join(' | ')
    }

    getLinks() {
        return (
            <div>
            {
                Object.entries(this.book.links).map(
                    ([key, value]) => {
                        return <a key={value} href={value} target="_blank">{key} </a>
                    }
                )
            }
            </div>
        )
    }

    // getRecommended() {
    //     return this.book.recommended === 'y' ? '⭐' : ''
    // }

    render() {
        return (
            <div className="card">
                <div className="card-content">
                    <div className="content">
                        <strong>{this.book.title}</strong>
                        <br/>
                        {this.book.author}
                        <br/>
                        <small>{this.getTopics()}</small>
                        <br/>
                        {/*<small>{this.book.description}</small>*/}
                        {/*<br/>*/}
                        <small>{this.getLinks()}</small>
                    </div>
                </div>
            </div>
        )
    }
}

export default Book