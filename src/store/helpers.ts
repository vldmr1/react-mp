import { Reducer, Action, ActionCreator } from 'redux';

type Reducers = Record<string, Reducer>;
type State = Record<string, unknown>;

export const createReducer = (initialState: State, handlers: Reducers): Reducer => (
  (state = initialState, action: Action) => {
    if (Object.hasOwnProperty.call(handlers, action.type)) {
      return handlers[action.type](state, action);
    }
    return state;
  }
);

export const makeActionCreator = (type: string, ...argNames: string[]): ActionCreator<Action> => (
  (...args) => (
    argNames.reduce((action, _, index) => (
      { ...action, [argNames[index]]: args[index] }
    ), { type })
  )
);
