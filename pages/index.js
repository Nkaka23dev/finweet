import { Fragment } from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import NavBar from '../components/Navbar'

export default function Home () {
  return (
    <Fragment>
      <div>
        <NavBar />
        <Header />
        <section className='h-full max-w-4xl mx-auto py-10'>
          <div className='flex flex-col gap-10 h-full'>
            <div className='h-1/3 max-w-lg mx-auto space-y-5 mt-5 text-center'>
              <h4 className='text-lg font-semibold'>
                <span
                  className='bg-gradient-to-r from-blue-700 to-blue-300 text-transparent
        bg-clip-text'
                >
                  High Quality
                </span>
              </h4>
              <h1 className='text-3xl font-semibold'>
                We have the best solution<br></br>For your business
              </h1>
            </div>
          </div>
        </section>
        <hr></hr>
        <Hero />
        <section className='max-w-6xl mx-auto px-10 py-16'>
          <div className='flex px-10 lg:px-0 flex-col gap-5 lg:flex-row lg:justify-between'>
            <div className='space-y-3  w-full'>
            <h4 className='text-lg font-semibold'>
                <span
                  className='bg-gradient-to-r from-blue-700 to-blue-300 text-transparent
        bg-clip-text'
                >
                  Why would you work with us?
                </span>
              </h4>
              <h1 className='text-3xl font-bold'>
                High Security to protect<br></br> From Privacy
              </h1>
              <h4>Lorem, ipsum dolor sit amet consectetur adipisicing elit.<br></br>
              For situations where the user has specified that they<br></br> prefer reduced motion.
              </h4>
            </div>
             <div className='flex flex-col gap-5 w-full'>
              <div className='flex gap-4'>
              <img src='/svg2/sv1.svg' />
              <h4>  For situations where the user has specified that they<br></br> prefer reduced motion.</h4>
              </div>
              <div className='flex gap-4'>
              <img src='/svg2/sv1.svg' />
              <h4>  For situations where the user has specified that they<br></br> prefer reduced motion.</h4>
              </div>
              <div className='flex gap-4'>
              <img src='/svg2/sv1.svg' />
              <h4>  For situations where the user has specified that they<br></br> prefer reduced motion.</h4>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Fragment>
  )
}
