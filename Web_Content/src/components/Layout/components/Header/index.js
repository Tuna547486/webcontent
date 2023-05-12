import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import Search from '../Search';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrain } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('header-navbar')}>
                <Link to="/" className={cx('header-navbar-logo')}>
                    <FontAwesomeIcon className={cx('header-navbar-icon')} icon={faBrain} />
                </Link>
                <Search />
                <div className={cx('header-navbar-item')}>
                    <Link to="/login" className={cx('header-navbar-item-login')}>
                        Đăng nhập
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default Header;
