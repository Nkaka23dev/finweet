import { Fragment } from 'react'
import Button from './Button'

export default function Hero1 (props) {
  return (
    <Fragment>
      <section className='py-16 bg-gradient-to-r from-green-100 to-blue-200'>
        <div className='max-w-6xl mx-auto px-10'>
          <div className='flex px-10 lg:px-0 flex-col gap-5 lg:flex-row lg:justify-between'>
            <div className='space-y-4 my-auto w-full'>
              <h1 className='text-3xl font-bold'>
                High Security to protect<br></br> From Privacy
              </h1>
              <h4>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                <br></br>
                For situations where the user has specified that they<br></br>{' '}
                prefer reduced motion.
              </h4>
              <Button name="Get free trial" className="mt-6" />
            </div>
            <div className='flex flex-col gap-5 w-full'>
             <img src='/svg2/sv2.svg' />
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  )
}
