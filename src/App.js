import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import InitialPage from './pages/InitialPage';
import MyProfile from './pages/MyProfile';

function App() {
  return (
    <>
      <Header />
      <div className='container'>
        <Router>
          <Routes>
            <Route path='/' element={<InitialPage />} />
            <Route path='/initial-page' element={<InitialPage />} />
            <Route path='/my-profile' element={<MyProfile />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
