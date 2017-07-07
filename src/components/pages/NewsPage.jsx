import React, {Component} from 'react'

import Bundle from '../Bundle.jsx'
import LoadNews from 'bundle-loader?lazy!../News.jsx'

class NewsPage extends Component {
    render() {
        return (
            <Bundle load={LoadNews}>
                {(Comp) => Comp ? <Comp/> : null}
            </Bundle>
        )
    }
}

export default NewsPage