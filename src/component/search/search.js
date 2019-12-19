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
          onSearch={value => console.log(value)}
        />
      </div>
    );
  }
}
export default search;
