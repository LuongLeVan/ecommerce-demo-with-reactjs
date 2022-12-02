import React,  { useRef } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import style from './Checkbox.module.scss'

const cx = classNames.bind(style)

const Checkbox = props => {

   const inputRef = useRef(null)

   const onChange = () => {
    if(props.onChange){
        props.onChange(inputRef.current)
    }
   }

  return (
    <label className={cx('checkbox')}>
        <input type="checkbox" ref={inputRef} checked={props.checked} onChange={onChange} />
        <span className={cx('custom__Checkmark')}>
            <i className='bx bx-check'></i>
            {props.label}
        </span>
    </label>
  )
}

Checkbox.propTypes = {
    label: PropTypes.string.isRequired,
    checked: PropTypes.bool

}

export default Checkbox