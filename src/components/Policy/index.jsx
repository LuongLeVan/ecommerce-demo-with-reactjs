import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import styles from './Policy.module.scss'
const cx = classNames.bind(styles)

const PolicyCard = props => {
  return (
    <div className={cx('policy-cart')}>
        <div className={cx('policy-icon')}>
            <i className={props.icon}></i>
        </div>
        <div className={cx('policy-info')}>
            <div className={cx('policy-name')}>
                {props.name}
            </div>
            <div className={cx('policy-description')}>
                {props.description}
            </div>
        </div>

    </div>
  )
}

PolicyCard.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
}

export default PolicyCard