import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ProfilePage from "./pages/auth/ProfilePage";
import NewsFeedPage from "./pages/NewsFeedPage";
import TutorialPage from "./pages/TutorialPage";

// Dashboards
import DonorDashboard from "./pages/dashboard/DonorDashboard";
import AdminDashboard from "./pages/dashboard/AdminDashboard";
import NGOStaffDashboard from "./pages/dashboard/NGOStaffDashboard";
import DeliveryDashboard from "./pages/dashboard/DeliveryDashboard";
import DynamicDashboard from "./components/DynamicDashboard"; // New!

// Donation Pages
import SurplusDonationPage from "./pages/donations/SurplusDonationPage";
import MonetaryDonationPage from "./pages/donations/MonetaryDonationPage";
import DonationHistoryPage from "./pages/donations/DonationHistoryPage";

// Layouts & Route Protection
import MainLayout from "./pages/layouts/MainLayout";
import ProtectedRoute from "./components/common/ProtectedRoute";
import ManageMonetaryDonationsPage from "./pages/admin/ManageMonetaryDonationsPage";
import ManageSurplusDonationsPage from "./pages/admin/ManageSurplusDonationsPage";
import ManageUsersPage from "./pages/admin/ManageUsersPage";
import AssignedDeliveriesPage from "./pages/NgoCore/AssignedDeliveriesPage";
import PendingSurplusListPage from "./pages/NgoCore/PendingSurplusListPage";
import ViewAssignedDeliveries from "./pages/NgoDelivery/ViewAssignedDeliveries";
import CompletedDeliveriesList from "./pages/NgoDelivery/CompletedDeliveriesList";

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
            <ProtectedRoute allowedRoles={["Donor", "Admin", "NGO_Staff"]}>
              <MainLayout>
                <ProfilePage />
              </MainLayout>
            </ProtectedRoute>
          }
        />

        {/* Dynamic Dashboard */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DynamicDashboard />
            </ProtectedRoute>
          }
        />

        {/* Donor Specific Dashboard */}
        <Route
          path="/dashboard/donor"
          element={
            <ProtectedRoute allowedRoles={["Donor"]}>
              <MainLayout>
                <DonorDashboard />
              </MainLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/surplus-donation"
          element={
            <ProtectedRoute allowedRoles={["Donor"]}>
              <MainLayout>
                <SurplusDonationPage />
              </MainLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/monetary-donation"
          element={
            <ProtectedRoute allowedRoles={["Donor"]}>
              <MainLayout>
                <MonetaryDonationPage />
              </MainLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/donation-history"
          element={
            <ProtectedRoute allowedRoles={["Donor"]}>
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
            <ProtectedRoute allowedRoles={["Admin"]}>
              <MainLayout>
                <AdminDashboard />
              </MainLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/users"
          element={
            <ProtectedRoute allowedRoles={["Admin"]}>
              <MainLayout>
                <ManageUsersPage />
              </MainLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/surplus"
          element={
            <ProtectedRoute allowedRoles={["Admin"]}>
              <MainLayout>
                <ManageSurplusDonationsPage />
              </MainLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/monetary"
          element={
            <ProtectedRoute allowedRoles={["Admin"]}>
              <MainLayout>
                <ManageMonetaryDonationsPage />
              </MainLayout>
            </ProtectedRoute>
          }
        />

        {/* NGO Staff (Core Member) Routes */}

        <Route
          path="/ngoCore/dashboard"
          element={
            <ProtectedRoute allowedRoles={["NGO_Staff"]} staffType="core">
              <MainLayout>
                <NGOStaffDashboard />
              </MainLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/ngoCore/pending-surplus"
          element={
            <ProtectedRoute allowedRoles={["NGO_Staff"]} staffType="core">
              <MainLayout>
                <PendingSurplusListPage />
              </MainLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/ngoCore/assigned-deliveries"
          element={
            <ProtectedRoute allowedRoles={["NGO_Staff"]} staffType="core">
              <MainLayout>
                <AssignedDeliveriesPage />
              </MainLayout>
            </ProtectedRoute>
          }
        />

        {/* Delivery Partner Routes */}
        <Route
          path="/ngoDelivery/dashboard"
          element={
            <ProtectedRoute allowedRoles={["NGO_Staff"]}>
              <MainLayout>
                <DeliveryDashboard />
              </MainLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/ngoDelivery/viewAssDel"
          element={
            <ProtectedRoute allowedRoles={["NGO_Staff"]}>
              <MainLayout>
                <ViewAssignedDeliveries />
              </MainLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/ngoDelivery/compDelList"
          element={
            <ProtectedRoute allowedRoles={["NGO_Staff"]}>
              <MainLayout>
                <CompletedDeliveriesList />
              </MainLayout>
            </ProtectedRoute>
          }
        />

        {/* Unauthorized or Fallback */}
        <Route path="/unauthorized" element={<h1>Unauthorized</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
