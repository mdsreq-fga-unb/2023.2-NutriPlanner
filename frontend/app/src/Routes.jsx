import React from "react"

import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/home/Home"
import Login from "./pages/login/Login"

export default function AppRoutes() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/home" element={<Home />} />
				<Route path="/" element={<Login />} />
			</Routes>
		</BrowserRouter>
	)
}
