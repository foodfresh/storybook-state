import React, { Component, cloneElement } from 'react';
import propTypes from 'proptypes';

export default class State extends Component {
    static propTypes = {
        children: propTypes.element,
        store: propTypes.object
    };

    constructor(props) {
        super(props);

        this.stateStore = this.props.store;
        this.state = this.stateStore.state;
    }

    componentDidMount() {
        this.subscription = this.stateStore.subscribe(state =>
            this.setState(state)
        );
    }

    componentWillUnmount() {
        this.stateStore.unSubscribe(this.subscription);
    }

    render() {
        return (
            <div>
                {cloneElement(this.props.children, {
                    ...this.state
                })}
            </div>
        );
    }
}
