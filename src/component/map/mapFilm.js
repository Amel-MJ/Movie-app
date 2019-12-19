import React, { Component } from "react";
import { Card } from "antd";

const { Meta } = Card;
const mapFilm = props => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        marginTop: "50px"
      }}
    >
      {props.movieList.map((el, i) => (
        <Card
          hoverable
          style={{ width: 240 }}
          cover={<img alt="example" src={el.img}  style={{ height: 350 }} />}
        >
          <Meta title={el.desc} description={el.desc} />
          <hr/>
          <span>{el.rating}</span>
        </Card>
      ))}
    </div>
  );
};

export default mapFilm;
