import React from 'react'
import classNames from 'classnames/bind'
import style from './Product.module.scss'

import productData from 'src/assets/fake-data/products'
import ProductCard from 'src/components/ProductCard/ProductCard'
import Footer from 'src/components/Footer'
import Helmet from 'src/components/Helmet'
import Section, { SectionBody, SectionTitle } from 'src/components/Section'
import ViewProduct from 'src/components/ViewProduct/ViewProduct'
import { useContext } from 'react'
import { CartConntext } from 'src/Contexts/CartContext'

const cx = classNames.bind(style)


const Product = props => {
    const {user} =useContext(CartConntext)
    const userInfo = user

    const product = productData.getProductBySlug(props.match.params.slug)
    const relatedProducts = productData.getProducts(8)

    React.useEffect(() => {
        window.scrollTo(0, 0)
    }, [product])
    return (

        <Helmet title={product.title}>
            <div className={cx('container')}>
                <Section>
                    <SectionBody>
                       <ViewProduct product={product} userInfo={userInfo}/>
                    </SectionBody>
                </Section>
                <Section>
                    <SectionTitle>
                        Khám phá thêm
                    </SectionTitle>
                    <SectionBody>
                        <div className='grid wide'>
                            <div className="row">
                                <div className="l-12 m-12 c-12">
                                    <div className='row'>
                                        {
                                            relatedProducts.map((item, index) => (
                                                <div className="l-3 m-6 c-12" key={index}>
                                                    <ProductCard
                                                        img01={item.image01}
                                                        img02={item.image02}
                                                        name={item.title}
                                                        price={Number(item.price)}
                                                        slug={item.slug}
                                                    />
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>

                        </div>

                    </SectionBody>
                </Section>
            </div>
            <Footer />
        </Helmet>
    )
}

export default Product
