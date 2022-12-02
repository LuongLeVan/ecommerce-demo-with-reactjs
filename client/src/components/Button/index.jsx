import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from './Button.module.scss';

const cx = classNames.bind(styles)

function Button({
    onClick, primary = false, outline = false, to = false, href = false, children, 
    small  = false, large  = false, text = false, passProps,logo=false, disabled = false,rounded = false,   leftIcon, btnIcon,
    rightIcon,description= false, filter = false, descriptionMoblie = false, buy= false, buyTablet = false, cart = false
        }) {
    let Comp = 'button'
    
    const props = {
        onClick,
        ...passProps
    }
    if(disabled){
       Object.keys(props).forEach((key) => {
            if(key.startsWith('on') && typeof props[key] === 'function'){
                delete props[key];
            }
       })
    } 

    if(to){
        props.to = to
        Comp = Link
    }else if(href){
        props.href = href
        Comp = 'a'
    }


    const classes = cx('wrapper', {
        primary,
        outline,
        small,
        large,
        text,
        disabled,
        rounded,
        logo,
        btnIcon,
        description,
        filter,
        descriptionMoblie,
        buy,
        buyTablet,
        cart
    })

    return (  
        <Comp  className={classes} {...props}>
           {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon-right')}>{rightIcon}</span>}
        </Comp>
    );
}

export default Button;
