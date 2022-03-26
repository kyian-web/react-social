import { NavLink } from 'react-router-dom';
import s from './SideBar.module.css';

const setActive = ({isActive}) => isActive ? s.activeLink : s.link;

const SideBar = () => {
    return (
        <nav className={s.wrapper}>
            <ul className={s.list}>
                <li>
                    <NavLink className={setActive} to='/profile'>Profile</NavLink>
                </li>
                <li>
                    <NavLink className={setActive} to='/dialogs'>Messages</NavLink>
                </li>
                <li>
                    <NavLink className={setActive} to='/news'>News</NavLink>
                </li>
                <li>
                    <NavLink className={setActive} to='/music'>Music</NavLink>
                </li>
                <li>
                    <NavLink className={setActive} to='/settings'>Settings</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default SideBar;