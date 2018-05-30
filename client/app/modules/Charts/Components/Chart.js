import React, { Component } from 'react';
//import styled from 'styled-components';
import { PieChart, Pie, Cell, Legend } from 'recharts';

export default class Chart extends Component {
    render() {
        const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
        return (
            <PieChart width={760} height={650}>
                <Legend layout={'vertical'} align={'center'} verticalAlign={'bottom'}/>
                <Pie
                    data={this.props.chartData}
                    cx={390}
                    cy={230}
                    labelLine={false}
                    outerRadius={190}
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
