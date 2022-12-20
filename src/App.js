import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Button from './components/Button';
import Header from './components/Header';
import InitialPage from './pages/InitialPage';
import MyProfile from './pages/MyProfile';
import Tips from './pages/Tips';
import NodeJS from './pages/Tips/NodeJS';

function App() {
  const theme = useSelector((state) => state.theme);

  return (
    <>
      <Header />
      <div className={`container ${theme.darkmode ? '' : 'lightmode'}`}>
        <Router>
          <div className={`navigation-buttons ${theme.darkmode ? '' : 'lightmode'}`}>
            <Button value='-1' className='primary-btn'>Back</Button>
            <Button value='1' className='primary-btn'>Forward</Button>
          </div>
          <Routes>
            <Route path='/' element={<InitialPage />} />
            <Route path='/initial-page' element={<InitialPage />} />
            <Route path='/my-profile' element={<MyProfile />} />

            <Route path='/tips' element={<Tips />} />
            <Route path='/nodejs' element={<NodeJS />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
