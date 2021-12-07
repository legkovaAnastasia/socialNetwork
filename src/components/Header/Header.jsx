import React from 'react';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return(
        <header className={s.header}>
        <img src='https://logos-world.net/wp-content/uploads/2020/12/Lays-Logo.png' />
        <div className={s.loginBlock}>
          {props.isAuth ? props.login
          : <NavLink to={'/login'} >login</NavLink>}
        </div>
      </header>
    );
}

export default Header;