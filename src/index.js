import React from 'react'
import {render} from 'react-dom'
import {BrowserRouter, Route} from 'react-router-dom'

import './style/custom.scss'

import Header from './components/Header.jsx'
import Home from './components/Home.jsx'
import ArgumentsPage from './components/pages/ArgumentsPage.jsx'
import BooksPage from './components/pages/BooksPage.jsx'
import TVPage from './components/pages/TVPage.jsx'
import NewsPage from './components/pages/NewsPage.jsx'

render(
	<BrowserRouter>
		<div>
			<Header/>
			<Route exact path="/" component={Home}/>
			<Route path="/arguments" component={ArgumentsPage}/>
			<Route path="/books" component={BooksPage}/>
			<Route path="/tv" component={TVPage}/>
			<Route path="/news" component={NewsPage}/>
		</div>
	</BrowserRouter>,
	document.getElementById('app')
)

if (module.hot) {
	module.hot.accept()
}
