import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Button from './components/Button';
import Header from './components/Header';
import InitialPage from './pages/InitialPage';
import Portfolio from './pages/Portfolio';
import Tips from './pages/Tips';
import NodeJS from './pages/Tips/NodeJS';

function App() {
  const theme = useSelector((state) => state.theme);

  return (
    <Router>
      <Header />
      <div className={'container' + `${theme.darkmode ? '' : ' lightmode'}`}>
        <div className='navigation-buttons'>
          <Button value='-1' className='primary-btn' isNavigateButton={true}>
            Back
          </Button>
          <Button value='1' className='primary-btn' isNavigateButton={true}>
            Forward
          </Button>
        </div>
        <Routes>
          <Route path='/' element={<InitialPage />} />
          <Route path='/initial-page' element={<InitialPage />} />
          <Route path='/portfolio' element={<Portfolio />} />

          <Route path='/tips' element={<Tips />} />
          <Route path='/nodejs' element={<NodeJS />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
