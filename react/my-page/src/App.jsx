import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
// import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
// import Home from "./page/Home";
// import Portfolio from './page/Portfolio';
// import HomeIndex from './page/HomeIndex';
// import About from './page/About';
// import Contact from './page/Contact';

// import Welcome from './page/Welcome';
// import Counter from './page/Counter';
import ProfileCard from './ProfileCard';
import LikeButton from './page/LikeButton';

function App() {
  // const [count, setCount] = useState(0)

  return (

    <>
      {/* <Welcome name="이순신" age="24"/> */}
      {/* <h1>카운터 예제</h1>
      <Counter/> */}
      <ProfileCard name="홍길동" age="25" hobby="음악 감상"/>
      <LikeButton/>

      {/* <Router>
        <Routes>

          <Route path="/*" element={<Home/>}>
            <Route index element={<HomeIndex/>}/>
            <Route path='about' element={<About/>}/>
            <Route path='contact' element={<Contact/>}/>
          </Route>

          <Route path="/portfolio" element={<Portfolio/>}/>

        </Routes>
      </Router> */}
    </>
  )
}

export default App
