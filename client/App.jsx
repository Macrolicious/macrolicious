import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import WeightTracker from './components/WeightTracker'

function App() {
	return (
		<Router>
			<div className='App'>
				<nav>
					<ul>
						<li>
							<Link to='/home' className='text-blue-500'>
								Home
							</Link>
						</li>
						<li>
							<Link to='/login' className='text-blue-500'>
								Login
							</Link>
						</li>
						<li>
							<Link to='/register' className='text-blue-500'>
								Register
							</Link>
						</li>
					</ul>
				</nav>
				<Routes>
					<Route path='/login' element={<Login />} />
					<Route path='/register' element={<Register />} />
					<Route path='/home' element={<Home />} />
					<Route path='/weighttracker' element={<WeightTracker />} />
				</Routes>
			</div>
		</Router>
	)
}

export default App
