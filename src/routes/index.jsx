import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { IssueDetails } from '../pages/IssueDetails';

export function CustomRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path={"/issue/:number"} element={<IssueDetails />} />
    </Routes>
  );
}
