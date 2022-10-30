import { Fragment } from 'react'
import Footer from './Footer'
import NavBar from './Navbar'

export default function Layout (props) {
  return (
    <Fragment>
     <NavBar/>
     {props.children}
     <Footer/>
    </Fragment>
  )
}
