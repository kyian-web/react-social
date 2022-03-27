import Friends from './Friends/Friends';
import NavBar from './NavBar/NavBar';
import s from './SideBar.module.css';

const SideBar = (props) => {
    return (
        <div className={s.wrapper}>
            <NavBar />
            <Friends friends={props.data} />
        </div>
    );
};

export default SideBar;