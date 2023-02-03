import {BrowserRouter,Route,Routes} from 'react-router-dom'
import FoodOrderAppBar from '../food-order/FoodOrderAppBar'
import FoodOrder from '../food-order/FoodOrder'
import Admin from '../auth/Admin'



const AppRouter=({abc})=>


{

  // const getAuthD = () => {
  //   getAuth()
  // }



    return(
        <BrowserRouter>
        <FoodOrderAppBar abc ={abc} />
        
        <Routes>
        <Route path="/foodOrder"element={<FoodOrder/>}/>
        { <Route path='/admin' element ={<Admin />}/> }
      {<Route path='/foodOrder' element ={<FoodOrder />}></Route> }
      
        </Routes>
       
       
        </BrowserRouter>
    )
   
}
export default AppRouter