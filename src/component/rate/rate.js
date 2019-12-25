import React, { Component } from 'react'
import { Rate } from "antd";

export default class rate extends Component {
    
    handledRate=val=>{
        if(val == 0 ) val = '';
        this.props.handledRate(val)
          }
    render() {
        return (
            <div style={{ display: "flex", alignItems:"flex-end", marginLeft:"40px"}}>
             <span>
                 <p>Minimum Rating</p>
              <Rate
               onChange={this.handledRate}
             
              />
            </span>
            </div>
        )
    }
}
