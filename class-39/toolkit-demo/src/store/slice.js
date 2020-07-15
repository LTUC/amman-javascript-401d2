import { createSlice } from '@reduxjs/toolkit';
// name is the name of the slice
// initialState is the init state
// reducers replacing the switch case statement
const peopleSlice = createSlice({
  name: 'people',
  initialState: [],
  reducers: {
    add(state, action) {
      // ONLY IN TOOLKIT you can add directly to the state
      state.push({ name: action.payload });
    },
    remove(state, action) {
      return state.filter((person) => person.name !== action.payload);
    },
  },
});

export const { add, remove } = peopleSlice.actions;

export const get = () => async (dispatch) => {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon/');
  const people = await res.json();
  people.results.forEach((person) => dispatch(add(person.name)));
};
/*
THIS IS WHAT createSlice return
{
    name : string,
    reducer : ReducerFunction,
    actions : Record<string, ActionCreator>,
    caseReducers: Record<string, CaseReducer>
}
*/
// ITS NOT reducers!!!!! you need to export reducer
export default peopleSlice.reducer;
