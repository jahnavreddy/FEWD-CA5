import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar({ setInput }) {


  const handleInputChange = (e) => {
    setInput(e.target.value);
    // onSearch(e.target.value);
  };

  return (
    <div>
      <div className='navbar'>
      <Link to={"/"}>

        <img
          src='https://kalvium.community/images/sidebar-3d-logo.svg'
          alt='Kalvium logo'
          className='kalvium-logo'
          />
          </Link>
        <input
          type='text'
          placeholder='Search Books'
          className='searchInput'
          // value={input}
          onChange={handleInputChange}
        />
        <Link to={"/form"}>
        <button className='registerBtn'>REGISTER</button>
        </Link>
      </div>
    </div>
  );
}
