import classNames from 'classnames/bind';
import styles from './Support.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Support() {
    return (
        <div className={cx('support-wrapper')}>
            <h2 className={cx('support-title')}>BẠN CẦN HỖ TRỢ ?</h2>
            <div className={cx('support-contact')}>
                <h4 className={cx('support-contact-title')}>Liên hệ ngay:</h4>
                <p className={cx('support-contact-phone-number')}>0123456789</p>
            </div>
            <span className={cx('support-or')}>Hoặc</span>
            <div className={cx('support-icon')}>
                <span className={cx('support-icon-fb')}>
                    <FontAwesomeIcon icon={faFacebook} />
                </span>
                <span className={cx('support-icon-gmail')}>
                    <FontAwesomeIcon icon={faEnvelope} />
                </span>
            </div>
        </div>
    );
}

export default Support;
