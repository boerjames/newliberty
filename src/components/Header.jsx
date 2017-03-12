import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Header extends Component {
    render() {
        return (
            <div className="hero is-primary header-image">
                <div className="hero-body">
                    <div className="container">
                        <h1 className="title">New Liberty</h1>
                        <h2 className="subtitle">Resources on Libertarianism and Austrian Economics</h2>
                        <p><Link to="/">Home</Link></p>
                        <p><Link to="/books">Books</Link></p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header