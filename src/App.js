import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import AuthProvider from './context/AuthProvider/AuthProvider';
import DashBorad from './Pages/DashBoard/DashBoard/DashBoard';

function App() {
	return (
		<div className='App'>
			<AuthProvider>
				<Router>
					<Switch>
						<Route exact path='/'>
							<Home />
						</Route>
						<Route path='/home'>
							<Home />
						</Route>
						<Route path='/login'>
							<Login />
						</Route>
						<Route path='/register'>
							<Register />
						</Route>
						<Route path='/dashboard'>
							<DashBorad />
						</Route>
						<Route path='*'>
							<NotFound />
						</Route>
					</Switch>
				</Router>
			</AuthProvider>
		</div>
	);
}

export default App;
