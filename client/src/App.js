import './App.css';
import LoginSignUpPage from './pages/LoginSignUpPage';
import HomePage from './pages/HomePage';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <BrowserRouter>  
       <Routes>
        <Route path='/userLoginSignUpPage' element={<LoginSignUpPage/>}></Route>
        <Route path='/homepage' element={<HomePage/>}></Route>
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
