import React, { Component } from "react";
import { Input } from "antd";

import "./serch.css";

const { Search } = Input;

class search extends Component {
  render() {
    return (
      <div className="search">
        <Search
          className="searchInput"
          placeholder="input search text"
          enterButton="Search"
          size="large"
          //onChange={(e)=>{this.props.newInput(e.target.value)}}
          onChange={v => this.setState({ newInput: v.target.value })}
          //value = { this.newInput }
          //value={this.state.newInput}
          
        />
      </div>
    );
  }
}
export default search;
