import classNames from 'classnames/bind';
import Menu from '../Menu';
import Account from '~/components/Account';
import styles from './Sidebar.module.scss';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu />
            <Account />
            <Account />
            <Account />
            <Account />
            <Account />
        </aside>
    );
}

export default Sidebar;
