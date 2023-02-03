import {BrowserRouter,Route,Routes} from 'react-router-dom'
import FoodOrderAppBar from '../food-order/FoodOrderAppBar'
import FoodOrder from '../food-order/FoodOrder'
import Admin from '../auth/Admin'
const AppRouter=()=>
{
    return(
        <BrowserRouter>
        {!localStorage.getItem('userButton')? <FoodOrderAppBar>
        
        <Routes>
        <Route path="/foodOrder"element={<FoodOrder/>}/>
        { <Route path='/admin' element ={<Admin />}/> }
      {<Route path='/foodOrder' element ={<FoodOrder />}></Route> }
      
        </Routes>
        </FoodOrderAppBar>:''}
       
        </BrowserRouter>
    )
   
}
export default AppRouter