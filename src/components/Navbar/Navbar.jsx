import s from './Navbar.module.css';
const Navbar = () => {
    return(
        <nav className={s.nav}>
        <div><a className={s.item} href='/profile'>Profile</a></div>
        <div><a className={`${s.item} ${s.active}`} href='/dialogs'>Message</a></div>
        <div><a className={s.item} href='#s'>News</a></div>
        <div><a className={s.item} href='#s'>Music</a></div>     
        <div><a className={s.item} href='#s'>Settings</a></div>     
      </nav>
    );
}

export default Navbar;