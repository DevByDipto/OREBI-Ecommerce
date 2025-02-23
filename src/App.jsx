
import './App.css'
import Home from './pages/Home';
import Shop from './pages/Shop';


  import {
    createRoutesFromElements,
    createBrowserRouter,
    Route,
    RouterProvider,
  } from "react-router-dom";
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route path="/" element={<Home />}></Route>
      <Route path="/shop" element={<Shop />}></Route>
      </>
    )
  );
  
  function App() {
  return (
    <>
   <RouterProvider router={router} />
    </>
  )
}

export default App
