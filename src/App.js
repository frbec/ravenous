import React, { Component } from 'react'
import './App.css'
import BusinessList from './components/business-list/business-list'
import SearchBar from './components/search-bar/search-bar'
import Yelp from './util/yelp'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = { businesses: [] }
    this.searchYelp = this.searchYelp.bind(this)
  }
  searchYelp (term, location, sortBy) {
    if (!location) { location = 'anywhere' }
    Yelp.search(term, location, sortBy)
      .then(businesses => this.setState({ businesses: businesses }))
  }

  render () {
    return (
      <div className='App'>
        <h1>ravenous</h1>
        <SearchBar searchYelp={this.searchYelp} />
        <BusinessList businesses={this.state.businesses} />
      </div>
    )
  }
}

export default App
