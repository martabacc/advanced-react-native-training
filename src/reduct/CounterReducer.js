const INITIAL_STATE = 0;

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'increment': {
      return state + 1;
    }
    case 'decrement': {
      return state - 1;
    }
    default: {
      return state;
    }
  }
};
