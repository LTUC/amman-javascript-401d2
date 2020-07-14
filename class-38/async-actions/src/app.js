import React, { useEffect } from 'react';
import { connect } from 'react-redux';
// import * as actions from './store/actions'; //bring in all exported stuff and put it in object
import { getRemoteData, putRemoteData } from './store/actions';
function App(props) {
  const fetchData = () => {
    props.get();
  };
  const updateFood = (e) => {
    console.log('HA?');
    e.preventDefault();
    console.log('FORM VALUES', e.target.name.value, e.target.id.value);
    const formData = new FormData(e.target);
    console.log('FORMDATA', formData);
    const name = formData.get('name');
    const id = formData.get('id');
    console.log('FORMDATA VALUES', id, name);
    props.put(id, { name });
  };
  useEffect(() => {
    //superagent.get()
    fetchData();
  }, []);
  return (
    <>
      <button onClick={fetchData}>Get Food</button>
      {props.data.results.map((food) => (
        <form key={food._id} onSubmit={updateFood}>
          <input type="text" name="name" defaultValue={food.name} />
          <input type="hidden" name="id" defaultValue={food._id} />
        </form>
      ))}
    </>
  );
}
const mapStateToProps = (state) => {
  return { data: state.data };
};
const mapDispatchToProps = (dispatch) => ({
  get: () => dispatch(getRemoteData()),
  put: (id, data) => dispatch(putRemoteData(id, data)),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
