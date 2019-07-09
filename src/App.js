import React from 'react';
import './App.css';
import Calc from './comp/calc'

function App() {
  return (
    <div className="App">
      
      <h1> Calculator </h1>
      <p> SF Assignment-5 by Ajay Yadav</p>
      
      <Calc />

      <style jsx>
        {`
        h1{
          padding-top: 1em;
          font-size: 2.4em;
        }
        p{
          color:#778;
          padding:0;
          margin-top:-15px;
          font-weight: 600;
        }
        `}
      </style>
    </div>
  );
}

export default App;
