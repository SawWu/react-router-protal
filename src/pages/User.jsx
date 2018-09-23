import React from 'react';

const User = ({match}) => {
  console.log();
  return (
    <div> User {match.params.id}</div>
  )
};

export default User;
