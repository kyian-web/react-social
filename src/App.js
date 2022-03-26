import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import SideBar from './components/SideBar/SideBar';

function App() {
	return (
		<div className="app-wrapper">
			<Header />
			<SideBar />
			<div className='content'>
				<Routes>
					<Route path='/profile' element={<Profile />} />
					<Route path='/dialogs/*' element={<Dialogs />} />
				</Routes>
			</div>
			
		</div>
	);
}

export default App;
