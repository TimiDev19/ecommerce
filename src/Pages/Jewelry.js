import React, { useContext } from 'react';
//import product context
import { ProductContext } from '../contexts/ProductContext';
//components
import Product from '../Components/Product'
import { Link } from 'react-router-dom';

function Jewelry() {
    //get products from product context
    const { products } = useContext(ProductContext);
    //get only men and women's category
    const filteredProducts = products.filter(item => {
        return item.category === "jewelery"
        // item.category === "men's clothing"

    })

    return (
        <>
            <div class='w-full flex items-center justify-center py-3 shadow-sm shadow-gray-500'>
                <ul class='w-full md:w-1/2 m-auto flex flex-wrap items-center justify-between'>
                <a href='/'><li class='w-full md:w-auto hover:bg-blue-100 duration-300 transition rounded-xl px-2 mb-2 md:mb-0'>All</li></a>
                <a href='/mensclothing'><li class='w-full md:w-auto hover:bg-blue-100 duration-300 transition rounded-xl px-2 mb-2 md:mb-0'>Men's Clothing</li></a>
                <a href='/womensclothing'><li class='w-full md:w-auto hover:bg-blue-100 duration-300 transition rounded-xl px-2 mb-2 md:mb-0'>Women's Clothing</li></a>
                <a href='/jewelry'><li class='w-full md:w-auto bg-blue-100 px-2 rounded-xl mb-2 md:mb-0'>Jewelry</li></a>
                <a href='/electronics'><li class='w-full md:w-auto hover:bg-blue-100 duration-300 transition rounded-xl px-2 mb-2 md:mb-0'>Electronics</li></a>
                </ul>
            </div>

            <section className='py-16'>
                <div className='container mx-auto'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0'>
                        {filteredProducts.map(product => {
                            return <Product product={product} key={product.id} />
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Jewelry
