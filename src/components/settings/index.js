import { Routes, Route, useRoutes } from 'react-router-dom';
import Security from '../security';


const Settings = () => {
   let { path } = useRoutes();
   return (
      <div>
         <Routes>
            <Route path={`${path}/account`}>Account</Route>
            <Route path={`${path}/security`} element={<Security />} />
         </Routes>
      </div>
   );
};

export default Settings;
