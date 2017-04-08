import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Header extends Component {
    componentDidMount() {
        const burger = document.querySelector('.nav-toggle')
        const menu = document.querySelector('.nav-menu')
        const links = document.querySelectorAll('.nav-menu .nav-item')

        burger.addEventListener('click', () => {
            burger.classList.toggle('is-active')
            menu.classList.toggle('is-active')
        })

        Array.from(links).forEach((element) => {
            element.addEventListener('click', () => {
                burger.classList.toggle('is-active')
                menu.classList.toggle('is-active')
            })
        })
    }

    render() {
        return (
            <div className="hero is-primary">
                <div className="hero-head">
                    <div className="container">
                        <nav className="nav has-shadow">
                            <div className="container">
                                <div className="nav-left">
                                    <h3 className="nav-item">New Liberty</h3>
                                </div>
                                <span className="nav-toggle">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </span>
                                <div className="nav-right nav-menu">
                                    <p className="nav-item is-tab">
                                        <Link to="/">Home</Link>
                                    </p>
                                    <p className="nav-item is-tab">
                                        <Link to="/books">Books</Link>
                                    </p>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header