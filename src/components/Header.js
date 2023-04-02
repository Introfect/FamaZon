import React from 'react'
import Image from 'next/image'
import { SearchIcon, MenuIcon, ShoppingCartIcon } from '@heroicons/react/outline'
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { selectItems } from '@/slices/basketSlice'

const Header = () => {
  const { data: session } = useSession()
  const router = useRouter()
  const items=useSelector(selectItems)
  return (
    <header>
        <div className='flex bg-amazon_blue p-2 flex-grow sm:flex-grow-0 py-2'>
            <div className='m-2 flex item-center flex-grow sm:flex-grow-0'>
                <Image
                onClick={()=>router.push('/')}
                src='http://links.papareact.com/f90'
                width={100}
                height={40}
                alt='imagge'
                style={{objectFit:"cover"}}
                className='cursor-pointer'
                />
            </div>
            <div className='hidden sm:flex flex-grow h-fit items-center bg-yellow-400 rounded-md hover:bg-yellow-600'>
                <input type='text' className='p-2 m-0 w-6 rounded-md flex-grow flex-shrink cursor-pointer '/>
                <SearchIcon className='h-10 p-2' />
            </div>
            <div className='text-white flex items-center text-xs space-x-6 mx-6'>
              <div className='link'>
                <p onClick={session?signOut:signIn}className='font-extrabold md:text-xs'>
                  {session?`Sign Out`: `Sign In`}
                </p>
                {session?`Hello, ${session.user.name}`: `Account`}
                <p></p>
              </div>
              <div className='link'>
              <p>Returns</p>
                <p className='font-extrabold md:text-xs'>Orders</p>
              </div>
              <div onClick={()=>{router.push('/checkout')}} className='flex items-center link relative '>
                <span className='absolute top-0 right-0 bg-yellow-400 h-4 w-4 rounded-full text-center font-bold text-black md:right-6'>{items.length}</span>
                <ShoppingCartIcon className='h-10'/>
                <p className='hidden md:inline font-extrabold md:text-xs'>Cart</p>

              </div>
            </div>
        </div>
        <div className='flex p-2 bg-amazon_blue-light text-white text-xs space-x-3 items-center'>
          <p className='flex items-center'>
            <MenuIcon className='h-6 mr-2'/> All
          </p>
          <p className='link'>Prime Video</p>
          <p className='link'>Amazon Buisness</p>
          <p className='link'>Today&aposs Deal</p>
          <p className='hidden lg:inline-flex link'>Electronics</p>
          <p className='hidden lg:inline-flex link'>Food & Grocery </p>
          <p className='hidden lg:inline-flex link'>Prime</p>
          <p className='hidden lg:inline-flex link'>Buy again</p>
          <p className='hidden lg:inline-flex link'>Shopper Toolkit</p>
          <p className='hidden lg:inline-flex link'>Health & Personal Care</p>
        </div>
    </header>
  )
}

export default Header