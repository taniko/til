import { Action } from 'redux';

export enum ActionType {
    ADD_COUNTER = 'ADD_COUNTER',
    SUB_COUNTER = 'SUB_COUNTER',
}

export interface AddCounterAction extends Action {
    type: ActionType.ADD_COUNTER;
    payload: {
        num: number;
    };
}

export interface SubCounterAction extends Action {
    type: ActionType.SUB_COUNTER;
    payload: {
        num: number;
    };
}

export const add = (num: number): AddCounterAction => ({
    type: ActionType.ADD_COUNTER,
    payload: {
        num
    },
});

export const sub = (num: number): SubCounterAction => ({
    type: ActionType.SUB_COUNTER,
    payload: {
        num
    },
});

export type CounterActions = AddCounterAction | SubCounterAction;
