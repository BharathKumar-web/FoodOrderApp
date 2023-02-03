
import React,{useEffect,useState} from 'react'
 import AppRouter from "./Routes/AppRouter";
 import AuthRouter from "./Routes/AuthRouter";


 const App = () => {
const[open,setOpen]=useState(false)
// useEffect(() => {
//  getAuth()
// }, [])

// const getAuth = () =>{

//   console.log('vool')
//   setOpen(!open)
// }

const abc = {abv : 'hao'}


   return (
     <>
       {open &&  <AppRouter abc = {abc}/>} 
       {!open &&  <AuthRouter/>}

     </>


   )
 }
 export default App;
