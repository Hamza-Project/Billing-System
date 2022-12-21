import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Components/Login';
import Main from './Components/Main';
import Invoice from './Components/Invoice'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/main" element={<Main />} />
          <Route exact path="/invoice" element={<Invoice />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
