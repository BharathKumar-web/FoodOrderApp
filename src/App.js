

 import AppRouter from "./Routes/AppRouter";
 import AuthRouter from "./Routes/AuthRouter";
 const App = () => {
   return (
     <div>
        <div>
        <AppRouter />
        </div>
      
      <div>
      <AuthRouter />
      </div>
     </div>
     
   );
 };
 export default App;
