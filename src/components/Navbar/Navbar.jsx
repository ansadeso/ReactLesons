import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';
const Navbar = () => {
    return(
        <nav className={s.nav}>
        <div><NavLink className={s.item} to='/profile'>Profile</NavLink></div>
        <div><NavLink className={s.item} to='/dialogs'>Message</NavLink></div>
        <div><a className={s.item} href='#s'>News</a></div>
        <div><a className={s.item} href='#s'>Music</a></div>     
        <div><a className={s.item} href='#s'>Settings</a></div>     
      </nav>
    );
}

export default Navbar;