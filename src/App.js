import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Career from './components/career.component';
import Header from './components/header.component';
import About from './components/About';
import Home from './components/home.component';
import Footer from './components/footer.component';
import ParentComponent from './components/ParentComponent';
import StateComponent from './components/State';
import Lifecyclecomponent from './components/Lifecycle.component';
import NotfoundComponent from './components/NotfoundComponent';
import ApiCalls from './components/ApiCalls';
function App() {
  var isShow = false;
  return (
    <div className='container-fluid'>
      <Router>
        <Header></Header>
        {/* { * NgIF/* // hide component with condition using ternary operator */}
        {isShow ? <ParentComponent /> : null}
        <Routes>
          <Route exact path='/' element={< Home />}></Route>
          <Route exact path='/about' element={< About />}></Route>
          <Route exact path='/home' element={< Home />}></Route>
          <Route exact path='/career' element={< Career />}></Route>
          <Route exact path='/props' element={< ParentComponent />}></Route>
          <Route exact path='/state' element={< StateComponent />}></Route>
          <Route exact path='/lchooks' element={< Lifecyclecomponent />}></Route>
          <Route exact path='/apicalls' element={< ApiCalls />}></Route>
          {/* wildcard routing */}
          <Route exact path="*"  element={<NotfoundComponent />}></Route>
        </Routes>
      </Router>
      <Footer></Footer>
    </div>
  );
}

export default App;
