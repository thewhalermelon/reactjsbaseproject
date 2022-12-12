import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Button from './components/Button';
import Header from './components/Header';
import InitialPage from './pages/InitialPage';
import MyProfile from './pages/MyProfile';
import Tips from './pages/Tips';
import NodeJS from './pages/Tips/NodeJS';

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

            <Route path='/tips' element={<Tips />} />
            <Route path='/nodejs' element={<NodeJS />} />
          </Routes>
          <Button title="GoPreviousPage" value='-1' />
          <Button title="GoFowardPage" value='1' />
        </Router>
      </div>
    </>
  );
}

export default App;
