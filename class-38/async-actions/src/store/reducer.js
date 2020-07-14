const initialState = { results: [] };

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'GET':
      console.log('GET', payload); // ==> {results:[...]}
      //its not returning the state!!! only the data from the API
      return payload;
    // case 'PUT':
    //   state.results.map((food) => (food._id === payload._id ? payload : food));
    default:
      return state;
  }
};
