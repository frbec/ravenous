import React from 'react';
import 'search-bar.css';

const sortByOptions = {
  bestMatch: 'best_match',
  highestRated: 'rating',
  mostReviewed: 'review_count'
};

class SearchBar extends React.Component {
  renderSortByOptions() {
    return Object.keys(sortByOptions).map(sortByOption => {
      let sortByOptionValue = sortByOptions[sortByOption];
      return <li key={sortByOptionValue}>{sortByOption}</li>
    });
  }
};
