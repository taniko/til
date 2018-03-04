import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { CounterActions, add, sub } from 'actions/counter';

class Counter extends React.Component<any, {}> {
    render() {
        return (
            <div>
                <p>count: {this.props.count}</p>
                <button onClick={() => this.props.actions.add(1)}>Add 1</button>
                <button onClick={() => this.props.actions.sub(1)}>Sub 1</button>
            </div>
        );
    }
}

export default connect(
    (state: any) => ({
        count: state.counter.count,
    }),
    (dispatch: Dispatch<CounterActions>) => ({
        actions: bindActionCreators({add, sub}, dispatch)
    })
)(Counter);
