import { Route, Routes } from 'react-router-dom';
import Chat from './Components/Chat';
import Home from './Components/Home';
import Signup from './Components/Signin';
import Register from './Components/Register';
import AdminPortal from './Components/AdminPortal';

function App() {
  return (
    <>
      <Routes>
        <Route path='/chat' element={<Chat/>} ></Route>
        <Route path='/' element={<Home/>} ></Route>
        <Route path='/signin' element={<Signup/>} ></Route>
        <Route path='/register' element={<Register/>} ></Route>
        <Route path='/adminPortal' element={<AdminPortal/>} ></Route>
      </Routes>

    </>
  );
}

export default App;
