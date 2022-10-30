import { Fragment } from "react";
import Button from "../components/Button";
import Footer from "../components/Footer";
import InputBtn from "../components/InputBtn";
import NavBar from "../components/Navbar";

export default function Home() {
  return (
   <Fragment>
   <div>
    <NavBar/>
    <hr></hr>
    {/* <Button name="MyButton"/> */}
    <Footer/>
   </div>
   </Fragment>
  )
}