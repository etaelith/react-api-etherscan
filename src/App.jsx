import {Route, Routes} from 'react-router-dom'
import { useState } from 'react';

import NavBar from './components/NavBar';


import FetchTest from './utils/FetchTest';
import TableHead from './components/TableHead';
import PrintDate from './utils/PrintDate';

function App() {

  const [ walletTest, setWalletTest] = useState('')


  return (
    <>
      <NavBar/>

      <Routes>
        <Route path='/'>
          <Route
            index path='/'
            element = {
              <>
                <FetchTest setWalletTest={setWalletTest}/>
                <TableHead>
                  <PrintDate walletTest={walletTest}/>
                </TableHead>  
              </>}>
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
