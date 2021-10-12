import React from 'react';
import Menu from '../../assets/icons/menu.png';

const Burger = () => {
  return (
    <>
      <button className="btn-burger">
        <img src={Menu} alt="menu hamburger" />
      </button>
    </>
  );
};
export default Burger;
