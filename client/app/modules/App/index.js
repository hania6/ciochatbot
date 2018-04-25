import React from 'react';

// Loading Modules
import ContainerComp from '../ContainerComp';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <div>
                    {this.props.children}
                    <ContainerComp />
                </div>
            </div>
        );
    }
}
