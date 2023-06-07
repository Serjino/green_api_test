import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { SnackbarProvider } from 'notistack'
import { App } from './App'
import './global/styles/index.sass'

ReactDOM.render(
    <BrowserRouter>
        <SnackbarProvider
            style={{ maxWidth: 320 }}
            maxSnack={1}
            autoHideDuration={2500}
        >
            <App />
        </SnackbarProvider>

    </BrowserRouter>,
    document.getElementById('root')
)