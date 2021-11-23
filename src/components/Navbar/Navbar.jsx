import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div className={`${s.menu} ${s.active}`}>
        <NavLink to='/profile' activeClassName={s.active}>Profile</NavLink>
      </div>
      <div className={s.menu}>
        <NavLink to='/dialogues' activeClassName={s.active}>Messages</NavLink>
      </div>
      <div className={s.menu}>
        <NavLink to='/users' activeClassName={s.active}>Users</NavLink>
      </div>
      <div className={s.menu}>
        <NavLink to='/news' activeClassName={s.active}>News</NavLink>
      </div>
      <div className={s.menu}>
        <NavLink to='/music' activeClassName={s.active}>Music</NavLink>
      </div>
      <div className={s.menu}>
        <NavLink to='/settings' activeClassName={s.active}>Settings</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;