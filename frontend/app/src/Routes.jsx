import React from "react"

import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./Pages/Home/Home"
import Login from "./Pages/Login/Login"
import CadastroPaciente from "./Pages/CadastroPaciente/CadastroPaciente"
import { PrivateRoute } from "./PrivateRoute"
import RecuperarPin from "./Pages/RecuperarPin/recuperar"

export default function AppRoutes() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>} />
				<Route path="/cadastrarPaciente" element={<CadastroPaciente />} />
				<Route path="/recuperarPin" element={<RecuperarPin />} />
			</Routes>
		</BrowserRouter>
	)
}
