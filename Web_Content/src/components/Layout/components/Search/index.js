import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import styles from './Search.module.scss';

const cx = classNames.bind(styles);

function Search() {
    return (
        <div className={cx('header-navbar-search')}>
            <div className={cx('header-navbar-search-item')}>
                <input className={cx('header-navbar-search-item-input')} placeholder={'search...'} />
                <span className={cx('header-navbar-search-item-icon')}>
                    <FontAwesomeIcon icon={faSearch} />
                </span>
            </div>
        </div>
    );
}

export default Search;
