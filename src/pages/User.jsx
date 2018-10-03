import React from 'react';
import queryString from 'query-string';

const User = ({location}) => {
  let parsed = queryString.parse(location.search.substr(1));
  console.log(parsed);
  return (
    <div>User{parsed.id}:{parsed.name}</div>
  )
};

export default User;
