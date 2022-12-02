import React from 'react'
import { useContext } from 'react';
import { useState, useCallback, useEffect } from 'react';
import { CartConntext } from 'src/Contexts/CartContext';


import Helmet from 'src/components/Helmet';
import ProductCard from 'src/components/ProductCard/ProductCard';
import productData from 'src/assets/fake-data/products';
import category from 'src/assets/fake-data/category';
import Checkbox from 'src/components/Checkbox/Checkbox';
import size from 'src/assets/fake-data/product-size';
import colors from 'src/assets/fake-data/product-color';
import Footer from 'src/components/Footer';
import Button from 'src/components/Button';
import Header from 'src/components/Header';
import './Catalog.scss';

const Catalog = () => {
  const initFilter = {
    category: [],
    color: [],
    size: []
  }

  const productList = productData.getAllProducts()

  const [products, setProducts] = useState(productList)

  const [filter, setFilter] = useState(initFilter)





  const filterSelect = (type, checked, item) => {
    if (checked) {
      switch (type) {
        case "CATEGORY":
          setFilter({ ...filter, category: [...filter.category, item.categorySlug] })
          break
        case "COLOR":
          setFilter({ ...filter, color: [...filter.color, item.color] })
          break
        case "SIZE":
          setFilter({ ...filter, size: [...filter.size, item.size] })
          break
        default:
      }
    } else {
      switch (type) {
        case "CATEGORY":
          const newCategory = filter.category.filter(e => e !== item.categorySlug)
          setFilter({ ...filter, category: newCategory })
          break
        case "COLOR":
          const newColor = filter.color.filter(e => e !== item.color)
          setFilter({ ...filter, color: newColor })
          break
        case "SIZE":
          const newSize = filter.size.filter(e => e !== item.size)
          setFilter({ ...filter, size: newSize })
          break
        default:
      }
    }
  }

  const updateProducts = useCallback(
    () => {
      let temp = productList

      if (filter.category.length > 0) {
        temp = temp.filter(e => filter.category.includes(e.categorySlug))
      }

      if (filter.color.length > 0) {
        temp = temp.filter(e => {
          const check = e.colors.find(color => filter.color.includes(color))
          return check !== undefined
        })
      }

      if (filter.size.length > 0) {
        temp = temp.filter(e => {
          const check = e.size.find(size => filter.size.includes(size))
          return check !== undefined
        })
      }

      setProducts(temp)
    },
    [filter, productList],
  )

  useEffect(() => {
    updateProducts()
  }, [updateProducts])

  const clearFilter = () => setFilter(initFilter)
  const {cart, user} = useContext(CartConntext)
  const userInfo = user

  return (
    <Helmet title='Sản phẩm' className={('container')}>
            <Header cart = {cart}  userInfo = {userInfo}/>
        <div className={('catalog')}>

          <div className='grid wide'>
            <div className='overlay'></div>
            <div className='row'>
              <div className='l-3 m-0 c-0'>
                <div className={('catalog__filter')}>
                  <div className={('catalog__widget')}>
                    <div className={('catalog__title')}>danh mục sản phẩm</div>
                  </div>
                  <div className={('catalog__content-filter')}>
                    {
                      category.map((item, index) => (
                        <div className={('catalog__item')} key={index}>
                          <Checkbox className={('label')}
                            label={item.display}
                            onChange={(input) => filterSelect("CATEGORY", input.checked, item)}
                            checked={filter.category.includes(item.categorySlug)}
                          />
                        </div>
                      ))
                    }
                  </div>


                  <div className={('catalog__widget')}>
                    <div className={('catalog__title')}>màu sắc</div>
                  </div>
                  <div className={('catalog__content-filter')}>
                    {
                      colors.map((item, index) => (
                        <div className={('catalog__item')} key={index}>
                          <Checkbox
                            label={item.display}
                            onChange={(input) => filterSelect("COLOR", input.checked, item)}
                            checked={filter.color.includes(item.color)}
                          />
                        </div>
                      ))
                    }
                  </div>

                  <div className={('catalog__widget')}>
                    <div className={('catalog__title')}>kích cỡ</div>
                  </div>
                  <div className={('catalog__content-filter')}>
                    {
                      size.map((item, index) => (
                        <div className={('catalog__item')} key={index}>
                          <Checkbox
                            label={item.display}
                            onChange={(input) => filterSelect("SIZE", input.checked, item)}
                            checked={filter.size.includes(item.size)}
                          />
                        </div>
                      ))
                    }
                  </div>

                  <div className={('catalog__filter__widget')}>
                    <div className={('widget__content')}>
                      <Button filter onClick={clearFilter}>Xóa bộ lọc</Button>
                    </div>
                  </div>



                </div>

              </div>
              <div className='l-0 m-2 c-2'>
                <input hidden type="checkbox" id='btn__category-show' />
                <div></div>
                <label htmlFor="btn__category-show">
                  <span className='btn-show__category'>Bộ lọc</span>
                </label>
                {/*Tablet category filter  */}
                <div className={('catalog__filter__tablet')}>
                  <label htmlFor="btn__category-show" className={('btn-close')}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" /></svg>
                  </label>
                  <div className={('catalog__widget__tablet')}>
                    <div className={('catalog__title__tablet')}>danh mục sản phẩm</div>
                  </div>
                  <div className={('catalog__content-filter__tablet')}>
                    {
                      category.map((item, index) => (
                        <div className={('catalog__item__tablet')} key={index}>
                          <Checkbox className={('label__tablet')}
                            label={item.display}
                            onChange={(input) => filterSelect("CATEGORY", input.checked, item)}
                            checked={filter.category.includes(item.categorySlug)}
                          />
                        </div>
                      ))
                    }
                  </div>


                  <div className={('catalog__widget__tablet')}>
                    <div className={('catalog__title__tablet')}>màu sắc</div>
                  </div>
                  <div className={('catalog__content-filter__tablet')}>
                    {
                      colors.map((item, index) => (
                        <div className={('catalog__item__tablet')} key={index}>
                          <Checkbox
                            label={item.display}
                            onChange={(input) => filterSelect("COLOR", input.checked, item)}
                            checked={filter.color.includes(item.color)}
                          />
                        </div>
                      ))
                    }
                  </div>

                  <div className={('catalog__widget__tablet')}>
                    <div className={('catalog__title__tablet')}>kích cỡ</div>
                  </div>
                  <div className={('catalog__content-filter__tablet')}>
                    {
                      size.map((item, index) => (
                        <div className={('catalog__item__tablet')} key={index}>
                          <Checkbox
                            label={item.display}
                            onChange={(input) => filterSelect("SIZE", input.checked, item)}
                            checked={filter.size.includes(item.size)}
                          />
                        </div>
                      ))
                    }
                  </div>

                  <div className={('catalog__filter__widget__tablet')}>
                    <div className={('widget__content__tablet')}>
                      <Button filter onClick={clearFilter}>Xóa bộ lọc</Button>
                    </div>
                  </div>



                </div>
              </div>

              <div className='l-9 m-10 c-10'>
                <div className="row no-gutters">
                  {products.map((item, index) => (
                    <div className='l-4 m-6 c-12 c-0-4' key={index}>
                      <ProductCard
                        key={index}
                        name={item.title}
                        img01={item.image01}
                        img02={item.image02}
                        price={Number(item.price)}
                        slug={item.slug}
                      />
                    </div>
                  ))}

                </div>
              </div>
            </div>





          </div>

        </div>

        <Footer />
      </Helmet>
  )
}

export default Catalog