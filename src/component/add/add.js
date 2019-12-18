import React, { Component } from "react";
import "./add.css";

class add extends Component {
  state = {
    movieTitle: "",
    rating: "",
    genre: "",
    description: ""
  };

  handleChangeGenre = event => {
    this.setState({
      genre: event.target.value
    });
  };

  handleChangeTitle = event => {
    this.setState({
      movieTitle: event.target.value
    });
  };
  handleChangeRating = event => {
    this.setState({
      rating: event.target.value
    });
  };
  handleChangeDesc = event => {
    this.setState({
      description: event.target.value
    });
  };

  handleChangeSubmit = event => {
    alert(
      `${this.state.movieTitle} ${this.state.rating} ${this.state.genre} ${this.state.description}`
    )
    event.preventDefault()
  };

  render() {
    return (
     
        <form onSubmit={this.handleChangeSubmit}>
          <label for="title">Movie title: </label>
          <input
            id="title"
            name="title"
            type="text"
            size="30"
            value={this.state.movieTitle}
            onChange={this.handleChangeTitle}
            required
          />{" "}
          <br />
          <label for="rating">Rating: </label>
          <span>1</span>
          <input
            id="rating"
            name="rating"
            type="range"
            max="5"
            min="1"
            value={this.state.rating}
            onChange={this.handleChangeRating}
          />
          <span>5</span> <br />
          <label for="genre">Genre: </label>
          <select
            id="genre"
            name="genre"
            value={this.state.genre}
            onChange={this.handleChangeGenre}
          >
            <option value="drama" selected>
              Drama
            </option>
            <option value="action">Action</option>
            <option value="comedy">Comedy</option>
            <option value="scifi">Sci Fi</option>
            <option value="thriller">Thriller</option>
          </select>
          <br />
          <label for="description">Description:</label>
          <br />
          <textarea
            id="description"
            name="description"
            value={this.state.description}
            onChange={this.handleChangeDesc}
          ></textarea>
          <br />
          <button type="submit" id="submitButton">
            submit movie
          </button>
          <br />
        </form>
    
    );
  }
}
export default add;
