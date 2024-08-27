import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import {
  Dashboard,
  GamesDashboard,
  HomePage,
  LoginPage,
  OrdersDashboard,
  SignUpPage,
  SingleGamePage,
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
            <Route />
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
