import './App.css';
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Login from './Components/Login';
import Signup from './Components/Signup';
import { useSelector } from 'react-redux';
import Home from './Components/Home';
import Update from './Components/Update';
import Usenavigate1 from './Components/Usenavigate1';
import Setstate1 from './Components/Setstate1';
import Sampleform from './Components/Sampleform';
import Otpcheck from './Components/Otpcheck';
import Homeone from './Components/Homeone';
import Asif from './Components/Asif';
import Profile from './Components/Profile';


function App() {

  const data=useSelector((state)=>state.user.userData[0])
if(data){
  var Token=data && data.accesstoken
  var id=data && data._id
}


  const router=createBrowserRouter([
    {
      path:'/',
      element:Token  ?  <Home/>  : <Login/>
    },
    {
      path:'sign',
      element:<Signup/>
    },
    {
      path:`update/:ids`,
      element:Token ? <Update/> : <Login/>
    },
    {
      path:'navigate/:id',
      element:Token ? <Usenavigate1/> : <Login/>
    },
    {
      path:'setstate',
      element:Token ? <Setstate1/> : <Login/>
    },
    {
      path:'admin',
      element:Token ? <Sampleform/> : <Login/>
    },
    {
      path:'otp',
      element:<Otpcheck/>
    },
    {
      path:'asif',
      element:<Asif/>
    },
    {
      path:'profile',
      element:<Profile/>
    }
  ])
  return (

 <RouterProvider router={router}/>
  );
}

export default App;
