import classNames from 'classnames/bind';
import styles from './Profile.module.scss';

const cx = classNames.bind(styles);

function Profile() {
    return (
        <div className={cx('profile-wrapper')}>
            <div className={cx('profile-detail-wrapper')}>
                <img
                    className={cx('profile-avatar')}
                    src="https://antimatter.vn/wp-content/uploads/2022/11/anh-avatar-trang-tron.jpg"
                    alt=""
                />
                <h2 className={cx('profile-name')}>Nguyễn Văn A</h2>
            </div>
            <div className={cx('profile-information')}>
                <h2 className={cx('profile-information-title')}>THÔNG TIN CÁ NHÂN</h2>
                <div className={cx('profile-information-item')}>
                    <h4 className={cx('profile-information-item-title')}>Ngày sinh:</h4>
                    <p className={cx('profile-information-content')}>01/01/2001</p>
                </div>
                <div className={cx('profile-information-item')}>
                    <h4 className={cx('profile-information-item-title')}>Giới tính:</h4>
                    <p className={cx('profile-information-content')}>Nam</p>
                </div>
                <div className={cx('profile-information-item')}>
                    <h4 className={cx('profile-information-item-title')}>Email:</h4>
                    <p className={cx('profile-information-content')}>nguyenvana@gmail.com</p>
                </div>
                <div className={cx('profile-information-item')}>
                    <h4 className={cx('profile-information-item-title')}>số điện thoại:</h4>
                    <p className={cx('profile-information-content')}>0123456789</p>
                </div>
                <div className={cx('profile-information-item')}>
                    <h4 className={cx('profile-information-item-title')}>Dịa chỉ:</h4>
                    <p className={cx('profile-information-content')}>Hà Đông - Hà Nội</p>
                </div>
                <div className={cx('profile-information-skill')}>
                    <h2 className={cx('profile-information-skill-title')}>KỸ NĂNG</h2>
                    <p className={cx('profile-information-content')}>Kỹ năng sáng tạo</p>
                    <p className={cx('profile-information-content')}>Kỹ năng về công nghệ máy tính thành thạo</p>
                    <p className={cx('profile-information-content')}>Kỹ năng về hình ảnh, video, màu sắc…</p>
                    <p className={cx('profile-information-content')}>Kỹ năng về đọc cũng như viết nội dung</p>
                    <p className={cx('profile-information-content')}>Kỹ năng làm việc nhóm</p>
                </div>
            </div>
        </div>
    );
}

export default Profile;
