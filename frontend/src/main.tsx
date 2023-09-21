// react
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

// global styles
import './Styles/app.css';

// redux
import { Provider } from 'react-redux';
import { store } from './Services/Redux/store';

// application
import App from './App';

// react query client
const client = new QueryClient();

// main
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	// react query provider
	<QueryClientProvider client={client}>
		<Provider store={store}>
			{/* router */}
			<BrowserRouter>
				{/* application */}
				<App />
			</BrowserRouter>
			<ReactQueryDevtools position="bottom-right" initialIsOpen={true} />
		</Provider>
	</QueryClientProvider>
);
