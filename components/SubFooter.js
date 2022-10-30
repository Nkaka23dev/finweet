import { Fragment } from 'react'
import Button from './Button'

export default function SubFooter (props) {
  return (
    <Fragment>
     <section className='bg-gradient-to-t from-green-50 to-white py-20 relative'>
     <div className='max-w-5xl mx-auto flex'>
      <div className='m-auto'>
      <h1 className='text-center text-3xl font-bold
      '>Are you ready to grow your <br></br> business with us?</h1>
      <h1 className='text-center mt-2 mb-5'>Are you ready to grow your business with us?</h1>
       <Button name="view pricing" className="absolute right-1/2 translate-x-1/2"/>
      </div>
     </div>
     </section>
    </Fragment>
  )
}
