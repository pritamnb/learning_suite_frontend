import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';


// Find the root element
const container = document.getElementById('root');

// Ensure the container exists
if (container) {
  // Create a root
  const root = createRoot(container);

  // Initial render
  root.render(
    <Provider store={store}>
      <App />
    </Provider>
  );
} else {
  console.error("Root container is missing in the HTML.");
}
