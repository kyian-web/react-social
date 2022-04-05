import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import SideBar from './components/SideBar/SideBar';

function App(props) {
	return (
		<div className="app-wrapper">
			<Header />
			<SideBar data={props.state.sidebar} />
			<div className='content'>
				<Routes>
					<Route path='/profile' element={<Profile 
											profilePage={props.state.profilePage}
											addPost={props.addPost}
											updateNewPostText={props.updateNewPostText} />} />
					<Route path='/dialogs/*' element={<Dialogs data={props.state.dialogsPage} />} />
				</Routes>
			</div>
			
		</div>
	);
}

export default App;
