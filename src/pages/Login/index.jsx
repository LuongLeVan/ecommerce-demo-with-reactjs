import React from 'react'
import Header from 'src/components/Header'
import { CartConntext } from 'src/Contexts/CartContext'
import { useContext, useState, useEffect } from 'react'
import classNames from 'classnames/bind'
import styles from './Login.module.scss'
import Github from 'src/assets/images/github.png'
import Google from 'src/assets/images/google.png'
import Footer from 'src/components/Footer'


const cx = classNames.bind(styles)

const Login = props => {
    const google = () => {
        window.open("http://localhost:5000/auth/google", "_self");
    };
    
    const github = () => {
        window.open("https://ecommerce-demo-bice-delta.vercel.app/auth/github", "_self");
    };
    
    const { cart, user, setUser } = useContext(CartConntext)
    const [userName, setUserName] = useState(null)
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [isRegister, setIsRegister] = useState(false)
    const [retyePassword, setRetyePassword] = useState(null)

    const handleSubmitRegister = (e) => {
        e.preventDefault()
        if(password === retyePassword) {
            const users = {
                userName: userName,
                password:password,
                email:email
            }
            const json = JSON.stringify(users)
            localStorage.setItem( userName  ,  json)
            alert('Đăng ký thành công!')
            props.history.push('/')
        }
        else alert('Mật khẩu không trùng khớp')
    }
    
    const handleSubmitLogin = (e) => {
        e.preventDefault()
        const users = localStorage.getItem(userName)
        const data = JSON.parse(users)
        if(data.userName === userName && data.password === password){
            setUser(data);
            console.log(data);
            alert('Đăng nhập thành công!')
             /* props.history.push('/') */
        } 
    }
    const userInfo = user
    return (
        <div>
            <Header cart={cart} userInfo={userInfo} />

            <div className={cx('container')}>
                <div className={cx('wrapper')}>
                    <div className={cx('container__form')}>
                            <div className={cx('wrapper-title')}>
                                <span className={cx('title__option')}>Chọn phương thức Đăng nhập</span> <br />
                                <span className={cx('option')}>để tiếp tục với</span> <span className={cx('brand')}>Yolo-ecommerce</span>
                            </div>
                            <div className={cx('container__method')}>
                            <div className={cx('method-item1')}>
                            <div className={cx('wrapper__content')}>
                                <div className={cx('flex')}>
                                    <div className={cx('container__btn-google')} onClick={google}>
                                    <img className={cx('icon-github')} src={Google} alt="" />
                                        <span className={cx('title-google')}>Google</span>
                                    </div>
                                </div>
                                <div className={cx('flex')}>
                                    <div className={cx('container__btn-git')} onClick={github}>
                                        <img className={cx('icon-github')} src={Github} alt="" />
                                        <span className={cx('title-github')}>Github</span>
                                    </div>
                                </div>
                                <div className={cx('wrapper-title-footer')}>
                                    <span className={cx('title-footer')}>Nếu tiếp tục, Google và Github sẽ chia sẻ tên, địa chỉ email, tùy chọn ngôn ngữ và ảnh hồ sơ của bạn với Yolo-ecommerce.</span>
                                </div>
                                
                            </div>
                        </div>
                        <div  className={cx("center")}>
                            <div className={cx('or')}>OR</div>
                        </div>
                        <div className={cx('method-item2')}>
                           { isRegister ? <form>
                           <div className={cx('heading-form')}>Đăng ký</div>
                           <div className={cx('wrapper-input')}>
                           <input className={cx('input-form')} type="text" placeholder='Tài khoản' onChange={e => setUserName(e.target.value)}/>
                                </div>
                                <div className={cx('wrapper-input')}>
                               <input className={cx('input-form')} type="email" placeholder='Email' onChange={e => setEmail(e.target.value)}/>
                                </div>

                                <div className={cx('wrapper-input')}>
                                <input className={cx('input-form')}type="password" placeholder='Mật khẩu' onChange={e => setPassword(e.target.value)}/>
                                </div>
                                <div className={cx('wrapper-input')}>
                                <input className={cx('input-form')} type="password" placeholder='Nhập lại mật khẩu' onChange={e => setRetyePassword(e.target.value)}/>
                                </div>
                                <div className={cx('wrapper-button')}>
                                <button className={cx('button')} type="submit" onClick={handleSubmitRegister}> Đăng ký</button>
                                <span className={cx('change-form')} onClick={() => setIsRegister(false)}>Đăng nhập</span>
                                </div>

                            </form> :
                            <form >
                            <div className={cx('heading-form')}>Đăng nhập</div>
                            <div className={cx('wrapper-input')}>
                                <input className={cx('input-form')} type="text" placeholder='Tài khoản' onChange={e => setUserName(e.target.value)} required/>
                            </div>
                            <div className={cx('wrapper-input')}>
                                <input className={cx('input-form')} type="password" placeholder='Mật khẩu' onChange={e => setPassword(e.target.value)} required/>
                            </div>
                            <div className={cx('wrapper-button')}>
                                <button className={cx('button')} type="submit" onClick={handleSubmitLogin}> Đăng nhập</button>
{                                <span className={cx('change-form')} onClick={() => setIsRegister(true)}>Đăng ký</span>
}                            </div>
                        </form>
                        }
                        </div>
                            </div>
                       
                          
                    </div>
                </div>



            </div>
            <Footer/>
        </div>
    )
}

export default Login