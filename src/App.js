import React from 'react';
import './App.css';
import Search from './component/search/search'
import MapFilm from'./component/map/mapFilm'


class App extends React.Component {
  state = {
    movieList: [
      {
        rating: "***",
        img:
          "http://fr.web.img6.acsta.net/medias/nmedia/18/66/32/79/19146247.jpg",
        desc: "Loup"
      },
      {
        rating: "*****",
        img: "http://fr.web.img2.acsta.net/pictures/15/04/23/15/38/341525.jpg",
        desc: "San Andreas"
      },
      {
        rating: "*",
        img: "https://www.avoir-alire.com/IMG/arton33883.jpg",
        desc: "Never Go Back"
      }
    ]
  };
  render(){

    return (
      <div className="App">
       {/*<Search filterbyname={}/>*/ } 
        <Search/>
        <MapFilm movieList={this.state.movieList}/>
       
      </div>
    );
  }
}

export default App;
