import React ,{useEffect, useState} from 'react'
import './App.css';
import Startingpage from './animations/animators/startingpage';
import Mainpage from './mainpage/mainpage';



const App = () => {
 const [view , setview] = useState(<Startingpage/>)  

useEffect(() => {
 setTimeout(() => {
  setview(<div>
    <Mainpage/> 
  </div>
  );
 }, 6000)
 } ,[])
  return(
    <div>
     {view}
    </div>
  )
}

export default App;
