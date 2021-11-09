import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
function App() {
	return (
		<div className='App'>
			<Router>
				<Switch>
					<Route path='/'>
						<Home />
					</Route>
					<Route path='/home'>
						<Home />
					</Route>
					<Route path='*'>
						<NotFound />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
