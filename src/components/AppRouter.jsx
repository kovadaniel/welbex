import { Route, Routes } from "react-router-dom";
import { publicRoutes } from "../router";

function AppRouter() {
    return (
        <Routes>
            {publicRoutes.map(route => 
                <Route
                    key={route.path}
                    element={route.component}
                    path={route.path}/>
            )}
        </Routes>   
    );

}

export default AppRouter;