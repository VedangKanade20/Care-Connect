import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";

import DonorDashboard from "./pages/dashboard/DonorDashboard";
import AdminDashboard from "./pages/dashboard/AdminDashboard";
import NGOStaffDashboard from "./pages/dashboard/NGOStaffDashboard";
import DeliveryDashboard from "./pages/dashboard/DeliveryDashboard";

import SurplusDonationPage from "./pages/donations/SurplusDonationPage";
import MonetaryDonationPage from "./pages/donations/MonetaryDonationPage";

import MainLayout from "./pages/layouts/MainLayout";
import ProtectedRoute from "./components/common/ProtectedRoute";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ProfilePage from "./pages/auth/ProfilePage";
import NewsFeedPage from "./pages/NewsFeedPage";
import TutorialPage from "./pages/TutorialPage";
import DonationHistoryPage from "./pages/donations/DonationHistoryPage";

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Pages */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/newsfeed" element={<NewsFeedPage />} />
        <Route path="/tutorial" element={<TutorialPage />} />

        {/* Profile Page */}
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <MainLayout>
                <ProfilePage />
              </MainLayout>
            </ProtectedRoute>
          }
        />

        {/* Donor Routes */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <MainLayout>
                <DonorDashboard />
              </MainLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/surplus-donation"
          element={
            <ProtectedRoute>
              <MainLayout>
                <SurplusDonationPage />
              </MainLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/monetary-donation"
          element={
            <ProtectedRoute>
              <MainLayout>
                <MonetaryDonationPage />
              </MainLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/donation-history"
          element={
            <ProtectedRoute>
              <MainLayout>
                <DonationHistoryPage />
              </MainLayout>
            </ProtectedRoute>
          }
        />

        {/* Admin Routes */}
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute>
              <MainLayout>
                <AdminDashboard />
              </MainLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/list-donations"
          element={
            <ProtectedRoute>
              <MainLayout>
                <AdminDashboard />
              </MainLayout>
            </ProtectedRoute>
          }
        />

        {/* NGO Staff (Core Member) Routes */}
        <Route
          path="/staff"
          element={
            <ProtectedRoute>
              <MainLayout>
                <NGOStaffDashboard />
              </MainLayout>
            </ProtectedRoute>
          }
        />

        {/* Delivery Partner Routes */}
        <Route
          path="/delivery"
          element={
            <ProtectedRoute>
              <MainLayout>
                <DeliveryDashboard />
              </MainLayout>
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
