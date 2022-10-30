import { Fragment } from 'react'

export default function Button (props) {
  return (
    <Fragment>
      <div>
        <button
          className={`bg-primary py-2 px-4 rounded-xl
           text-white hover:py-3 hover:px-5 ${props.className}`}
        >
          {props.name}
        </button>
      </div>
    </Fragment>
  )
}
