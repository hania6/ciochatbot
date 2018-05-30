import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
// Loading Modules
import Chart from './Components/Chart';
// Loading Actions

class ChartContainer extends React.Component {
    render() {
        return (
            <Container>
                <Header> CIO Survey Chatbot </Header>
                <TextContent> See Where Do You Stand Against Your Peers. </TextContent>
                {this.props.Chat.showChart ?
                    <ChartArea>
                        <Chart chartData={this.props.Chat.chartData}/>
                    </ChartArea> :
                    null}
            </Container>
        );
    }
}

function mapStateToProps(state) {
    return {
        Chat: state.Chat
    };
}

export default connect(mapStateToProps)(ChartContainer);

const Container = styled.div`
    width: 100%;
    height: 100%;
    padding: 20px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    position: relative;
    color: white;
    font-size: 2rem;
`;

const Header = styled.div`
    font-size: 3rem;
    margin-bottom: 10px;
`;

const TextContent = styled.div`
    font-size: 1.5rem;
    margin-bottom: 10px;
`;

const ChartArea = styled.div`
    width: 100%;
    height: 100%;
`;
