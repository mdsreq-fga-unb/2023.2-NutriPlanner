import React from "react"

import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./Pages/Home/Home"
import Login from "./Pages/Login/Login"
import CadastroPaciente from "./Pages/CadastroPaciente/CadastroPaciente"
import { PrivateRoute } from "./PrivateRoute"
import VerPaciente from "./Pages/VerPaciente/VerPaciente"

export default function AppRoutes() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>} />
				<Route path="/cadastrarPaciente" element={<PrivateRoute><CadastroPaciente /></PrivateRoute>} />
				<Route path="/verPaciente/:id" element={<PrivateRoute><VerPaciente/></PrivateRoute>} />

			</Routes>
		</BrowserRouter>
	)
}
