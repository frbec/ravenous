import React from 'react'
import './search-bar.css'

class SearchBar extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      term: '',
      location: '',
      sortBy: 'best_match'
    }
    this.handleTermChange = this.handleTermChange.bind(this)
    this.handleLocationChange = this.handleLocationChange.bind(this)
    this.sortByOptions = {
      'Best match': 'best_match',
      'Highest rated': 'rating',
      'Most reviewed': 'review_count'
    }
  }

  getSortByClass (sortByOption) {
    return this.state.sortBy === sortByOption ? 'active' : ''
  }

  handleSortByChange (sortByOption) {
    this.setState({ sortBy: sortByOption })
  }

  handleTermChange (e) {
    this.setState({ term: e.target.value })
  }

  handleLocationChange (e) {
    this.setState({ location: e.target.value })
  }

  renderSortByOptions () {
    return Object.keys(this.sortByOptions).map(sortByOption => {
      let sortByOptionValue = this.sortByOptions[sortByOption]
      return <li key={sortByOptionValue} className={this.getSortByClass(sortByOptionValue)} onClick={this.handleSortByChange.bind(this, sortByOptionValue)}>{sortByOption}</li>
    })
  }

  render () {
    return (
      <div className='SearchBar'>
        <div className='SearchBar-sort-options'>
          <ul>
            {this.renderSortByOptions()}
          </ul>
        </div>
        <div className='SearchBar-fields'>
          <input onChange={this.handleTermChange} placeholder='Search Businesses' />
          <input onChange={this.handleLocationChange} placeholder='Where?' />
        </div>
        <div className='SearchBar-submit'>
          <a>Let's Go</a>
        </div>
      </div>
    )
  }
};

export default SearchBar
