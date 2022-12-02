import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import classNames from 'classnames/bind'
import styles from './ProductCard.module.scss'
import Button from '../Button'
import numberWithCommas from 'src/ultils/numberWithCommas'

const cx = classNames.bind(styles)



const ProductCard = props => {
  return (
    <div className={cx('product-cart')}>
      <Link to={`/catalog/${props.slug}`}>
        <div className={cx('card-img')}>
          <img src={props.img01} alt="" />
          <img src={props.img02} alt="" />
        </div>
        <h3 className={cx('card-name')}>
          {props.name}
        </h3>
        <div className={cx('card-price')}>
          {numberWithCommas(Number(props.price))}
          <span className={cx('card-old-price')}>
            <del>{numberWithCommas(Number(299999))}</del>
          </span>
        </div>
      </Link>
      <div className={cx('btn-add-cart')}>
        <Link to={`/catalog/${props.slug}`}>
          <Button small className={`button-desc`} >
            <span className='title-description'>{'mua hàng'}</span>
          </Button>
        </Link>
      </div>

    </div>
  )
}

ProductCard.propTypes = {
  img01: PropTypes.string.isRequired,
  img02: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  slug: PropTypes.string.isRequired,
}

export default ProductCard