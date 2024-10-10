import { Header } from "../layouts/components"
import { Routes, Route, Navigate } from "react-router-dom"
import { EnviosPage, HomePage, MenuPage, PedidosPage } from "../pages"
export const ClientRoutes = () => {

  return(
    <>
        <Header />

        <Routes>
            <Route path="/" element={<Navigate to="/home"/>}/>
            <Route path="home" element={<HomePage/>}/>
            <Route path="menu" element={<MenuPage/>}/>
            <Route path="envios" element={<EnviosPage/>}/>
            <Route path="pedidos" element={<PedidosPage/>}/>
        </Routes>
    </>
  )
}
