import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Kyoto from '@/containers/landingPages/Kyoto';

import './App.css';

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Routes>
            <Route path='/kyoto' element={
              <>
                <Kyoto />
              </>
            }/>
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
