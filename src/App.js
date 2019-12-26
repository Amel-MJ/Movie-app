import React from "react";
import "./App.css";
import { movieList } from "./component/map/input";
import Search from "./component/search/search";
import MapFilm from "./component/map/mapFilm";
import Add from "./component/add/add";
import Rate from "./component/rate/rate";

class App extends React.Component {
  state = {
    newInput: "",
    movieList,
    newFilm: [{ lien: "", name: "", rate: "" }],
    stars: ""
  };

  handleadd = (lien, name, rate) => {
    
    this.state.movieList.push({ lien, name, rate });
    const newMovie = this.state.movieList;
    this.setState({
      movielist: newMovie
    });
  };

  handelSearch = inputVal => {
    this.setState({
      newInput: inputVal
    });
  };
  handledRate = newVal => {
    this.setState({
      stars: newVal
    });
  };

  render() {
    const {stars}=this.state
    return (
      <div
      // style={{
      //width:"800px",
      //margin:"0 auto"    }}
      >
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Search
            handelSearch={this.handelSearch}
            newInput={this.state.newInput}
          />
          <Rate stars={stars} handledRate={this.handledRate} />
        </div>

        {/*<Search objectSearch={handelSearch:this.handelSearch, newInput:this.state.newInput}  />*/}
        <MapFilm
          movieList={this.state.movieList}
          newInput={this.state.newInput}
          stars={this.state.stars}
        />
        <Add handleadd={this.handleadd} />
      </div>
    );
  }
}

export default App;
