import React from 'react';
import classNames from 'classnames/bind';
import styles from './Footer.module.scss';

import { Link } from 'react-router-dom';
import logo from '/assets/images/Logo-2.png';
import instagram from '/assets/images/instagram.png';

const cx = classNames.bind(styles);

const footerAboutLinks = [
    {
        display: 'Giới thiệu',
        path: '/about',
    },
    {
        display: 'Liên hệ',
        path: '/about',
    },
    {
        display: 'Tuyển dụng',
        path: '/about',
    },
    {
        display: 'Tin tức',
        path: '/about',
    },
    {
        display: 'Hệ thống cửa hàng',
        path: '/about',
    },
];

const footerCustomerLinks = [
    {
        display: 'Chính sách đổi trả',
        path: '/about',
    },
    {
        display: 'Chính sách bảo hành',
        path: '/about',
    },
    {
        display: 'Chính sách hoàn tiền',
        path: '/about',
    },
];
const Footer = () => {
    return (
        <div className={cx('wrapper')}>
            <footer className={cx('footer')}>
                <div className="gid wide">
                    <div className="row">
                            <div className="l-3 m-6 c-12">
                                <div className={cx('container')}>
                                    <div className={cx('title')}>Liên hệ khác</div>
                                    <div className={cx('content')}>
                                        <div className={cx('cotaniner-icon')}>
                                        <span className={cx('icon-face')}><i className='bx bxl-facebook-circle'></i></span>
                                        <span className={cx('icon-insta')}> <img src={instagram} alt="" /> </span>
                                        <span className={cx('icon-twitter')}><i className='bx bxl-twitter' ></i></span>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="l-3 m-6 c-12">
                                <div>
                                    <div className={cx('title-brand')}>Về Yolo</div>
                                    <div className={cx('content-brand')}>
                                        {footerAboutLinks.map((item, index) => (
                                            <p key={index}>
                                                <Link to={item.path}>{item.display}</Link>
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="l-3 m-6 c-12">
                                <div>
                                    <div className={cx('title-customer')}>Chăm sóc khách hàng</div>
                                    <div className={cx('content-customer')}>
                                        {footerCustomerLinks.map((item, index) => (
                                            <p key={index}>
                                                <Link to={item.path}>{item.display}</Link>
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="l-3 m-6 c-12">
                                <div className={cx('content-about')}>
                                    <p>
                                        <Link to="/">
                                            <img src={logo} className={cx('logo')} alt="" />
                                        </Link>
                                    </p>
                                    <p className={cx('title-introuduce')}>
                                        Hướng đến mục tiêu mang lại niềm vui ăn mặc mới mỗi ngày cho hàng triệu người tiêu dùng Việt. Hãy cùng Yolo hướng đến một cuộc sống năng động, tích cực hơn.
                                    </p>
                                </div>
                            </div>
                        </div>
                </div>





            </footer>
        </div>
    );
};

export default Footer;
