import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import {
  AccountVerificationPage,
  Dashboard,
  FavouritesPage,
  ForgotPasswordPage,
  GamesDashboard,
  HomePage,
  LoginPage,
  OrdersDashboard,
  OrdersPage,
  PasswordResetPage,
  ProfilePage,
  SignUpPage,
  SingleGamePage,
  UserPage,
  UsersDashboard
} from "./pages"
import AuthLayout from "./components/AuthLayout"
import { Toaster } from "./components/ui/toaster"
import AppLayout from "./components/AppLayout"

function App() {
  return (
    <>
      <Toaster />
      <BrowserRouter>
        <AppLayout>
          <Routes>
            <Route index path="/" element={<Navigate to={"/games"} replace />} />
            <Route path="/games" element={<HomePage />} />
            <Route path="/games/:id" element={<SingleGamePage />} />
            <Route path="/verify/:token" element={<AccountVerificationPage />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
            <Route path="/reset-password/:token" element={<PasswordResetPage />} />
            <Route path="/profile" element={<ProfilePage />}>
              <Route index element={<Navigate to="/profile/me" replace />} />
              <Route path="me" element={<UserPage />} />
              <Route path="favourites" element={<FavouritesPage />} />
              <Route path="orders" element={<OrdersPage />} />
            </Route>
            <Route element={<AuthLayout />}>
              <Route path="/signup" element={<SignUpPage />} />
              <Route path="/login" element={<LoginPage />} />
            </Route>
            <Route path="/dashboard" element={<Dashboard />}>
              <Route index element={<Navigate to="/dashboard/users" replace />} />
              <Route path="users" element={<UsersDashboard />} />
              <Route path="games" element={<GamesDashboard />} />
              <Route path="orders" element={<OrdersDashboard />} />
            </Route>
          </Routes>
        </AppLayout>
      </BrowserRouter>
    </>
  )
}

export default App
