import React,{ useState,useEffect } from 'react'

import {useDispatch } from 'react-redux';
import { addToBasket } from '../slices/basketSlice';

function Product({id,title, key,price, description, category, image,}) {
  const MAX_RATING = 5;
  const MIN_RATING = 1;
  const [rating, setRating] = useState(1);

  const [hasPrime, setHasPrime] = useState(true);

  // useEffect(() => {
  //   setRating(
  //     Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  //   );
  //   setHasPrime(Math.random() < 0.5);
  // }, []);

  const dispatch = useDispatch(); 
  const rate=[rating]
  const addItemToBasket = () => {
    const product = {
      id, title, key, price, description, category, image, rating, hasPrime
    };
    // Sending the product as an action to the REDUX store... the basket slice
    dispatch(addToBasket(product));
  }

  return (

    <div className='relative flex-col border-2 rounded-md m-5 bg-white p-10'>
        <p className='absolute top-0 text-xs italic right-3'>{category}</p>
        {key}
        {id}
        

      <img src={image} alt='' className='hwight={200} width={200} objectFit={contain}'/>
      <h1 className='font-bold text-center my-2'>{title}</h1>
      <div className='flex'>
{/* 
      {rate.map((rating) => (
        <StarIcon   className='h-5 text-yellow-500'/>
        ))} */}
        </div>

            <p className='text-xs my-2 text-gray-400 line-clamp-2'>{description}</p>
      <h2>${price}</h2>
        {hasPrime && (
          <div className='flex items-center space-x-2 -mt-5'>
            <img className='w-12' src='https://links.papareact.com/fdw' alt=''/>
            <p className='text-xs text-gray-500'>FREE Next-day Delivery</p>
            </div>
            )}
      <div className='flex justify-center'>
      <button onClick={addItemToBasket} className='flex justify-center bg-yellow-400 p-2 rounded-md'>Buy now</button>
      </div>

    </div>
  )
}

export default Product