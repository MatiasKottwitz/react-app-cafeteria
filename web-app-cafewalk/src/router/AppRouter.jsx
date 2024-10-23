import { Route, Routes } from "react-router-dom"
import { Login } from "../auth/pages/Login"
import { ClientRoutes } from "../cafeteria"



export const AppRouter = () => {
  return (
    <>
       
        <Routes>
            <Route path="login" element={ <Login/> }/>

            <Route path="/*" element={ <ClientRoutes/> }/>
        </Routes>
    </>
  )
}
