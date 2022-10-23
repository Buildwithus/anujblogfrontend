import React from 'react';
import './App.css';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import Home from './pages/home';
import Blogcreate from './pages/blogcreate';
import Nav from './pages/navbar';
import About from './pages/about';

function AnujBlog(){
  return(
    <BrowserRouter>
       <Routes>
        <Route path='/' element={<Nav/>}>
          <Route index element={<Home/>}></Route>
          <Route path="creatblog" element={<Blogcreate/>}></Route>
          <Route path="about" element={<About/>}></Route>


        </Route>
       </Routes>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AnujBlog />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
