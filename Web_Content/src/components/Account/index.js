import classNames from 'classnames/bind';
import styles from './Account.module.scss';

const cx = classNames.bind(styles);

function Account() {
    return (
        <div className={cx('account-wrapper')}>
            <img
                className={cx('account-avatar')}
                src="https://antimatter.vn/wp-content/uploads/2022/11/anh-avatar-trang-tron.jpg"
                alt=""
            />
            <h5 className={cx('account-name')}>Nguyễn Văn A</h5>
        </div>
    );
}

export default Account;
