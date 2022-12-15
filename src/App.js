import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Button from './components/Button';
import Header from './components/Header';
import InitialPage from './pages/InitialPage';
import MyProfile from './pages/MyProfile';
import Tips from './pages/Tips';
import NodeJS from './pages/Tips/NodeJS';

function App() {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    console.log('click!');
    theme === 'dark' ? setTheme('light') : setTheme('dark');
  };

  return (
    <>
      <Header toggleTheme={toggleTheme} />
      <div className='container'>
        <Router>
          <div className='navigation-buttons'>
            <Button title="Back" value='-1' />
            <Button title="Forward" value='1' />
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
