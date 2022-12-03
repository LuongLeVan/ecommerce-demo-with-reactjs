import React from 'react'
import Header from 'src/components/Header'
import { CartConntext } from 'src/Contexts/CartContext'
import { useContext, useState } from 'react'
import classNames from 'classnames/bind'
import styles from './Login.module.scss'
import Footer from 'src/components/Footer'


const cx = classNames.bind(styles)

const Login = props => {

    const { cart, user, setUser } = useContext(CartConntext)
    const [userName, setUserName] = useState(null)
    const [email, setEmail] = useState(null)
    const [userNameLogin, setUserNameLogin] = useState()
    const [passwordLogin, setPasswordLogin] = useState()
    const [password, setPassword] = useState(null)
    const [isRegister, setIsRegister] = useState(false)
    const [retyePassword, setRetyePassword] = useState(null)

    const handleSubmitRegister = (e) => {
        if(!userName || !email || !password || !retyePassword){
            e.preventDefault()
            alert('Không được để trống!')
        }
        else{
            if(password === retyePassword) {
                const users = {
                    userName: userName,
                    password: password,
                    email: email,
                }
                const json = JSON.stringify(users)
                localStorage.setItem(userName, json)
                alert('Đăng ký thành công!')
                props.history.push('/login')
            }
            else {
                alert('Mật khẩu không trùng khớp')
                e.preventDefault()
            }
        } 
    }
    const handleSubmitLogin = (e) => {
        e.preventDefault()
        const users = localStorage.getItem(userNameLogin)
        const data = JSON.parse(users)
        if (!userNameLogin || !passwordLogin) {
           alert('Vui lòng nhập đầy đủ thông tin!')
             }else{
                 if(!data){
                     alert('Đăng nhập thất bại')
                 }else{
                        if (data.userName === userNameLogin && data.password === passwordLogin) {
                            setUser(data)
                            alert('Đăng nhập thành công!')
                            props.history.push('/')  
                        }else{
                            alert('Đăng nhập thất bại')
                        }
             
                    
         
                 }

             }
    }
    return (
        <div>
            <Header cart={cart} userInfo={user} />

            <div className={cx('container')}>
                <div className={cx('wrapper')}>
                    <div className={cx('container__form')}>
                        <div className={cx('wrapper-title')}>
                            <span className={cx('title__option')}>Chọn phương thức Đăng nhập</span> <br />
                        </div>
                        <div className={cx('container__method')}>
                           
                            <div className={cx('method-item2')}>
                                {isRegister ? (
                                     <form>
                                     <div className={cx('heading-form')}>Đăng ký</div>
                                     <span className={cx('wrapper-input')}>
                                        <input className={cx('input-form')} type="text" placeholder='Tài khoản' onChange={e => setUserName(e.target.value)} />
                                     </span>
                                     <span className={cx('wrapper-input')}>
                                        <input className={cx('input-form')} type="email" placeholder='Email' onChange={e => setEmail(e.target.value)} />
                                     </span>  
                                     <span className={cx('wrapper-input')}>
                                     <input className={cx('input-form')} type="password" placeholder='Mật khẩu' onChange={e => setPassword(e.target.value)} />
                                     </span>
                                     <span className={cx('wrapper-input')}>
                                     <input className={cx('input-form')} type="password" placeholder='Nhập lại mật khẩu' onChange={e => setRetyePassword(e.target.value)} />
                                     </span> 
                                     <div className={cx('wrapper-button_register')}>
                                         <button className={cx('button_register')} type="submit" onClick={handleSubmitRegister}> Đăng ký</button>
                                            <span className={cx('change-form_register')} onClick={() => setIsRegister(false)}>Đăng nhập</span>
                                     </div>
                                 </form>
                                ) : (
                                    <form>
                                        <div className={cx('heading-form')}>Đăng nhập</div>
                                        <span className={cx('wrapper-input')}>
                                            <input className={cx('input-form')} type="text" placeholder='Tài khoản' onChange={e => setUserNameLogin(e.target.value)} required />
                                        </span>
                                        <span className={cx('wrapper-input')}>
                                            <input className={cx('input-form')} type="password" placeholder='Mật khẩu' onChange={e => setPasswordLogin(e.target.value)} required />
                                        </span>                                        
                                        <div className={cx('wrapper-button')}>
                                            <button className={cx('button')} type="submit" onClick={handleSubmitLogin}> Đăng nhập</button>
                                            {<span className={cx('change-form')} onClick={() => setIsRegister(true)}>Đăng ký</span>}
                                        </div>
                                    </form>
                                )
                                
                                }
                            </div>
                        </div>


                    </div>
                </div>



            </div>
            <Footer />
        </div>
    )
}

export default Login