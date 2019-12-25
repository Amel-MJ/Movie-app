import React, { Component } from "react";
import { Input } from "antd";

import "./serch.css";

const { Search } = Input;

class search extends Component {
  state={
    newIput:""
  }
handledSearch=(e)=>{
  this.props.handelSearch(e.target.value)
}

  render() {
    return (
      <div className="search">
        <Search
          className="searchInput"
          placeholder="input search text"
          enterButton="Search"
          size="large"
          onChange={this.handledSearch}
        />
      </div>
    );
  }
}
export default search;
