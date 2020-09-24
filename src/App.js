import React from 'react';
import Header from './Header'
import SideBar from './SideBar'
import Feed from './Feed.js'
import "./App.css"
import Widgets from './Widgets.js'


function App() {
  return (
    <div className="app">
 
      <Header />
      
      <div className="app__body">
         <SideBar />
         <Feed />
         <Widgets />         
          
      </div>

     
       
      </div>
  );
}

export default App;
