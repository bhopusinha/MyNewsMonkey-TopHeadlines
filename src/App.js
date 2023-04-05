// import './App.css';

import React, {useState } from 'react'
import Navbar from './components/Navbar'
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";

const App =(props)=>{
  // pagesize=15;
 const [progress,setProgress]=useState(0)

    return (
      <>
        <div>
          <Router>
            <Navbar />
            <LoadingBar
              color='#f11946'
              height={3}
              progress={progress}
            />
            <Routes>
              <Route exact path="/" element={<News setProgress={setProgress}  key="general" pagesize={5} country="in" category='general' />}></Route>
              <Route exact path="/general" element={<News setProgress={setProgress}  key="general" pagesize={5} country="in" category='general' />}></Route>
              <Route exact path="/business" element={<News setProgress={setProgress}  key="business" pagesize={5} country="in" category='business' />}></Route>
              <Route exact path="/entertainment" element={<News setProgress={setProgress}  key="entertainment" pagesize={5} country="in" category='entertainment' />}></Route>
              <Route exact path="/sports" element={<News setProgress={setProgress}  key="sports" pagesize={5} country="in" category='sports' />}></Route>
              <Route exact path="/health" element={<News setProgress={setProgress}  key="health" pagesize={5} country="in" category='health' />}></Route>
              <Route exact path="/science" element={<News setProgress={setProgress}  key="science" pagesize={5} country="in" category='science' />}></Route>
              <Route exact path="/technology" element={<News setProgress={setProgress}  key="technology" pagesize={5} country="in" category='technology' />}></Route>
            </Routes>
          </Router>
        </div>
      </>
    )
}

export default App;
