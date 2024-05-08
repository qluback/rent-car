import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CarChoicePage from './pages/CarChoicePage';
import CarOptionsPage from './pages/CarOptionsPage';
import RecapPage from './pages/RecapPage';
import UserInformationsPage from './pages/UserInformationsPage';
import PaymentPage from './pages/PaymentPage';

export default function RoutesApp() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CarChoicePage />} />
        <Route path="/options" element={<CarOptionsPage />} />
        <Route path="/recap" element={<RecapPage />} />
        <Route path="/user-informations" element={<UserInformationsPage />} />
        <Route path="/payment" element={<PaymentPage />} />
      </Routes>
    </Router>
  );
}
