import React from 'react'
import Product from './Product'

const ProductFeed = ({products}) => {
  return (
    <div  className='grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-54 mx-auto'>
        {products.map(({id, key, title, price, description, category, image})=>(
            <Product
            id={id}
            key={key}
            title={title}
            price={price}
            description={description}
            category={category}
            image={image}
            />
        ))}


        
    </div>
  )
}

export default ProductFeed 

