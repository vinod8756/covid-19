import React, { useEffect,useState } from 'react'
import Axios from 'axios'
import Appbar from '../toolbar/toolbar'
import Map from '../map/map'


const Mainpage = (props) => {
  const[data , setdata] = useState([])

    useEffect(() => {
    Axios.get("https://corona.lmao.ninja/v2/countries"
    ).then(res => {
      setdata(res.data)
    })

    },[])
    
    return(
      <div>
        <Appbar data = {data} />
      </div>
       
     
         
    )
}

export default Mainpage;