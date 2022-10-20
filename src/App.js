import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main';
import Register from './register/Register';
import Login from './login/Login';
import Home from './Home/Home';
import PrivateRoutes from './routes/PrivateRoutes';
import Inventory from './inventory/Inventory';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Register></Register>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/home',
          element: <Home></Home>
        },
        {
          path: '/inventory',
          element: <PrivateRoutes><Inventory></Inventory> </PrivateRoutes>
        }
      ]
    }
  ]);

  return (
    <div className="App">
      
       <RouterProvider router={router} />
    </div>
  );
}

export default App;
