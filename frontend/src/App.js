import Navbar from './components/Navbar';
import NewsGrid from './components/NewsGrid';
import ListOfData from './components/ListOfData';
import { BrowserRouter, Route } from 'react-router-dom';
import SubmitUser from './components/SubmitUser';

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Navbar />
				<Route exact path='/' render={(props) => <NewsGrid {...props} />} />
				<Route path='/portfolio' render={(props) => <SubmitUser {...props} />} />
			</BrowserRouter>
		</div>
	);
}

export default App;
