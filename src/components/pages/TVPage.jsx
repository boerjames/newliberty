import React, {Component} from 'react'

import Bundle from '../Bundle.jsx'
import LoadTV from 'bundle-loader?lazy!../TV.jsx'

class TVPage extends Component {
    render() {
        return (
            <Bundle load={LoadTV}>
                {(Comp) => Comp ? <Comp/> : null}
            </Bundle>
        )
    }
}

export default TVPage