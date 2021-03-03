import React, { useState } from 'react';

/* Dropdown menu */
function Dropdown({ foodInputHandler }) {
  const menus = [
    {
      type : 'foodSpots',
      name : 'Food Spots'
    },
    {
      type : 'touristSpots',
      name : 'Tourist Spots'
    },
    {
      type : 'shopping',
      name : 'Shopping'
    },
    { type: 'nightlife', name: 'Nightlife' }
  ];

  const [ menuName, setMenuName ] = useState('foodSpots');
  const handleChange = (evt) => {
    setMenuName(evt.target['value']);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    foodInputHandler(menuName);
  };
  return (
    <form onSubmit={handleSubmit} className="Dropdown">
      <select required onChange={handleChange}>
        {menus.map((menu) => (
          <option key={menu.type} value={menu.type}>
            {menu.name}
          </option>
        ))}
      </select>
      <button>Go</button>
    </form>
  );
}

export default Dropdown;
