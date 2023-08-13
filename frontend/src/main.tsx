// react
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

// global styles
import './Styles/app.css';

// application
import App from './App';

// main
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	// router
	<BrowserRouter>
		{/* application */}
		<App />
	</BrowserRouter>
);
