import React from 'react';
import './App.css';
import Search from './component/search/search'
import Movie from './component/movies/movies'
import Add from './component/add/add'

function App() {
  return (
    <div className="App">
      <Search/>
      <Movie/>
      <Add/>
     
    </div>
  );
}

export default App;
