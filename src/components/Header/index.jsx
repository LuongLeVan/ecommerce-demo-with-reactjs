import React, { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css'; // optional

import logo from '/assets/images/Logo-2.png';
import classNames from 'classnames/bind';
import style from './Header.scss';

const cx = classNames.bind(style);



const mainNav = [
    {
        display: 'Trang chủ',
        path: '/',
    },
    {
        display: 'Sản phẩm',
        path: '/catalog',
    },
    {
        display: 'Phụ kiện',
        path: '/accessories',
    },
    {
        display: 'Liên hệ',
        path: '/contact',
    },
];

const tabletNav = [
    {
        display: 'Trang chủ',
        path: '/',
    },
    {
        display: 'Sản phẩm',
        path: '/catalog',

    },
    {

        display: 'Phụ kiện',
        path: '/accessories',

    },
    {
        display: 'Liên hệ',
        path: '/contact',

    },
];


const Header = props => {
    const { cart, userInfo } = props
    
    const { pathname } = useLocation()
    const activeNav = mainNav.findIndex(e => e.path === pathname)

    const headerRef = useRef(null)
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                headerRef.current.classList.add('shrink')
            } else {
                headerRef.current.classList.remove('shrink')
            }
        })

    }, [])

    const logout = () => {
        window.open('http://localhost:3000/', '_self')
    }
    return (
        <div className={cx('header')} ref={headerRef}>
            <div className={cx('container')}>
                <div className={cx('menu_header')}>

                    <input hidden type="checkbox" id="checkbox-btn" />
                    <label htmlFor="checkbox-btn" className={cx('mobile-toggle')}>
                        <i className="bx bx-menu-alt-left"></i>
                    </label>
                    <label htmlFor="checkbox-btn" className='overlay'></label>

                    {/* Tablet menu */}
                    <div className={cx('menu-tablet')}>
                        <label htmlFor="checkbox-btn" className={cx('btn-close')}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" /></svg>
                        </label>
                        {tabletNav.map((item, index) => (
                            <div key={index} className={cx('menu__tablet-list')}>
                                <Link className={cx('menu__tablet-item')} to={item.path}>
                                    <span className={cx(`${index === activeNav ? 'active' : ''}`)}>{item.display}</span>
                                </Link>
                            </div>
                        ))}
                    </div>

                    <div className={cx('header-left')}>
                        {mainNav.map((item, index) => (
                            <div key={index} className={cx('menu-list')}>
                                <Link className={cx('menu-item')} to={item.path}>
                                    <span className={cx(`${index === activeNav ? 'active' : ''}`)}>{item.display}</span>
                                </Link>
                            </div>
                        ))}
                    </div>
                    <div className={cx('logo-container')}>
                        <Link to="/">
                            <img className={cx('logo')} src={logo} alt="" />
                        </Link>
                    </div>
                    <div className={cx('header-right')}>
                    <Tippy content={'Search'} placement="bottom">
                        <div className={cx('item-right')}>
                            <span className='icon-search'><i className="bx bx-search icon"></i></span>
                        </div>
                    </Tippy>
                        <div className={cx('item-right')}>
                            <Tippy content={'Cart'} placement="bottom">
                            <Link to="/cart">
                                <span className={'icon-bag'}><i className="bx bx-shopping-bag "></i></span>
                                <div className='circle__quantity'>

                                    <span className='circle__quantity-number'>{Number(cart.length - 1)}</span>
                                </div>
                            </Link>
                            </Tippy>
                        </div>
                        <div className={cx('item-right')}>
                            <Tippy
                                interactive
                                placement='left-end'
                                render={attrs => (
                                    <div className="box" tabIndex="-1" {...attrs}>
                                        <div className='container__signup'>
                                            {userInfo ? (
                                                <div className='signup__options' onClick={logout}>
                                                    <i className='bx bx-log-out icon'></i>
                                                    <span className='option__title'>Đăng xuất</span>

                                                </div>
                                            ) : (
                                                <Link to={'/login'}>
                                                    <div className='signup__options login'>
                                                        <i className='bx bx-log-in icon'></i>
                                                        <span className='option__title'>Đăng nhập</span>
                                                    </div>
                                                </Link>

                                            )}


                                        </div>
                                    </div>
                                )}
                            >
                             {userInfo ? <img className='user-avatar' src={'https://static.vecteezy.com/system/resources/thumbnails/002/002/332/small_2x/ablack-man-avatar-character-isolated-icon-free-vector.jpg'} alt="" /> : <span className='icon-user'><i className='bx bx-user'></i></span>}
                            </Tippy>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
