import { Fragment } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import InputBtn from './InputBtn'

export default function Footer (props) {
  return (
    <Fragment>
      <footer className='bg-secondary'>
        <div className='flex flex-col  gap-5 lg:flex-row justify-between px-10 max-w-6xl mx-auto py-10'>
          <div className='flex flex-col gap-3 text-white'>
            <h1 className='text-base font-semibold'>Company</h1>
            {/* Large screen */}
            <ul className='flex flex-col gap-2 text-sm text-zinc-400'>
              <li className='hover:underline transition ease-in-out delay-300 duration-400'>
                <Link href='/'>Home</Link>
              </li>
              <li className='hover:underline'>
                <Link href='/product'>Products</Link>
              </li>
              <li className='hover:underline'>
                <Link href='/pricing'>Pricing</Link>
              </li>
              <li className='hover:underline'>
                <Link href='/about'>About Us</Link>
              </li>
            </ul>
          </div>
          <div className='flex flex-col gap-2 text-white'>
            <h1 className='text-base font-semibold'>Resources</h1>
            {/* Large screen */}
            <ul className='flex flex-col gap-2 text-sm text-zinc-400'>
              <li className='hover:underline transition ease-in-out delay-300 duration-400'>
                <Link href='/'>Private Policy</Link>
              </li>
              <li className='hover:underline'>
                <Link href='/about'>Terms and conditions</Link>
              </li>
              <li className='hover:underline'>
                <Link href='/blog/hello-world'>Blog</Link>
              </li>
              <li className='hover:underline'>
                <Link href='/about'>Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className='flex flex-col gap-2 text-white'>
            <h1 className='text-base font-semibold'>Product</h1>
            {/* Large screen */}
            <ul className='flex flex-col gap-2 text-sm text-zinc-400'>
              <li className='hover:underline transition ease-in-out delay-300 duration-400'>
                <Link href='/'>Product managment</Link>
              </li>
              <li className='hover:underline'>
                <Link href='/about'>Time Tracker</Link>
              </li>
              <li className='hover:underline'>
                <Link href='/blog/hello-world'>Time Schedule</Link>
              </li>
              <li className='hover:underline'>
                <Link href='/about'>Lead generate</Link>
              </li>
              <li className='hover:underline'>
                <Link href='/about'>Remote Collaboration</Link>
              </li>
            </ul>
          </div>
          <div className='flex flex-col gap-7 text-white'>
          <Link href='#'>
              {' '}
              <Image
                src='/svgs/sv2.svg'
                alt='Picture of the author'
                width={120}
                height={120}
              />{' '}
            </Link>
            {/* Large screen */}
           <div className='space-y-2'>
            <h1>Describe Our news paper</h1>
            <InputBtn/>
           </div>
          </div>
        </div> 
        <div className='flex flex-col lg:flex-row justify-between px-10 max-w-6xl mx-auto py-10 items-center text-white'>
         <div className='hidden lg:block  w-1/3 h-[0.2px] bg-white'></div>
         <div className='hidden lg:flex gap-4'>
            <span>&#169;Copyright Finsweet 2022</span>
            <img src='/svgs/sv3.svg' className='w-5'/>
            <img src='/svgs/sv4.svg' className='w-5' />
            <img src='/svgs/sv5.svg' className='w-5' />
            <img src='/svgs/sv6.svg'className='w-5' />
         </div>
         {/* small screen */}
         <div className='lg:hidden flex flex-col gap-2'>
            <span>&#169;Copyright Finsweet 2022</span>
           <div className='flex gap-2 justify-center mt-6'>
            <img src='/svgs/sv3.svg' className='w-8'/>
            <img src='/svgs/sv4.svg' className='w-8' />
            <img src='/svgs/sv5.svg' className='w-8' />
            <img src='/svgs/sv6.svg'className='w-8' />
           </div>
         </div>
         <div className='hidden lg:block w-1/3 h-[0.2px] bg-white'></div>
        </div>
      </footer>
    </Fragment>
  )
}
