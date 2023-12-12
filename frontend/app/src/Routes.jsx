import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./Pages/Home/Home"
import Login from "./Pages/Login/Login"
import CadastroPaciente from "./Pages/CadastroPaciente/CadastroPaciente"
import CadastroTreino from "./Pages/CadastroTreino/CadastroTreino"
import { PrivateRoute } from "./PrivateRoute"
import VerTreinos from './Pages/VerTreinos/VerTreinos'
import EditarTreinos from './Pages/EditarTreinos/EditarTreinos'
import VerPaciente from "./Pages/VerPaciente/VerPaciente"

export default function AppRoutes() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>} />
				<Route path="/cadastrarPaciente" element={<PrivateRoute><CadastroPaciente /></PrivateRoute>} />
				<Route path="/verPaciente/:id" element={<PrivateRoute><VerPaciente/></PrivateRoute>} />
				<Route path="/cadastroTreino" element={<PrivateRoute><CadastroTreino /></PrivateRoute>} />
				<Route path="/verTreinos" element={<PrivateRoute><VerTreinos /></PrivateRoute>} />
				<Route path="/editarTreinos" element={<PrivateRoute><EditarTreinos /></PrivateRoute>} />

			</Routes>
		</BrowserRouter>
	)
}
