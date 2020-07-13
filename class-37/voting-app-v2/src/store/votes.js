const initialState = {
  totalVotes: 0,
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'INCREMENT':
      console.log('VOTESESTATE', state);
      return payload.disable ? state : { totalVotes: state.totalVotes + 1 };

    case 'REST':
      return initialState;
    default:
      return state;
  }
};

export const increment = (person) => {
  return {
    type: 'INCREMENT',
    payload: person,
  };
};
export const reset = () => {
  return {
    type: 'RESET',
  };
};
