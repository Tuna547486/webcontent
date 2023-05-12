import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faAddressCard,
    faBoxArchive,
    faBuilding,
    faCircleQuestion,
    faHeart,
    faSatelliteDish,
    faTableList,
    faUsers,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Menu() {
    return (
        <div className={cx('menu-wrapper')}>
            <ul className={cx('list-menu')}>
                <li className={cx('list-menu-item')}>
                    <Link to="/job" className={cx('list-menu-item-wrapper')}>
                        <span className={cx('list-menu-item-icon-job')}>
                            <FontAwesomeIcon icon={faSatelliteDish} />
                        </span>
                        Tìm việc làm
                    </Link>
                </li>
                <li className={cx('list-menu-item')}>
                    <Link to="/profile" className={cx('list-menu-item-wrapper')}>
                        <span className={cx('list-menu-item-icon-cv')}>
                            <FontAwesomeIcon icon={faAddressCard} />
                        </span>
                        Hồ sơ
                    </Link>
                </li>
                <li className={cx('list-menu-item')}>
                    <Link to="/topuser" className={cx('list-menu-item-wrapper')}>
                        <span className={cx('list-menu-item-icon-top-user')}>
                            <FontAwesomeIcon icon={faUsers} />
                        </span>
                        Top User
                    </Link>
                </li>
                <li className={cx('list-menu-item')}>
                    <Link to="/tablefeed" className={cx('list-menu-item-wrapper')}>
                        <span className={cx('list-menu-item-icon-table-feed')}>
                            <FontAwesomeIcon icon={faTableList} />
                        </span>
                        Bảng feed
                    </Link>
                </li>
                <li className={cx('list-menu-item')}>
                    <Link to="/savejob" className={cx('list-menu-item-wrapper')}>
                        <span className={cx('list-menu-item-icon-save-job')}>
                            <FontAwesomeIcon icon={faHeart} />
                        </span>
                        Việc đã lưu
                    </Link>
                </li>
                <li className={cx('list-menu-item')}>
                    <Link to="/jobapplied" className={cx('list-menu-item-wrapper')}>
                        <span className={cx('list-menu-item-icon-job-applied')}>
                            <FontAwesomeIcon icon={faBoxArchive} />
                        </span>
                        Việc làm đã ứng tuyển
                    </Link>
                </li>
                <li className={cx('list-menu-item')}>
                    <Link to="/listcompanies" className={cx('list-menu-item-wrapper')}>
                        <span className={cx('list-menu-item-icon-list-companies')}>
                            <FontAwesomeIcon icon={faBuilding} />
                        </span>
                        Danh sách công ty
                    </Link>
                </li>
                <li className={cx('list-menu-item')}>
                    <Link to="/support" className={cx('list-menu-item-wrapper')}>
                        <span className={cx('list-menu-item-icon-support')}>
                            <FontAwesomeIcon icon={faCircleQuestion} />
                        </span>
                        Hỗ trợ
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Menu;
