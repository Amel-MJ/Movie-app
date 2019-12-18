import React, { Component } from "react";
import "./movies.css";



class movies extends Component {
  state = {
    item: "",
    formFilm: []
  };

  handlAdd = () => {
    this.setState({
      formFilm: [...this.state.formFilm, { input: this.state }.item]
    });
  };

  render() {
    return (
      <div>
        <div>
          <button onClick={this.handlAdd}>+</button>
        </div>
        <form>
           
        </form>
      </div>
    );
  }
}
export default movies;
