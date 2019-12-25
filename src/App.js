import React from 'react';
import './App.css';
import { movieList } from './component/map/input'
import Search from './component/search/search'
import MapFilm from'./component/map/mapFilm'
import Add from './component/add/add'


class App extends React.Component {
  state={
    newInput:"",
    movieList,    
    newFilm:[{lien:"",name:"",rate:""}],
    new:[]
      
  }
 
  handleadd = (lien, name, rate) => {
    this.state.movieList.push({ lien, name, rate })
    const newMovie=this.state.movieList
    this.setState({
      movielist:newMovie
    });
  };
 

  handelSearch=(movielist )=>{
    this.setState({
      new:movielist.filter(movielist => movielist.this.state.newInput)
    })
  }
  
  render(){

    return (
      <div 
     // style={{
        //width:"800px",
        //margin:"0 auto"    }} 
        className="App">
       <Search handelSearch={this.handelSearch} newInput={this.state.newInput}/>
       <MapFilm movieList={this.state.movieList}/>
       <Add handleadd={this.handleadd}/>
      
      </div>
    );
  }
}

export default App;
