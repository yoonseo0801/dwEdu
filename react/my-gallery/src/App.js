// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route, useNavigate} from 'react-router-dom';
// import SignIn from './page/SignIn';
// import Home from './page/Home';
import ExhibitionHome from './page/ExhibitionHome';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<ExhibitionHome/>}/>
        {/* <Route path="/" element={<Home/>}/>
        <Route path="/signIn" element={<SignIn/>}/> */}
      </Routes>
    </Router>
  );
}

export default App;
