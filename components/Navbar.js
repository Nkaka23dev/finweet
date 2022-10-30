import { Fragment } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Button from './Button'

export default function NavBar () {
  return (
    <Fragment>
      <nav className='px-10  max-w-6xl mx-auto'>
        <div className='flex flex-col gap-5 lg:flex-row lg:justify-between lg:items-center lg:h-20'>
          <div className='flex justify-between py-10'>
            <Link href='/'>
              {' '}
              <Image
                src='/svgs/sv1.svg'
                alt='Picture of the author'
                width={120}
                height={120}
              />{' '}
            </Link>
            {/* menu Button for small screen */}
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-6 h-6 transition ease-in-out delay-300 duration-400 lg:hidden cursor-pointer hover:w-7 hover:h-7'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
              />
            </svg>
          </div>
          {/* Large screen */}
          <ul className='hidden lg:flex gap-10 items-center '>
            <li className='hover:underline hover:text-lg transition ease-in-out delay-300 duration-400'>
              <Link href='/'>Home</Link>
            </li>
            <li className='hover:underline hover:text-lg'>
              <Link href='/product'>Products</Link>
            </li>
            <li className='hover:underline hover:text-lg'>
              <Link href='/blog/hello-world'>Pricing</Link>
            </li>
            <li className='hover:underline hover:text-lg'>
              <Link href='/about'>About Us</Link>
            </li>
            <li className='hover:underline hover:text-lg'>
              <Link href='/'>Blog</Link>
            </li>
            <li className='hover:underline hover:text-lg'>
              <Link href='/blog/hello-world'>Contact</Link>
            </li>
            <Button name='Free Trial' />
          </ul>
          {/* Small Screen */}
          <ul className='lg:hidden flex flex-col gap-5 items-center'>
            <li className='hover:underline hover:text-lg'>
              <Link href='/'>Home</Link>
            </li>
            <li className='hover:underline hover:text-lg'>
              <Link href='/about'>Products</Link>
            </li>
            <li className='hover:underline hover:text-lg'>
              <Link href='/blog/hello-world'>Pricing</Link>
            </li>
            <li className='hover:underline hover:text-lg'>
              <Link href='/about'>About Us</Link>
            </li>
            <li className='hover:underline hover:text-lg'>
              <Link href='/'>Blog</Link>
            </li>
            <li className='hover:underline hover:text-lg'>
              <Link href='/blog/hello-world'>Contact</Link>
            </li>
            <Button name='Free Trial' />
          </ul>
          {/* End of mobile menu */}
        </div>
      </nav>
    </Fragment>
  )
}
