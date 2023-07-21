import { Navigate } from "react-router-dom";

import Main from "../pages/Main";



export const publicRoutes = [
    {path: '/main', component: <Main/>, },

    {path: '/*', component: <Navigate to="/main" replace/>, }, 
]