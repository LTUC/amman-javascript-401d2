import React from 'react';

const ListItem = (props) => {
  return (
    <li>
      <p>{props.data.name}</p>
      <img src={props.data.img} />
    </li>
  );
};

export default ListItem;
