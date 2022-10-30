import { Fragment } from 'react'
import Button from './Button'

export default function InputHeader (props) {
  return (
    <Fragment>
      <div className='w-full mx-auto relative'>
        <input
          className={
            `hover:outline-none focus:ring-0 focus:ring-#2B2E3C bg-white
            h-5 w-full mx-auto px-3 py-5 mt-2 rounded-md ${props.className}`
          }
          type='text'
          placeholder='Enter Your Email'
        />
        <Button className="py-2 px-3 bg-black text-white absolute top-2 right-0 rounded-md hover:py-2 hover:px-2 " name="Subscribe"/>
      </div>
    </Fragment>
  )
}
