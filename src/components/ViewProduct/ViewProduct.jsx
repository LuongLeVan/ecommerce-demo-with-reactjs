import React from 'react'
import { withRouter } from 'react-router-dom'
import { useContext } from 'react'
import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import './ViewProduct.scss'
import Button from '../Button'
import numberWithCommas from 'src/ultils/numberWithCommas'
import Section, { SectionTitle } from 'src/components/Section'
import { CartConntext } from 'src/Contexts/CartContext'
import Header from '../Header'

const ViewProduct = props => {

    const { user } = useContext(CartConntext)

    const userInfo = user



    const { setCart, cart, setTotal, setNumber, number, isDelete } = useContext(CartConntext)

    const product = props.product


    const [previewImg, setPreviewImg] = useState(product.image01)

    const [color, setColor] = useState(undefined)

    const [size, setSize] = useState(undefined)


    const [showDescription, setShowDescription] = useState(false)

    const [quantity, setQuantity] = useState(1)

    const [isAdded, setIsAdded] = useState(false)


    useEffect(() => {
        setPreviewImg(product.image01)
        setColor(undefined)
        setSize(undefined)
        setQuantity(1)
        setIsAdded(false)
    }, [product])

    const check = () => {
        if (color === undefined) {
            alert('vui lòng chọn màu')
            return false
        }
        if (size === undefined) {
            alert('vui lòng kích cỡ')
            return false
        }

        return true
    }

    const addtoCart = () => {
        if (check() && userInfo) {
            const newItem = {
                id: product.id,
                title: product.title,
                image: product.image01,
                price: product.price,
                color: color,
                quantity: quantity,
                size: size
            }
            setCart((item) => [...item, newItem])
            setTotal((item) => (item += Number(newItem.price) * quantity))
            setIsAdded(true)
        }
    }

    const gotoCart = () => {
        if (check() && userInfo) {
            const newItem = {
                id: product.id,
                title: product.title,
                image: product.image01,
                price: product.price,
                color: color,
                quantity: quantity,
                size: size
            }
            setCart((item) => [...item, newItem])
            setTotal((item) => (item += Number(newItem.price) * quantity))
            setIsAdded(true)
            setNumber(cart.length)
            props.history.push('/cart')
        }
    }
    const handleLogin = () => {
        if(!userInfo) {
            props.history.push('/login')
        }
    }

    return (
        <div>
            <Header cart={cart} isDelete={isDelete} userInfo={userInfo}/>
            <div className='product'>
                <div className='grid wide'>
                    <div className='row'>
                        <div className="l-2 m-2 c-3">
                            <div className='image__list'>
                                <div className='image__list-item' onClick={() => setPreviewImg(product.image01)}>
                                    <img src={product.image01} alt="" />
                                </div>
                                <div className='image__list-item' onClick={() => setPreviewImg(product.image02)}>
                                    <img src={product.image02} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="l-5 m-6 c-9">
                            <div className='image__preivew'>
                                <img src={previewImg} alt="" />
                            </div>
                        </div>
                        <div className="l-5 m-4 c-12">
                            <div className="product__info">
                                <div className="product__info-title">
                                    <h3>{product.title}</h3>
                                </div>
                                <div className="product__info-price">
                                    <span>{numberWithCommas(product.price)}đ</span>
                                </div>
                                <p className='info__title-selection'>Màu sắc</p>
                                <div className="product__info-color">
                                    {product.colors.map((item, index) => (
                                        <div className={`info__color-item ${color === item ? 'active' : ''}`} onClick={() => setColor(item)} key={index}>
                                            <div key={index} className={`circle bg-${item}`}></div>
                                        </div>
                                    ))}
                                </div>
                                <p className='info__title-selection'>Kích cỡ</p>
                                <div className="product__info-size">
                                    {product.size.map((item, index) => (
                                        <div className={`info__size-item ${size === item ? 'active' : ''}`} onClick={() => setSize(item)} key={index}>
                                            <span key={index}>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <p className='info__title-selection'>Số lượng</p>
                            <div className="quantity__input">
                                <span className='quantity__input-btn'>
                                    <i className='bx bx-minus' onClick={() => setQuantity(quantity - 1)}></i>
                                </span>
                                <input type="text" disabled value={(quantity < 1 ? 1 : quantity)} />
                                <span className='quantity__input-btn'>
                                    <i className='bx bx-plus' onClick={() => setQuantity(quantity + 1)}></i>
                                </span>
                            </div>
                            <div className='product__buy-btn'>
                                <span className='btn__buy-pc' onClick={handleLogin}>
                                    <Button filter onClick={() => addtoCart()}>thêm vào giỏ</Button>
                                </span>
                                    <span className='btn__buy-tablet' onClick={handleLogin}><Button buyTablet onClick={() => addtoCart()}>thêm vào giỏ</Button></span>
                                <span className='btn__buy-pc' onClick={handleLogin}><Button filter onClick={() => gotoCart()}>mua ngay</Button></span>
                                    <span className='btn__buy-tablet' onClick={handleLogin}><Button buyTablet onClick={() => gotoCart()}>mua ngay</Button></span>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="l-8 c-12">
                            <div className="product__description">
                                <div className="product__description-title">
                                    Chi tiết sản phẩm
                                </div>
                                <Section>
                                    <SectionTitle>
                                        <div className={`product__description-content ${showDescription ? 'activeShow' : ''}`} dangerouslySetInnerHTML={{
                                            __html:
                                                product.description
                                        }}>
                                        </div>
                                    </SectionTitle>
                                </Section>
                                <div className="btn-showDescription">
                                    <Button filter onClick={() => setShowDescription(!showDescription)}>{showDescription ? 'Ẩn bớt' : 'Đọc thêm'}</Button>
                                </div>
                            </div>
                        </div>
                        <div className="l-4 c-0"></div>
                    </div>
                </div>
            </div>
        </div>

    )
}

ViewProduct.propTypes = {
    product: PropTypes.object.isRequired
}

export default withRouter(ViewProduct)