import React, {Component} from 'react'

import Bundle from '../Bundle.jsx'
import LoadArguments from 'bundle-loader?lazy!../Arguments.jsx'

class ArgumentsPage extends Component {
    render() {
        return (
            <Bundle load={LoadArguments}>
                {(Comp) => Comp ? <Comp/> : <p>Loading...</p>}
            </Bundle>
        )
    }
}

export default ArgumentsPage