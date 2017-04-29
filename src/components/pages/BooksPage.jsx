import React, {Component} from 'react'

import Bundle from '../Bundle.jsx'
import LoadBooks from 'bundle-loader?lazy!../Books.jsx'

class BooksPage extends Component {
    render() {
        return (
            <Bundle load={LoadBooks}>
                {(Comp) => Comp ? <Comp/> : <p>Loading...</p>}
            </Bundle>
        )
    }
}

export default BooksPage