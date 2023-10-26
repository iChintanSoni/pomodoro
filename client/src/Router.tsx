import { Routes, Route, Outlet } from 'react-router-dom';
import { Home } from './home/Home';

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Outlet />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};