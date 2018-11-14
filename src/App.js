// @flow

import * as React from 'react';

import Counter from './screens/Counter/CounterComponent';
import {combineReducers, createStore} from './reduct/reduct';
import CounterReducer from './reduct/CounterReducer';
import ReactReduct from './reduct/react-reduct';

type Props = {};

const reducers = combineReducers({counter: CounterReducer});
const store = createStore(reducers);

// eslint-disable-next-line
function App(props: Props) {
  return (
    <ReactReduct.Provider value={store}>
      <ReactReduct.connectWithHOC>
        {({state, dispatch}) => (
          <Counter
            counter={state.counter}
            onIncrement={() => dispatch({type: 'increment'})}
            onDecrement={() => dispatch({type: 'decrement'})}
          />
        )}
      </ReactReduct.connectWithHOC>
    </ReactReduct.Provider>
  );
}

export default App;
