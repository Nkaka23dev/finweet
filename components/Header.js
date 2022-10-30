import { Fragment } from 'react'
import InputBtn from './InputBtn'
import InputHeader from './InputHeader'

export default function Header (props) {
  return (
    <Fragment>
    <section className='h-full max-w-4xl mx-auto '>
    <div className='flex flex-col gap-10 h-full'>
       <div className='h-1/3 max-w-lg mx-auto space-y-8 mt-5 text-center'>
       <h1 className='text-4xl font-bold'>The best software to grow <br></br>Your sales and services</h1>
        <h4 className='text-gray-800'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit doloribus qui fuga, hic soluta accusamus laborum, ullam eos tempore</h4>
        <InputHeader className="max-w-lg"/>
       </div>
       <div>
        <img src='/svgs/sv7.svg' />
       </div>
    </div>
    </section>
    </Fragment>
  )
}
