import "./App.css";
import AuthMain from "./pages/authentication/authMain";
import AboutUs from "./pages/other/aboutUs";
import ContactUs from "./pages/other/contactUs";
import ApplyForLoan from "./pages/user/applyLoan";
import LoanStatus from "./pages/user/loanStatus";
import ProfilePage from "./pages/user/profile";
import AdminDashboard from "./pages/admin/dashboard";
import LoanHistory from "./pages/admin/loanHistory";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/other/landing";

function App() {
  return (
    <Routes>
      <Route path="" element={<Home />} />
      <Route path="/auth" element={<AuthMain />} />
      <Route path="/apply" element={<ApplyForLoan />} />
      <Route path="/status" element={<LoanStatus />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/dashboard" element={<AdminDashboard />} />
      <Route path="/history" element={<LoanHistory />} />
    </Routes>
  );
}

export default App;
