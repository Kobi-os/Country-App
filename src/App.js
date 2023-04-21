import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/homepage/Homepage';
import Country from './pages/country/Country';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/country/:name" element={<Country/>}/>
        <Route path=""/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
