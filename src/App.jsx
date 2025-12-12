import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Landing from "./pages/Landing";
import Auth from "./pages/Auth";
import Doctors from "./pages/Doctors";
import HealthBlog from "./pages/HealthBlog";
import Reviews from "./pages/Reviews";
import GlobalStyles from "./styles/GlobalStyles";
import LoginForm from "./features/authentication/LoginForm";
import SignupForm from "./features/authentication/SignupForm";
import Doctor from "./pages/Doctor";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import AuthProvider from "./contexts/AuthContext";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <GlobalStyles />
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route path="/" element={<Landing />} />
              <Route path="/auth" element={<Auth />}>
                <Route index element={<Navigate replace to="register" />} />
                <Route path="register" element={<SignupForm />} />
                <Route path="login" element={<LoginForm />} />
              </Route>
              <Route path="/doctors" element={<Doctors />} />
              <Route path="/doctors/doctor/:id" element={<Doctor />} />
              <Route path="/health-blog" element={<HealthBlog />} />
              <Route path="/reviews" element={<Reviews />} />
            </Route>
          </Routes>
        </BrowserRouter>
        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 5000,
            },
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
              backgroundColor: "var(--color-grey-100)",
              color: "var(--color-grey-700)",
            },
          }}
        />
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
