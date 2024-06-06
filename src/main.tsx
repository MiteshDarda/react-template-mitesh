import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import store from "./store/index.ts";
import { Provider } from 'react-redux';
import Background from './components/background/index.tsx';
import "./styles/output.css"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <Background />
    <App />
  </Provider>,
)
