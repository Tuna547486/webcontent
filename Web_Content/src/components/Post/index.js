import classNames from 'classnames/bind';
import styles from './Post.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faMessage, faPhone } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Post() {
    return (
        <div className={cx('post-wrapper')}>
            <div className={cx('post-information')}>
                <img
                    className={cx('post-information-avatar')}
                    src="https://antimatter.vn/wp-content/uploads/2022/11/anh-avatar-trang-tron.jpg"
                    alt=""
                />
                <h5 className={cx('post-information-name')}>Công ty A</h5>
            </div>
            <div className={cx('post-content')}>
                <h4>Mô tả công việc</h4>
                <p>- Lên kế hoạch nội dung theo tuần/ tháng/ quý phát triển kênh TikTok.</p>
                <p>
                    - Sáng tạo biên tập nội dung, ý tưởng và cùng team Content sản xuất, quay, dựng Video trên Tiktok để
                    đạt hiệu quả công việc tốt nhất.
                </p>
                <p>
                    - Nghiên cứu, cập nhật các xu hướng, tìm hiểu cách thức hoạt động, thuật toán theo thời gian của
                    TikTok để đảm bảo đáp ứng thị hiếu của đối tượng mục tiêu.
                </p>
                <p>
                    - Quản lý chất lượng nội dung kênh, thường xuyên đưa ra các ý tưởng mới, sáng kiến mới để phát triển
                    kênh theo mục tiêu công ty đề ra.
                </p>
                <p>- Thực hiện triển khai các nội dung MKT khác theo phân công của quản lý.</p>

                <h4>Yêu cầu ứng viên</h4>
                <p>- Có kinh nghiệm làm nội dung TikTok (Có link show các sản phẩm đã làm)</p>
                <p>- Hoạt ngôn, không ngại diễn xuất, lên hình</p>
                <p>- Khả năng quản lý, sắp xếp công việc khoa học</p>
                <p>- Khả năng viết nội dung & tư duy hình ảnh tốt.</p>
                <p>- Trình độ: Cao đẳng trở lên</p>
            </div>
            <div className={cx('post-interact')}>
                <button className={cx('post-interact-btn')}>
                    <span className={cx('post-interact-btn-icon')}>
                        <FontAwesomeIcon icon={faPhone} />
                    </span>
                    Liên hệ
                </button>
                <button className={cx('post-interact-btn')}>
                    <span className={cx('post-interact-btn-icon')}>
                        <FontAwesomeIcon icon={faMessage} />
                    </span>
                    Bình luận
                </button>
                <button className={cx('post-interact-btn')}>
                    <span className={cx('post-interact-btn-icon')}>
                        <FontAwesomeIcon icon={faHeart} />
                    </span>
                    Lưu
                </button>
            </div>
        </div>
    );
}

export default Post;
