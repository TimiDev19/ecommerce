import React, { useContext } from 'react';
//import product context
import { ProductContext } from '../contexts/ProductContext';
//components
import Product from '../Components/Product'
import { Link } from 'react-router-dom';

function Home() {
    //get products from product context
    const { products } = useContext(ProductContext);
    //get only men and women's category
    const filteredProducts = products.filter(item => {
        return item.category === "men's clothing" || item.category === "women's clothing"
    })

    return (
        <>
            <section className='py-16'>
                <div className='container mx-auto'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0'>
                        {products.map(product => {
                            return <Product product={product} key={product.id} />
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}

{/* <div className='w-full h-[300px] bg-pink-200' key={product.id}>{product.title}</div> */ }

export default Home
