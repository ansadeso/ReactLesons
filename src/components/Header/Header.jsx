import s from './Header.module.css';
import logos from './logo.jpg'
const Header = () => {
    return(
        <header className={s.header}>
            <img src={logos} alt=''></img>
        </header>
    );
}

export default Header;