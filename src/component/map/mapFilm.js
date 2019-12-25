import React from "react";
import { Card,Rate} from "antd";



const { Meta } = Card;
function mapFilm (props)  {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        flexWrap:"wrap",
        marginTop: "50px"
      }}
    >
      {
      props.movieList.filter(el=>el.name.toLowerCase().includes(props.newInput.toLowerCase())).map((el, i) => (
        <Card
          hoverable
          style={{ width: 240, margin:23 }}
          cover={<img alt="films" src={el.lien}  style={{ height: 350 }} />}
        >
          <Meta title={el.name}  />
          <hr/>
          <span>
          <Rate
                
                value={el.rate}
              /></span>
        </Card>
      ))}
    </div>
  );
};

export default mapFilm;
