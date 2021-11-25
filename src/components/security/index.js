import { Routes, Route, useRoutes } from 'react-router-dom';
// import style from './home.module.css';

const Security = () => {
   let { path } = useRoutes();
   console.log('security', { path });
   return (
      <div>
         <Routes>
            <Route path={`${path}/credentials`}>Credentials</Route>
            <Route path={`${path}/2fa`}>Two factor authentication</Route>
         </Routes>
      </div>
   )
}

export default Security
