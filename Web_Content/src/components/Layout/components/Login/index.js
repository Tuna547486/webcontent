import classNames from 'classnames/bind';
import styles from './Login.module.scss';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Login() {
    return (
        <div className={cx('login-wrapper')}>
            <img
                className={cx('login-image')}
                src="https://imta.edu.vn/wp-content/uploads/2022/06/khoa-hoc-content-marketing-imta.png"
                alt=""
            />
            <div className={cx('login-item')}>
                <h1 className={cx('login-title')}>Đăng nhập</h1>
                <div className={cx('login-item-icon')}>
                    <span className={cx('login-item-icon-fb')}>
                        <FontAwesomeIcon icon={faFacebook} />
                    </span>
                    <span className={cx('login-item-icon-google')}>
                        <FontAwesomeIcon icon={faGoogle} />
                    </span>
                </div>
                <span className={cx('login-or')}>Hoặc</span>
                <div className={cx('login-item-input-wrapper')}>
                    <div className={cx('login-item-input-email')}>
                        <input type="email" className={cx('login-item-input')} placeholder="Email address" />
                    </div>
                    <div className={cx('login-item-input-password')}>
                        <input type="password" className={cx('login-item-input')} placeholder="Password" />
                    </div>
                    <div className={cx('login-item-btn-login-wrapper')}>
                        <button className={cx('login-item-btn-login')}>Đăng nhập</button>
                        <Link to="/signup" className={cx('login-item-btn-sign-up')}>
                            Đăng ký
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
