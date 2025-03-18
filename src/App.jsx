import { useContext, useState, useEffect } from 'react';
import { Routes, Route } from 'react-router';

import * as hootService from './services/hootService';

import NavBar from './components/NavBar/NavBar';
import SignUpForm from './components/SignUpForm/SignUpForm';
import SignInForm from './components/SignInForm/SignInForm';
import Landing from './components/Landing/Landing';
import Dashboard from './components/Dashboard/Dashboard';
import HootList from './components/HootList/HootList';
import HootDetails from './components/HootDetails/HootDetails';

import { UserContext } from './contexts/UserContext';

const App = () => {
  const [hoots, setHoots] = useState([]);
  const { user } = useContext(UserContext);

  // lets you perform side effects in function components
  // side effect: fetching data from api
  // useEffect takes a function
  // React will run this function after the component renders
  useEffect( () => {
    // service call 
    const fetchAllHoots = async () => {
      const hootsData = await hootService.index();

      setHoots(hootsData);
    };

    if (user) fetchAllHoots();
  }, [user] ); // dependency array
  
  return (
    <>
     {/* navbar will show up at all points */}
      <NavBar/>
      <Routes>
        <Route path='/' element={user ? <Dashboard /> : <Landing />} />
        { user ? (
          <>
          <Route path='/hoots' element={<HootList hoots={hoots}/>} /> 
          <Route path='/hoots/:hootId' element={<HootDetails />} />
          </>
        ) : (
          <>
          <Route path='/sign-up' element={<SignUpForm />} />
          <Route path='/sign-in' element={<SignInForm />} />
          </>
        )
        }
      </Routes>
    </>
  );
};

export default App;
