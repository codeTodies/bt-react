import React from 'react'
import Banner from './Banner'
import Footer from './Footer'
import Header from './Header'
import ProductList from './ProductList'

function Main() {
  return (
    <div>
        <Header/>
        <Banner/>
        <ProductList/>
        <Footer/>
    </div>
  )
}

export default Main