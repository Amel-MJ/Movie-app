import React, { Component } from 'react'
import'./add.css'

class add extends Component {
    state = {
        item: "",
        formFilm: [],
            };

      handlAdd = () => {
        this.setState({formFilm: [...this.state.formFilm, {input:this.state}.item]}
          );
        }


    render() {
        return (
            <div>
            <div>
                <button onClick={this.handlAdd}>+</button>
            </div>
             
             <form>
                 {this.state.formFilm.map((el,i)=>
                    <div>
                    <label for="title">Movie title: </label>
                      <input id="title" name="title" type="text" size="30" required /> <br/>
                    <label for="rating">Rating: </label>
                    <span>1</span> 
                     <input id="rating" name="rating" type="range" max="5" min="1" />
                          <span>5</span>  <br/>
                    <label for="genre">Genre: </label>
                      <select id="genre" name="genre">
                        <option value="drama" selected>Drama</option>
                        <option value="action">Action</option>
                        <option value="comedy">Comedy</option>
                        <option value="scifi">Sci Fi</option>
                        <option value="thriller">Thriller</option>
                      </select><br/>
                    <label for="description">Description:</label><br/>
                      <textarea id="description" name="description"></textarea>
                    <br/>
                    <input type="button" id="submitButton" value="Add movie!" /><br/>
                    </div>
                 )}
                 </form>
       
         </div>
        )
    }
}
export default add 