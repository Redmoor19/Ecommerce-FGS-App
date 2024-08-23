import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { HomePage, LoginPage, SignUpPage } from "./pages"
import AuthLayout from "./components/AuthLayout"
import { Toaster } from "./components/ui/toaster"
import AppLayout from "./components/AppLayout"
import DashboardLayout from "./features/dashboard/DashboardLayout"

function App() {
  return (
    <>
      <Toaster />
      <BrowserRouter>
        <AppLayout>
          <Routes>
            <Route index path="/" element={<HomePage />} />
            <Route element={<AuthLayout />}>
              <Route path="/signup" element={<SignUpPage />} />
              <Route path="/login" element={<LoginPage />} />
            </Route>
            <Route path="/dashboard" element={<DashboardLayout />}>
              <Route index element={<Navigate to="/dashboard/users" replace />} />
              <Route path="users" />
              <Route path="games" />
              <Route path="orders" />
            </Route>
          </Routes>
        </AppLayout>
      </BrowserRouter>
    </>
  )
}

export default App
