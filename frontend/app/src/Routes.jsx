import React from "react"

import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/home/Home"
import Login from "./pages/login/Login"
import { PrivateRoute } from "./PrivateRoute"

export default function AppRoutes() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>} />
				<Route path="/" element={<Login />} />
			</Routes>
		</BrowserRouter>
	)
}
