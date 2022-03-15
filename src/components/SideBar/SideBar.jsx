import s from './SideBar.module.css';

const SideBar = () => {
    return (
        <nav className={s.wrapper}>
            <ul className={s.list}>
                <li>
                    <a className={s.link} href="#">Profile</a>
                </li>
                <li>
                    <a className={s.link} href="#">Messages</a>
                </li>
                <li>
                    <a className={s.link} href="#">News</a>
                </li>
                <li>
                    <a className={s.link} href="#">Music</a>
                </li>
                <li>
                    <a className={s.link} href="#">Settings</a>
                </li>
            </ul>
        </nav>
    );
};

export default SideBar;