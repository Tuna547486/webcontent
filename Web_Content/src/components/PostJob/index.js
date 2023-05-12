import classNames from 'classnames/bind';
import styles from './PostJob.module.scss';

const cx = classNames.bind(styles);

function PostJob() {
    return (
        <div className={cx('postJob-wrapper')}>
            <img
                className={cx('avatar')}
                src="https://antimatter.vn/wp-content/uploads/2022/11/anh-avatar-trang-tron.jpg"
                alt=""
            />
            <div className={cx('postJob-item')}>
                <input className={cx('postJob-item-input')} placeholder={'Đăng bài tuyển dụng'} />
            </div>
            <button className={cx('postJob-btn')}>Đăng bài</button>
        </div>
    );
}

export default PostJob;
