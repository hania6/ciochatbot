import React, { Component } from 'react';
//import styled from 'styled-components';
import { PieChart, Pie, Cell, Legend } from 'recharts';

export default class Chart extends Component {
    render() {
        const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
        return (
            <PieChart width={900} height={900}>
                <Legend layout={'horizontal'} align={'center'} verticalAlign={'bottom'}/>
                <Pie
                    data={this.props.chartData}
                    cx={550}
                    cy={360}
                    labelLine={false}
                    outerRadius={325}
                    fill="#8884d8"
                    label
                >
                    {
                        this.props.chartData.map((entry, index) =>
                            <Cell key={index} fill={COLORS[index % COLORS.length]}/>)
                    }
                </Pie>
            </PieChart>
        );
    }
}
