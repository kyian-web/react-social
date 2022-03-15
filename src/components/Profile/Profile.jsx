import s from './Profile.module.css';

const Profile = () => {
    return (
        <div className={s.profile}>
            <div>
                <img className={s.poster} src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" alt="" />
            </div>
            <div>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </div>
            <div>
                My Posts
                <div>
                    New post
                    <div>
                        post 1
                    </div>
                    <div>
                        post 2
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;