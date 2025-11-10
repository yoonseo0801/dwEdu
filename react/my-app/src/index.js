import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

// import Parent from './family/Parent';
// import Clock from './clock/Clock';
// import NotificationList from './chapter_06/NotificationList';

// import Counter from './counter/Counter';
// import NameInput from './chapter06_1/NameInput';
import MovieList from './Movie/MovieList';
// import UseMemoEx from './chapter_07/UseMemoEx';
// import TextInputwithFocusButton from './chapter_07/TextinputwithFocusButton';
// import MeasureExample from './chapter_07/MeasureExample';
// import App from './App';
// import Accommodate from './chapter_07/Accommodate';
// import Toggle from './chapter_08/Toggle';
// import MyButton from './chapter_08/MyButton';
// import ConfirmButton from './chapter_08/ConfirmButton';
// import LoginControl from './chapter_09/LoginControl';
// import LandingPage from './chapter_09/LandingPage';
// import NameForm from './chapter_09/NameForm';

const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
  <React.StrictMode>
    <MovieList/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
