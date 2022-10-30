import { Fragment } from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Hero1 from '../components/Hero1'
import SubFooter from '../components/SubFooter'

export default function Home () {
  return (
    <Fragment>
      <div>
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
              <h4>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                <br></br>
                For situations where the user has specified that they<br></br>{' '}
                prefer reduced motion.
              </h4>
            </div>
            <div className='flex flex-col gap-5 w-full'>
              <div className='flex gap-4'>
                <img src='/svg2/sv1.svg' />
                <h4>
                  {' '}
                  For situations where the user has specified that they<br></br>{' '}
                  prefer reduced motion.
                </h4>
              </div>
              <div className='flex gap-4'>
                <img src='/svg2/sv1.svg' />
                <h4>
                  {' '}
                  For situations where the user has specified that they<br></br>{' '}
                  prefer reduced motion.
                </h4>
              </div>
              <div className='flex gap-4'>
                <img src='/svg2/sv1.svg' />
                <h4>
                  {' '}
                  For situations where the user has specified that they<br></br>{' '}
                  prefer reduced motion.
                </h4>
              </div>
            </div>
          </div>
        </section>
        <Hero1 />
        {/* Next Section */}
        <section className='max-w-5xl mx-auto flex flex-col lg:flex-row gap-10 py-20'>
          <img src='/svg2/sv3.svg' className='h-10  ' />
          <img src='/svg2/sv4.svg' className='h-10 ' />
          <img src='/svg2/sv5.svg' className='h-10 ' />
          <img src='/svg2/sv6.svg' className='h-10 ' />
          <img src='/svg2/sv7.svg' className='h-10 ' />
        </section>

        {/* Next section  */}
        <section className='max-w-6xl mx-auto px-10 py-16'>
          <div className='flex px-10 lg:px-0 flex-col gap-5 lg:flex-row lg:justify-between'>
            <div className='space-y-3  w-full'>
              <h4 className='text-lg font-semibold'>
                <span
                  className='bg-gradient-to-r from-blue-700 to-blue-300 text-transparent
        bg-clip-text'
                >
                  Discover More
                </span>
              </h4>
              <h1 className='text-3xl font-bold'>
                Analyse your sales and <br></br> Market lead
              </h1>
              <h4>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                <br></br>
                For situations where the user has specified that they<br></br>{' '}
                prefer reduced motion.
              </h4>
            </div>
            <div className='flex flex-col gap-5 w-full'>
              <div className='flex gap-4'>
                <img src='/svg2/sv8.svg' />
                <h4>
                  {' '}
                  For situations where the user has specified that they<br></br>{' '}
                  prefer reduced motion.
                </h4>
              </div>
              <div className='flex gap-4'>
                <img src='/svg2/sv9.svg' />
                <h4>
                  {' '}
                  For situations where the user has specified that they<br></br>{' '}
                  prefer reduced motion.
                </h4>
              </div>
              <div className='flex gap-4'>
                <img src='/svg2/sv10.svg' />
                <h4>
                  {' '}
                  For situations where the user has specified that they<br></br>{' '}
                  prefer reduced motion.
                </h4>
              </div>
            </div>
          </div>
        </section>
        <div className='h-1/3 max-w-lg mx-auto space-y-5 mt-5 text-center'>
          <h1 className='text-3xl font-semibold'>Features</h1>
        </div>
        <section className='max-w-6xl mx-auto bg-ColorPink mt-10'>
          <div className='px-16 py-10'>
            <div className='flex flex-col gap-5 lg:flex-row lg:justify-between lg:items-center'>
              <div className='space-y-3'>
                <img src='/svg2/sv11.svg' />
                <h1 className='text-2xl font-semibold'>
                  High Security to protect<br></br> From Privacy
                </h1>
                <h4>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </h4>
              </div>
              <div className='space-y-3'>
                <img src='/svg2/sv12.svg' />
                <h1 className='text-2xl font-semibold'>
                  Simple collaboration tools <br></br> performance
                </h1>
                <h4>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </h4>
              </div>
              <div className='space-y-3'>
                <img src='/svg2/sv13.svg' />
                <h1 className='text-2xl font-semibold'>
                  Full time customer<br></br> support - 24/7
                </h1>
                <h4>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </h4>
              </div>
            </div>
          </div>
        </section>
        <section className='h-full max-w-4xl mx-auto py-10'>
          <div className='flex flex-col gap-10 h-full'>
            <div className='h-1/3 max-w-lg mx-auto space-y-5 mt-5 text-center'>
              <h1 className='text-3xl font-semibold'>
                The stunning results our<br></br>Customers have experienced
              </h1>
            </div>
          </div>
        </section>
        <section className='max-w-6xl mx-auto'>
          <div className='px-16 py-10'>
            <div className='flex flex-col gap-5 lg:flex-row lg:justify-between lg:items-center'>
              <div className='space-y-3 grid border-4 w-full lg:w-1/3 px-10 py-5'>
                <h1 className='text-base text-center'>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. For
                  situations where the user has specified that they prefer
                  reduced motion.
                </h1>
                <div className='mx-auto'>
                  <img src='/svg2/sv14.svg' />
                  <p>Ben WOlf</p>
                  <p className='text-center'>CEO</p>
                </div>
              </div>

              <div className='space-y-3 grid border-4 w-full lg:w-1/3 px-10 py-5'>
                <h1 className='text-base text-center'>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. For
                  situations where the user has specified that they prefer
                  reduced motion.
                </h1>
                <div className='mx-auto'>
                  <img src='/svg2/sv15.svg' />
                  <p>Ben WOlf</p>
                  <p className='text-center'>CEO</p>
                </div>
              </div>

              <div className='space-y-3 grid border-4 w-full lg:w-1/3 px-10 py-5'>
                <h1 className='text-base text-center'>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. For
                  situations where the user has specified that they prefer
                  reduced motion.
                </h1>
                <div className='mx-auto'>
                  <img src='/svg2/sv16.svg' />
                  <p>Ben WOlf</p>
                  <p className='text-center'>CEO</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Fragment>
  )
}
