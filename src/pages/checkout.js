import Header from '@/components/Header'
import { selectItems } from '@/slices/basketSlice'
import React from 'react'
import { useSelector } from 'react-redux'
import Image from 'next/image'


const Checkout = () => {
  const items =useSelector(selectItems)
  return (
    <div className='bg-gray-200'>
    <Header/>
    <main className='lg:flex max-w-screen-2xl mx-auto'> 
    <Image
    alt='image' 
    src='https://links.papareact.com/ikj' width={1020} height={250} objectFit='contain' />

    </main>

    <div>checkout</div>
    </ div>
  )
}

export default Checkout