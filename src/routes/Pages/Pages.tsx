import { Navigate, Route, Routes } from 'react-router-dom';

import Box from '@mui/material/Box';

import routes from '..';
import { getPageHeight } from './utils';
import Calculator from '@/pages/Calculator';
import Login from '@/components/Login';
import { useAuth } from '@/providers/AuthProvider';
import Records from '@/pages/Records';

function Pages() {
  const { authToken, handleLogin } = useAuth();
  return (
    <Box sx={{ height: (theme) => getPageHeight(theme) }}>
      <Routes>
        <Route path="/" element={authToken ? <Navigate to="/calculator" /> : <Login onLogin={handleLogin} />} />
        <Route path="/login" element={authToken ? <Navigate to="/calculator" /> : <Login onLogin={handleLogin} />} />
        <Route path="/calculator" element={authToken ? <Calculator  /> : <Navigate to="/login" />} />
        <Route path="/records" element={authToken ? <Records  /> : <Navigate to="/login" />} />
        {/* {Object.values(routes).map(({ path, component: Component }) => {
          return <Route key={path} path={path} element={<Component />} />;
        })} */}
      </Routes>
    </Box>
  );
}

export default Pages;
