import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here

export default class LatestMovieReviewsContainer extends Component {
  
  constructor() {
    super()
    this.state = {
      reviews: []
    }
  }

  componentDidMount() {
    this.getReviews(URL)
  }

  getReviews = (endpoint) => {
    fetch(endpoint)
      .then(response => response.json())
      .then(movies => this.setState({reviews: movies.results}))
  }

  render() {
    return (
      <div className="latest-movie-reviews">
        <h1>Movie Reviews</h1>
        <MovieReviews reviews={this.state.reviews}/>
      </div>
    )
  }
}