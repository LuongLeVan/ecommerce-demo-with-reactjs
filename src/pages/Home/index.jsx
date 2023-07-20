import React from 'react';
import classNames from 'classnames/bind';
import style from './Home.module.scss';
import { Link } from 'react-router-dom';

import Footer from 'src/components/Footer';
import Helmet from 'src/components/Helmet';
import HeroSlide from 'src/components/HeroSlide';
import heroSliderData from 'src/assets/fake-data/hero-slider';
import policy from 'src/assets/fake-data/policy';
import PolicyCard from 'src/components/Policy';
import Grid from 'src/components/Grid';
import Section, { SectionBody, SectionTitle } from 'src/components/Section';
import ProductCard from 'src/components/ProductCard/ProductCard';
import productData from 'src/assets/fake-data/products';
import Banner from 'src/assets/images/banner.png';
import Header from 'src/components/Header';
import { useContext } from 'react';
import { CartContext } from 'src/Contexts/CartContext';
const cx = classNames.bind(style);


function Home() {
    const {cart, user, isDarkMode, setIsDarkMode} = useContext(CartContext);
    const userInfo = user;
    return (
        <div className={isDarkMode ? 'dark' : ''}>
            <Helmet title="Trang chủ" className={cx('container')}>
                  <Header cart = {cart} userInfo={userInfo} isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
                <div className={cx('container-home') }>
                    {/* Slide begin */}
                    <HeroSlide data={heroSliderData} control={true} auto={true} isDarkMode={isDarkMode}/>
                    {/* Slide end */}
                </div>
                {/* Section begin */}
                <Section>
                    <SectionBody>
                        <Grid col={4} mdCol={2} smCol={1} gap={20}>
                            {policy.map((item, index) => (
                                <Link key={index} to="/policy">
                                    <PolicyCard
                                        key={index}
                                        name={item.name}
                                        icon={item.icon}
                                        description={item.description}
                                    />
                                </Link>
                            ))}
                        </Grid>
                    </SectionBody>
                </Section>
                {/* Section end */}
                {/* Product Begin */}
                <Section>
                    <SectionTitle>Top Sản phẩm Bán Chạy Trong Tuần</SectionTitle>
                    <SectionBody>
                        <Grid col={4} mdCol={2} smCol={1} gap={20}>
                            {productData.getProducts(4).map((item, index) => (
                                <ProductCard
                                    key={index}
                                    img01={item.image01}
                                    img02={item.image02}
                                    name={item.title}
                                    price={Number(item.price)}
                                    slug={item.slug}
                                    isDarkMode={isDarkMode}
                                />
                            ))}
                        </Grid>
                    </SectionBody>
                </Section>
                {/* Product End */}
                <Section>
                    <SectionTitle>Sản phẩm mới</SectionTitle>
                    <SectionBody>
                        <Grid col={4} mdCol={2} smCol={1} gap={20}>
                            {productData.getProducts(8).map((item, index) => (
                                <ProductCard
                                    key={index}
                                    img01={item.image01}
                                    img02={item.image02}
                                    name={item.title}
                                    price={Number(item.price)}
                                    slug={item.slug}
                                    isDarkMode={isDarkMode}

                                />
                            ))}
                        </Grid>
                    </SectionBody>
                </Section>
                {/* Banner begin */}
                <Section>
                    <SectionBody>
                        <Link to="/catalog">
                            <img src={Banner} alt="" />
                        </Link>
                    </SectionBody>
                </Section>
                {/* Banner end */}
                {/* All Product begin */}
                <Section>
                    <SectionTitle>Tất cả sản phẩm</SectionTitle>
                    <SectionBody>
                        <Grid col={4} mdCol={2} smCol={1} gap={20}>
                            {productData.getAllProducts().map((item, index) => (
                                <ProductCard
                                    key={index}
                                    img01={item.image01}
                                    img02={item.image02}
                                    name={item.title}
                                    price={Number(item.price)}
                                    slug={item.slug}
                                    isDarkMode={isDarkMode}

                                />
                            ))}
                        </Grid>
                    </SectionBody>
                    {/* All Product end */}
                </Section>
                <Footer />
            </Helmet>
        </div>
    );
}
export default Home;
