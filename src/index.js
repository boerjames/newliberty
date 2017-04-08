import React from 'react'
import {render} from 'react-dom'
import {BrowserRouter, Route} from 'react-router-dom'

import './style/custom.scss'

import Header from './components/Header.jsx'
import Home from './components/Home.jsx'
import Books from './components/Books.jsx'

render(
	<BrowserRouter>
		<div>
			<Header/>
			<Route exact path="/" component={Home}/>
			<Route path="/books" component={Books}/>
		</div>
	</BrowserRouter>,
	document.getElementById('app')
)

if (module.hot) {
	module.hot.accept()
}
