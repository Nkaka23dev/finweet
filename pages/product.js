import { Fragment } from 'react'
import Button from '../components/Button'
import InputHeader from '../components/InputHeader'


export default function Home () {
  return (
    <Fragment>
      {/* Next Section */}
      <section className='h-full max-w-4xl mx-auto py-10'>
    <div className='flex flex-col lg:flex-row gap-10 h-full'>
       <div className='h-1/3 max-w-lg mx-auto space-y-8 mt-5 text-center lg:text-start'>
       <h1 className='text-4xl font-bold'>Grow Your sales and <br></br>Services</h1>
        <h4 className='text-gray-800'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit doloribus qui fuga, hic soluta accusamus laborum, ullam eos tempore</h4>
        <div className='flex gap-5 justify-center lg:justify-start'>
          <Button name="Get Started"/>
          <Button name="Contact Us"/>
        </div>
       </div>
       <div>
        <img src='/svgs/sv7.svg' />
       </div>
    </div>
    </section>
      <section className='max-w-5xl mx-auto flex flex-col lg:flex-row gap-10 py-20'>
        <img src='/svg2/sv3.svg' className='h-10  ' />
        <img src='/svg2/sv4.svg' className='h-10 ' />
        <img src='/svg2/sv5.svg' className='h-10 ' />
        <img src='/svg2/sv6.svg' className='h-10 ' />
        <img src='/svg2/sv7.svg' className='h-10 ' />
      </section>
    
      {/* Next section  */}
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
    </Fragment>
  )
}
