import { useState } from 'react';
import Login from './components/login/Login';
import './firebase'
import './App.scss';

function App() {
    const [user, setUser] = useState(null)

    return(
        <div>
            {user == null ? <Login setUser={setUser}/> : 'Welcome!'}
        </div>
    );
}

export default App;
