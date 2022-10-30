import { Fragment } from 'react'
import Footer from './Footer'
import NavBar from './Navbar'
import SubFooter from './SubFooter'

export default function Layout (props) {
  return (
    <Fragment>
     <NavBar/>
     {props.children}
     <SubFooter/>
     <Footer/>
    </Fragment>
  )
}
