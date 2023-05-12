import classNames from 'classnames/bind';
import styles from './Companies.module.scss';

const cx = classNames.bind(styles);

function Companies() {
    return (
        <div className={cx('companies-wrapper')}>
            <img
                className={cx('companies-avatar')}
                src="https://luattriminh.vn/Uploads/images/co-duoc-dat-tru-so-cong-ty-tai-nha-chung-cu.jpg"
                alt=""
            />
            <div className={cx('companies-content')}>
                <h3 className={cx('companies-content-name')}>Công ty A</h3>
                <p>
                    " Công ty A là một công ty hàng đầu thế giới của Mỹ trong lĩnh vực dịch vụ chăm sóc khách hàng có
                    mặt ở trên 44 quốc gia với tổng số nhân sự lên tới trên 250.000 nhân viên.Công ty A Việt Nam luôn
                    đầu tư và nỗ lực nhằm cung cấp môi trường tốt nhất như:Cơ hội học hỏi & phát triển Kết nối thường
                    xuyên với nhân viên, tạo môi trường tốt..."
                </p>
            </div>
        </div>
    );
}

export default Companies;
