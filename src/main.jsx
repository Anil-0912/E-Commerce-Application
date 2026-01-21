import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { RouterProvider } from 'react-router-dom'
import { router } from './Router/Router'
import { Provider } from 'react-redux'
import store from '../config/store'
import ThemeToggle from './Components/Common/ThemeToggle'

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);

