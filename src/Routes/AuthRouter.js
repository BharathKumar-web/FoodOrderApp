import { BrowserRouter, Route, Routes } from "react-router-dom";
import LogIn from '../auth/LogIn'
import Admin from '../auth/Admin'

const AuthRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LogIn /> } />
        <Route exact path="/logout" element={<LogIn />} />
        
        
      </Routes>
    </BrowserRouter>
  );
};
export default AuthRouter;