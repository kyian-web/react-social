import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            <img className={s.logo} src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Electron_Software_Framework_Logo.svg/256px-Electron_Software_Framework_Logo.svg.png" alt="" />
        </header>
    )
};

export default Header;