import superagent from 'superagent';
const api = 'https://auth-server-401.herokuapp.com/api/v1/food';

export const getRemoteData = function () {
  return (dispatch) => {
    return superagent.get(api).then((response) => {
      dispatch(getAction({ results: response.body }));
    });
  };
};

export const putRemoteData = function (id, data) {
  return async (dispatch) => {
    const url = `${api}/${id}`;
    const response = await superagent.put(url).send(data);
    console.log('PUT DONE', response.body);
    // you can dispatch here
    // dispatch(putAction(response.body));
  };
};

export const getAction = (payload) => {
  return {
    type: 'GET',
    payload: payload,
  };
};
// export const putAction = (payload) => {
//   return {
//     type: 'PUT',
//     payload: payload,
//   };
// };
