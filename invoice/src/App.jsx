
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Invoice from './Invoice';
import Test from './Test'


function App() {

  return (
    <div className="App">
      <Routes>
      <Route exact path='/' element={<Test />} />
        <Route exact path='/invoice' element={<Invoice />} />

      </Routes>

    </div>
  );
}

export default App;
