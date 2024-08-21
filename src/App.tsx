import { BrowserRouter, Route, Routes } from "react-router-dom"
import { HomePage, LoginPage, SignUpPage } from "./pages"
import AuthLayout from "./components/AuthLayout"
import { Toaster } from "./components/ui/toaster"

function App() {
  return (
    <main>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<HomePage />} />
          <Route element={<AuthLayout />}>
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App
