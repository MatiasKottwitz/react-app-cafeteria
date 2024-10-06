import { Navigate, Route, Routes } from "react-router-dom"
import { HomePage, MenuPage, PedidosPage } from "../cafeteria/pages"
import { Login } from "../auth/pages/Login"
import { Header } from "../cafeteria/layouts/components"



export const AppRouter = () => {
  return (
    <>
         <Header/>
        <Routes>
            <Route path="/" element={<Navigate to="/home"/>}/>
            <Route path="home" element={<HomePage/>}/>
            <Route path="menu" element={<MenuPage/>}/>
            <Route path="pedidos" element={<PedidosPage/>}/>
            <Route path="login" element={<Login/>}/>
        </Routes>
    </>
  )
}
