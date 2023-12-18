import { BrowserRouter, Route, Routes } from 'react-router-dom';
import StorePicker from './StorePicker';
import AppWithParams from './App';
import NotFound from './NotFound';

const Router = () => (
	<BrowserRouter>
		<Routes>
			<Route path='/' element={<StorePicker />} />
			<Route path='/store/:storeId' element={<AppWithParams />} />
			<Route path='*' element={<NotFound />} />
		</Routes>
	</BrowserRouter>
);

export default Router;
