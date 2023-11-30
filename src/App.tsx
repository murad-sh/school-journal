import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import './index.css';
import {
  Login,
  Dashboard,
  PageNotFound,
  Grades,
  Absences,
  Schedule,
} from './pages/index';
import Layout from './components/layouts/Layout';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route element={<Layout />}>
            <Route index element={<Navigate replace to="login" />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/grades" element={<Grades />} />
            <Route path="/absences" element={<Absences />} />
          </Route>
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
