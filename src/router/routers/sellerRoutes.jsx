//src/router/routes/sellerRoutes.js
import { lazy } from "react";  
const Home = lazy(()=> import('../../views/Home'))   

export const sellerRoutes = [
    {
        path: '/',
        element : <Home/>,
        ability : ['admin','seller']
    }

]//re