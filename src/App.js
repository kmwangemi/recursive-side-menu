import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout';
import Home from './components/home';
import Profile from './components/profile';
import Settings from './components/settings';

import './App.css';


function App() {
   return (
      <Router>
         <div className="App">
            <Layout>
               <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path='/profile' element={<Profile />} />
                  <Route path='/settings' element={<Settings />} />
               </Routes>
            </Layout>
         </div>
      </Router>
   );
}

export default App;