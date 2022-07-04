import AuthProvider from './components/utils/AuthProvider'
import { Route, Routes, HashRouter } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import ProtectedRoute from './components/utils/ProtectedRoute'
import './firebase'
import './styles/App.scss'
import ErrorPage from './pages/ErrorPage'

function App() {
    return(
        <AuthProvider>
            <HashRouter>
                <Routes>
                    <Route 
                        path='/' 
                        element={
                            <ProtectedRoute>
                                <HomePage />
                            </ProtectedRoute>
                        }
                    />
                    <Route path='/login' element={<LoginPage />}/>
                    <Route path='/register' element={<RegisterPage />}/>
                    <Route path='*' element={<ErrorPage />}/>
                </Routes>
            </HashRouter>
        </AuthProvider>
    );
}

export default App;
