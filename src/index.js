import React from 'react'
import {render} from 'react-dom'
import {BrowserRouter, Route} from 'react-router-dom'

import custom from './style/custom.scss'

import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'

import Home from './components/Home.jsx'
import Books from './components/Books.jsx'

//render(<App/>, document.getElementById('app'))

render(
	<BrowserRouter>
		<div>
			<Header/>
			<Route exact path="/" component={Home}/>
			<Route path="/books" component={Books}/>
			<Footer/>
		</div>
	</BrowserRouter>,
	document.getElementById('app')
)

if (module.hot) {
	module.hot.accept()
}
