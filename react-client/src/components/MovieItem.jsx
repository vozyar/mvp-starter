// import React from 'react';

// const ListItem = (props) => (
//   <div>
//     { props.item.description }
//   </div>
// )

// export default ListItem;

import React from 'react';

const MovieItem = (props) => (
  <div>
    <span> { props.item.name } </span>
    <span> { props.item.rating } </span>
  </div>
)

export default MovieItem;