import React, { Component } from "react";
import { Card,Input } from "antd";



const { Meta } = Card;
const mapFilm = props => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        flexWrap:"wrap",
        marginTop: "50px"
      }}
    >
      {props.movieList.map((el, i) => (
        <Card
          hoverable
          style={{ width: 240, margin:23 }}
          cover={<img alt="films" src={el.lien}  style={{ height: 350 }} />}
        >
          <Meta title={el.name}  />
          <hr/>
          <span>{el.rate}</span>
        </Card>
      ))}
    </div>
  );
};

export default mapFilm;
