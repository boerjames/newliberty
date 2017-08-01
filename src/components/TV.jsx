import React, {Component} from 'react'

class TV extends Component {
    render() {
        return (
            <div className="hero is-fullheight">
                <div className="hero-body">
                    <div className="container">
                        <div style={{position: 'relative', paddingBottom: '56%', height: 0}}>
                            <iframe src='//app.viloud.tv/player/embed/channel/3e7e8d193fc3291dfb68eb43bd8ef543?autoplay=1&volume=1&controls=1&title=0&share=1&random=0'
                                    style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}}
                                    frameborder='0'
                                    allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TV