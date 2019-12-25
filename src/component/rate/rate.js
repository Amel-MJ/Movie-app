import React, { Component } from 'react'
import { Rate } from "antd";

export default class rate extends Component {
    render() {
        return (
            <div>
                <Rate
                onChange={v => this.setState({ rate: v })}
                value={this.state.rate}
              />
            </div>
        )
    }
}
