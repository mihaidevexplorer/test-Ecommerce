//App.jsx
import {useEffect, useState } from "react";
import Router from "./router/Router";
import publicRoutes from "./router/routers/publicRoutes";
import { getRoutes } from "./router/routers"; 

function App() {
  const [allRoutes, setAllRoutes] = useState([...publicRoutes])
    console.log(allRoutes)
    // console.log(allRoutes)

    useEffect(() => {
        const routes = getRoutes()
        setAllRoutes([...allRoutes,routes])
    },[])
  // console.log(allRoutes)

  


  return <Router allRoutes={allRoutes} /> 
 

  

}

export default App;
