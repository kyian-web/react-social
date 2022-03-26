import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={s.poster} src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" alt="" />
            </div>
            <div className={s.descr}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </div>
        </div>
    );
};

export default ProfileInfo;