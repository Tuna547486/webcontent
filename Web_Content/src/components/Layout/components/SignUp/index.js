import classNames from 'classnames/bind';
import styles from './SignUp.module.scss';

const cx = classNames.bind(styles);

function SignUp() {
    return (
        <div className={cx('sign-up-wrapper')}>
            <img
                className={cx('sign-up-image')}
                src="https://imta.edu.vn/wp-content/uploads/2022/06/khoa-hoc-content-marketing-imta.png"
                alt=""
            />
            <div className={cx('sign-up-item')}>
                <h1 className={cx('sign-up-title')}>Đăng ký</h1>
                <div className={cx('sign-up-item-input-wrapper')}>
                    <div className={cx('sign-up-item-input-email')}>
                        <input type="email" className={cx('sign-up-item-input')} placeholder="Email address" />
                    </div>
                    <div className={cx('sign-up-item-input-password')}>
                        <input type="password" className={cx('sign-up-item-input')} placeholder="Password" />
                    </div>
                    <div className={cx('sign-up-item-input-password')}>
                        <input type="password" className={cx('sign-up-item-input')} placeholder="Confirm Password" />
                    </div>
                    <button className={cx('sign-up-item-btn')}>Đăng ký</button>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
