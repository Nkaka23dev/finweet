import { Fragment } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Button from './Button'

export default function Hero () {
  return (
    <Fragment>
      <section className='max-w-6xl mx-auto bg-[#E0E4FC]'>
        <div className='px-16 py-10'>
          <div className='flex flex-col gap-5 lg:flex-row lg:justify-between lg:items-center'>
            <div className='space-y-3'>
              <img src='/svgs/sv8.svg' />
              <h1 className='text-2xl font-semibold'>High Security to protect<br></br> From Privacy</h1>
              <h4>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h4>
            </div>
            <div className='space-y-3'>
              <img src='/svgs/sv9.svg' />
              <h1 className='text-2xl font-semibold'>Premium quality <br></br> performance</h1>
              <h4>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h4>
            </div>
            <div className='space-y-3'>
              <img src='/svgs/sv10.svg' />
              <h1 className='text-2xl font-semibold'>Full time customer<br></br> support - 24/7</h1>
              <h4>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h4>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  )
}
