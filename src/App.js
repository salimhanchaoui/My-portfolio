import React from 'react';
import {HeaderNav} from "./layouts/HeaderNav";
import {MainContent} from "./layouts/MainContent";
import {BrowserRouter as Router} from "react-router-dom";

function App() {
  return (
<div className="min-h-full h-full bg-white " >
    <div className="h-32 w-32 absolute top-0 right-0 bg-blue-500" style={{clipPath:'ellipse(73% 39% at 91% 10%)'}}></div>
    <Router>
    <HeaderNav/>
   <MainContent/>
    </Router>
</div>
  );
}

export default App;
