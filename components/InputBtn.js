import { Fragment } from 'react'
import Button from './Button'

export default function InputBtn (props) {
  return (
    <Fragment>
      <div className='flex max-w-4xl mx-auto relative'>
        <input
          class=' hover:outline-none focus:ring-0 focus:ring-#2B2E3C bg-gray-500
               h-5 w-full mx-auto px-3 py-5 mt-2 rounded-md'
          type='text'
          placeholder='Enter Your Email'
        />
        <Button className="py-2 px-3 bg-white text-black absolute top-2 -right-7 rounded-md hover:py-2 hover:px-2 " name="Subscribe"/>
      </div>
    </Fragment>
  )
}
