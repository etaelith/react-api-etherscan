import {Route, Routes} from 'react-router-dom'
import { useEffect, useState } from 'react';

import NavBar from './components/NavBar';

import FetchTest from './routes/FetchTest';
import TableHead from './routes/TableHead';
import PrintDate from './utils/PrintDate';
import NoRes from './routes/NoRes';

function App() {

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
    <>
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
          <Route path='*' element={<NoRes/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
