
import 'primereact/resources/themes/lara-light-blue/theme.css';  
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css'; 
import Paths from './routes/Paths';
import { AuthContext } from './contexts/AuthContexts';
import { useState } from 'react';

const App = () => {
  return ( 
      <>
        <AuthContext>
           <Paths/>
        </AuthContext>  
      </> );
}
 
export default App;