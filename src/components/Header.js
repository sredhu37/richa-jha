import React from 'react';

const Header = () => {
  return(
    <div className='Header'>
      <div className='floatMenuLeft'>
        <ul className='leftMenuItems menuItemLists'>
          <a href='#introduction'><li className='menuItem'>RICHA JHA</li></a>
        </ul>
      </div>
      <div className='floatMenuRight'>
        <ul className='rightMenuItems menuItemLists'>
          <a href='#about'><li className='menuItem'>ABOUT</li></a>
          <a href="#skills"><li className='menuItem'>SKILLS</li></a>
          <a href='#experience'><li className='menuItem'>EXPERIENCE</li></a>
          <a href='#resume'><li className='menuItem'>RESUME</li></a>
          <a href='#contact'><li className='menuItem'>CONTACT</li></a>
        </ul>
      </div>
      <div className="floatDummy"></div>
    </div>
  );
}

export default Header;