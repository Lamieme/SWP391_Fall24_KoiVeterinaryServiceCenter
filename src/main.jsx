import { ThemeProvider } from '@mui/material'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '~/App.jsx'
import theme from '~/theme'
import '~/fonts.css'
import '~/styles.css'
import { Provider } from 'react-redux'
import store from '~/redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
)
