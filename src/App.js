import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import SideBar from './components/SideBar/SideBar';

function App() {
	return (
		<div className="app-wrapper">
			<Header />
			<SideBar />
			<Profile />
		</div>
	);
}

export default App;
