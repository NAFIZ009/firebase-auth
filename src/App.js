import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LayOut from './Layout/LayOut';
import Register from './Component/Register/Register';
import Login from './Component/Login/Login';

const router = createBrowserRouter([
  {
    path:'/',
    element:<LayOut/>,
    children:[
      {
        path:'/register',
        element:<Register/>
      },
      {
        path:'/login',
        element:<Login/>
      }
    ]
  }
])
function App() {

  return (
    <div className="">
      <RouterProvider router={router} />
    </div>
  );

}

export default App;
