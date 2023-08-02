import ReactDOM from 'react-dom/client'

import App from './App'
import { NavigationContextProvider } from './contexts/NavigationContext'
import './styles/index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <NavigationContextProvider>
    <App />
  </NavigationContextProvider>
)
