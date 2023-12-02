
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Invoice from './Invoice';


function App() {

  return (
    <div className="App">
      <Routes>

        <Route exact path='/invoice' element={<Invoice />} />

      </Routes>

    </div>
  );
}

export default App;
