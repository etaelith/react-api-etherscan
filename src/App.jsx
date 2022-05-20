import {Route, Routes} from 'react-router-dom'
import { useEffect, useState } from 'react';

import NavBar from './components/NavBar';

import FetchTest from './routes/FetchTest';
import TableHead from './routes/TableHead';
import PrintDate from './utils/PrintDate';
import NoRes from './components/NoRes';
import useDarkMode from './hooks/useDarkMode';
import Tablet from './routes/Tablet';

function App() {
  useDarkMode()
  const [ walletTest, setWalletTest] = useState('')

  useEffect(() => {
    if (localStorage.getItem('walletSave')) {
      setWalletTest(JSON.parse(localStorage.getItem('walletSave')))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('walletSave', JSON.stringify(walletTest))
  }, [walletTest])

  return (
    <div className="min-h-screen bg-white border-b dark:bg-gray-800 dark:border-gray-700 h-full transition duration-500">
      <NavBar/>
      <Routes>
        <Route path='/'>
          <Route
            index
            element = {
              <>
                <FetchTest setWalletTest={setWalletTest}/>
                <TableHead>
                  <PrintDate walletTest={walletTest}/>
                </TableHead>  
              </>}>
          </Route>
          <Route path='/Tablet' element={<Tablet/>}></Route>
          <Route path='*' element={<NoRes/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
