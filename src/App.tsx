import AuthProvider from './components/utils/AuthProvider'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
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
            <BrowserRouter>
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
            </BrowserRouter>
        </AuthProvider>
    );
}

export default App;
