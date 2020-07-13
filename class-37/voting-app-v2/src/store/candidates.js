const initialState = [
  { name: 'Mahmoud', votes: 0 },
  { name: 'Fatima', votes: 0 },
  { name: 'Ahmad', votes: 0 },
  { name: 'Yousef', votes: 0 },
];

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'INCREMENT':
      console.log('CANDIDATESTATE', state);
      return state.map((candidate) => {
        if (candidate.name === payload.name) {
          return { name: candidate.name, votes: candidate.votes + 1 };
        }
        return candidate;
      });
    case 'DISABLE':
      return state.map((candidate) =>
        candidate.name === payload.name
          ? { ...candidate, disable: true }
          : candidate
      );

    case 'RESET':
      console.log('WHAT IS THE STATE', state);
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

export const disable = (person) => {
  return {
    type: 'DISABLE',
    payload: person,
  };
};
export const reset = () => {
  return {
    type: 'RESET',
  };
};
