import React, { useState, useEffect, useCallback } from 'react'
import PropTypes from 'prop-types'
import  './HeroSlide.scss'
import Button from '../Button'


const HeroSlider = (props) => {

    const {data, isDarkMode} = props

    const timeOut = props.timeOut ? props.timeOut : 3000

    const [activeSlide, setActiveSlide] = useState(0);

    const nextSlide = useCallback(
        () => {
            const index = activeSlide + 1 === data.length ? 0 : activeSlide + 1
            setActiveSlide(index)
        },
        [activeSlide, data],
    )

    const prevSlide = () => {
        const index = activeSlide - 1 < 0 ? data.length - 1 : activeSlide - 1
        setActiveSlide(index)
    }

    useEffect(() => {
        if (props.auto) {
            const slideAuto = setInterval(() => {
                nextSlide()
            }, timeOut);
            return () => {
                clearInterval(slideAuto)
            }
        }
    }, [nextSlide, timeOut, props])

    return (
        <div className="hero-slider dark">
            {
                data.map((item, index) => (
                    <HeroSliderItem isDarkMode={isDarkMode} key={index} item={item} active={index === activeSlide}/>
                ))
            }
            {
                props.control ? (
                    <div className={'slide-control'}>
                        <div className="hero-item" onClick={prevSlide}>
                            <i className={`bx bx-chevron-left prev-icon`}></i>
                        </div>
                        <div className="hero-item">
                            <div className="index">
                                {activeSlide + 1}/{data.length}
                            </div>
                        </div>
                        <div className="hero-item" onClick={nextSlide}>
                            <i className="bx bx-chevron-right next-icon"></i>
                        </div>
                    </div>
                ) : null
            }
        </div>
    )
}
HeroSlider.propTypes = {
    data: PropTypes.array.isRequired,
    control: PropTypes.bool,
    auto: PropTypes.bool,
    timeOut: PropTypes.number
}


const HeroSliderItem = props => (
   

    <div className={`hero-slider-item ${props.active ? 'active' : ''}`}>
        <div className={'hero-info'}>
            <div className={`hero-title color-${props.item.color}`}>
                <span>{props.item.title}</span>
            </div>
            <div className={props.isDarkMode ?  'hero-description dark' : 'hero-description'}>
                <span>{props.item.description}</span>
            </div>
            <div className={`hero-btn`}>
                <span className={`container-button bg-${props.item.color}`}>
                    
                    <Button  description  className={`button-desc btn-pc` } to={props.item.path}>
                        {<i className=" icon-cart bx bx-cart"> </i>}
                            <span className='title-description'>Xem chi tiết</span>
                    </Button>

                  
                </span>
            </div>
        </div>
        <div className={`shape bg-${props.item.color}`}></div>
        <div className="hero-image">
            <img className={'image-slide_item'} src={props.item.img} alt="avatar"/>
        </div>
    </div>
)

export default HeroSlider
