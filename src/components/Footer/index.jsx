import React from 'react';
import classNames from 'classnames/bind';
import styles from './Footer.module.scss';

import { Link } from 'react-router-dom';
import logo from '/assets/images/Logo-2.png';
import Grid from '../Grid';

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
                <Grid
                    col={4}
                    mdCol={2}
                    smCol={1}
                    gap={10}
                >
                        <div className={cx('container')}>
                    <div className={cx('title')}>Tổng đài hỗ trợ</div>
                    <div className={cx('content')}>
                        <p>
                            Liên hệ đặt hàng <strong>0123456789</strong>
                        </p>
                        <p>
                            Thắc mắc đơn hàng <strong>0123456789</strong>
                        </p>
                        <p>
                            Góp ý, khiếu nại <strong>0123456789</strong>
                        </p>
                    </div>
                </div>
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
                </Grid>
             
            </footer>
        </div>
    );
};

export default Footer;
