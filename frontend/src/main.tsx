// react
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from 'react-query';

// global styles
import './Styles/app.css';

// application
import App from './App';

// react query client
const client = new QueryClient();

// main
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	// react query provider
	<QueryClientProvider client={client}>
		{/* router */}
		<BrowserRouter>
			{/* application */}
			<App />
		</BrowserRouter>
	</QueryClientProvider>
);
