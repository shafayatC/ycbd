import React from 'react';
import './App.css';
import MyRout from './components/MyRout';
import {BrowserRouter} from 'react-router-dom'; 

function App() {
  return (
   <div>
     <BrowserRouter>
        <MyRout/>
     </BrowserRouter>
   </div>
  );
}

export default App;
