import React, { Component } from 'react';
import * as d3 from 'd3';

class IngerientLevel extends Component {

    svg = null;


    componentDidMount() {
        this.svg.append('circle')
            .attr('color', 'red')
            .attr('r', 10)
            .attr('cx', 5)
            .attr('cy', 5);
    }

    render() {
        return (
            <svg width={"25%"} height={"100%"} ref={element => this.svg = d3.select(element)}></svg>
        )
    }
}

export default IngerientLevel;