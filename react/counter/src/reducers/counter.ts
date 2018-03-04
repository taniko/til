import { ActionType, CounterActions } from 'actions/counter';

export interface CounterState {
  count: number;
}

const initialState: CounterState = {
    count: 0
};

const counter = (state: CounterState = initialState, action: CounterActions) => {
    switch (action.type) {
        case ActionType.ADD_COUNTER:
            return {count: state.count + action.payload.num};
        case ActionType.SUB_COUNTER:
            return {count: state.count - action.payload.num};
        default:
            return state;
    }
};

export default counter;
