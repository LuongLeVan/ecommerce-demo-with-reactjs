import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import './Cart.scss'
import { useState } from 'react'
import { CartConntext } from 'src/Contexts/CartContext'
import numberWithCommas from 'src/ultils/numberWithCommas'
import Button from 'src/components/Button'
import Header from 'src/components/Header';


const Cart = () => {
  const { cart, setCart, quantity, total, setTotalQuantity, setTotal, number, setNumber, user } = useContext(CartConntext)
  const userInfo = user

  const [totalAfterDel, setTotalAfterDel] = useState(total)

  const [isDelete, setIsDelete] = useState(false)

  const handleOrderSuccess = () => {
    if (cart.slice(1).length <= 0) {
      alert('Bạn chưa có sản phẩm nào trong giỏ hàng!')
    }
    if (cart.slice(1).length >= 1) {
      alert('Đặt hàng thành công!')
      setCart([{}])
      setTotalQuantity(0)
      setTotal(0)
      setNumber(0)
    }
  }



  const handleRemove = (e) => {

    setIsDelete(true)

    const x = e.target.getAttribute('removeproduct')


    setCart(cart.filter(items => items.title !== x))

    let priceItem = 0

    const arr = cart.slice(1).filter(item => item.title !== x)

    arr.map(item => {
      const newItem = {
        title: item.title,
        price: item.price,
        quantity: item.quantity
      }
      const itemPrice = Number(newItem.price) * newItem.quantity
      priceItem += itemPrice

    })
    setTotalAfterDel(priceItem)
  }


  return (
    <div>
      <Header cart={cart} userInfo={userInfo}/>
      <div className={('container__cart')}>
        <div className='grid wide'>
          <div className='container__product_cart'>
            <div className="row" >
              <div className="l-3 m-4 c-12">
                <div className='container__total'>
                  <div className='container__total-heading'>Bạn đang có {Number(cart.length - 1)} sản phẩm trong giỏ hàng </div>
                  <div className='container__total-product'>
                    <span className='total__product-title'>Thành tiền</span>
                    <span className='total__product-quantity'>{cart.slice(1).length === 0 ? 0 : numberWithCommas(Number(totalAfterDel))}đ</span>
                  </div>
                  <Button cart onClick={() => handleOrderSuccess()}>đặt hàng</Button>
                  <Link to={"/catalog"}><Button cart>tiếp tục mua hàng</Button></Link>
                </div>
              </div>
              <div className="l-1 m-1 c-0"></div>
              <div className="l-8 m-7 c-12">
                {cart.slice(1).map((product, index) => (
                  <div className="row" key={index}>
                    <div className="l-5 m-11 c-10">
                      <div className='cart__container-info'>
                        <img className={('image')} src={product.image} alt="" />
                        <span className='cart__title'>{product.title}</span>
                        <span className='cart__size'>{`size-` + product.size}</span>
                        <span className='cart__color'>{product.color}</span>
                      </div>
                    </div>
                    <div className="l-2 m-1 c-2" >
                      <div className='cart__price' ><span priceproduct={product.price}>{numberWithCommas(product.price)}đ</span></div>
                    </div>
                    <div className="l-3 c-9 c-0-3">
                      <div className="quantity__input__cart">
                        <input type="text" disabled value={product.quantity} />
                      </div>
                    </div>
                    <div className="l-2 c-3">
                      <div className='container__icon-trash'>
                        <i className='bx bx-trash' removeproduct={product.title} onClick={handleRemove}></i>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart