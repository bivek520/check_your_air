import './App.css';
import LocationForm from './component/locationForm';
function App() {
	return (
		<React.Fragment>
			<Switch>
				<Route path='/check_your_air' component={LocationForm} />
			</Switch>
		</React.Fragment>
	);
}

export default App;
