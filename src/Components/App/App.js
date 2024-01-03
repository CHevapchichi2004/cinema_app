import BuyPage from '../pages/BuyPage';
import MainPage from '../pages/MainPage';
import './App.css';
import {Route, Routes} from 'react-router-dom'

function App() {
  return (
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/buy/:id' element={<BuyPage/>}/>
      </Routes>
  );
}

export default App;
