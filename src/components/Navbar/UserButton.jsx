import React from 'react';
import User from '../../assets/images/user.png';

const UserButton = () => {
  return (
    <>
      <button className="btn-nav-user">
        <img src={User} alt="user options" className="img-user" />
      </button>
    </>
  );
};
export default UserButton;
