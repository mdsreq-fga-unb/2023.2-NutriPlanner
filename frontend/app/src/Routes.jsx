import React from "react"

import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./Pages/Home/Home"
import Login from "./Pages/Login/Login"
import CadastroPaciente from "./Pages/CadastroPaciente/CadastroPaciente"
import CadastroTreino from "./Pages/CadastroTreino/CadastroTreino"
import { PrivateRoute } from "./PrivateRoute"
import VerTreinos from './Pages/VerTreinos/VerTreinos'
import EditarTreinos from './Pages/EditarTreinos/EditarTreinos'

export default function AppRoutes() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>} />
				<Route path="/cadastrarPaciente" element={<CadastroPaciente />} />
				<Route path="/cadastroTreino" element={<CadastroTreino />} />
				<Route path="/verTreinos" element={<VerTreinos />} />
				<Route path="/EditarTreinos" element={<EditarTreinos />} />
			</Routes>
		</BrowserRouter>
	)
}
