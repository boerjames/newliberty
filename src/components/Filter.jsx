import React, {Component} from 'react'

class Filter extends Component {
    render() {
        return (
            <div className="tile is-ancestor">
            <div className="tile is-4 is-vertical is-parent">
                <div className="tile is-child box">
                <p className="title">One</p>
                </div>
                <div className="tile is-child box">
                <p className="title">Two</p>
                </div>
            </div>
            <div className="tile is-parent">
                <div className="tile is-child box">
                <p className="title">Three</p>
                </div>
            </div>
            </div>
        )
    }
}

export default Filter