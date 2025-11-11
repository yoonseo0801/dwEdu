import { useState } from 'react'
import './App.css'
import MainMenu from './component/MainMenu';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Info from './component/study1/Info';
import Board from './component/study1/Board';
import Member from './component/study1/Member';
import Store from './component/study1/Store';
import Schedule from './component/study2/Schedule';
import Student from './component/study2/Student';
import Memo from './component/study2/Memo';
import BoardMng from './component/study2/BoardMng';
import Buyer from './component/homework/homework1/Buyer';
import TestEffect from './component/study3/TestEffect';
import TestFetch from './component/study3/TestFetch';
import DataList from './component/study4/DataList';
import DataList2 from './component/study4/DataList2';
import UserInfo from './component/study4/UserInfo';
import TodoList from './component/study4/TodoList';
import LikeButton from './component/homework/homework2/LikeButton';
import SaveName from './component/homework/homework2/SaveName';
import Attend from './component/study5/Attend.jsx';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
      <Router>
        <Routes>
          <Route path='/' element={<MainMenu/>}/>
          <Route path='/propstate' element={<Info/>}/>
          <Route path='/boardMake' element={<Board/>}/>
          <Route path='/member' element={<Member/>}/>
          <Route path='/store/*' element={<Store/>}/>
          <Route path='/schedule' element={<Schedule/>}/>
          <Route path='/studentname' element={<Student/>}/>
          <Route path='/simplememo' element={<Memo/>}/>
          <Route path='/boardMng/*' element={<BoardMng/>}/>
          <Route path='/buyer/*' element={<Buyer/>}/>
          <Route path='/effect1' element={<TestEffect/>}/>
          <Route path='/fetch' element={<TestFetch/>}/>
          <Route path='/map1' element={<DataList/>}/>
          <Route path='/map2' element={<DataList2/>}/>
          <Route path='/users' element={<UserInfo/>}/>
          <Route path='/todo' element={<TodoList/>}/>
          <Route path='/like' element={<LikeButton/>}/>
          <Route path='/savename' element = {<SaveName/>}/>
          <Route path='/attend' element={<Attend/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
