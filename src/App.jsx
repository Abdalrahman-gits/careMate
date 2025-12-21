import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import AuthProvider from "./contexts/AuthContext";
import GlobalStyles from "./styles/GlobalStyles";

import AppLayout from "./ui/AppLayout";
import LoginForm from "./features/authentication/LoginForm";
import SignupForm from "./features/authentication/SignupForm";
import ProtectedRoute from "./ui/ProtectedRoute";

import { lazy, Suspense } from "react";
import FullPage from "./ui/FullPage";
import Spinner from "./ui/Spinner";

const Landing = lazy(() => import("./pages/Landing"));
const Auth = lazy(() => import("./pages/Auth"));
const HealthBlog = lazy(() => import("./pages/HealthBlog"));
const Doctors = lazy(() => import("./pages/Doctors"));
const Reviews = lazy(() => import("./pages/Reviews"));
const Doctor = lazy(() => import("./pages/Doctor"));
const Profile = lazy(() => import("./pages/Profile"));
const Appointments = lazy(() => import("./pages/Appointments"));

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <AuthProvider>
        <GlobalStyles />
        <Suspense
          fallback={
            <FullPage>
              <Spinner />
            </FullPage>
          }>
          <BrowserRouter>
            <Routes>
              <Route element={<AppLayout />}>
                <Route path="/" element={<Landing />} />
                <Route path="/auth" element={<Auth />}>
                  <Route index element={<Navigate replace to="register" />} />
                  <Route path="register" element={<SignupForm />} />
                  <Route path="login" element={<LoginForm />} />
                </Route>
                <Route
                  path="/doctors"
                  element={
                    <ProtectedRoute>
                      <Doctors />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/doctors/doctor/:id"
                  element={
                    <ProtectedRoute>
                      <Doctor />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/booked-appointments"
                  element={
                    <ProtectedRoute>
                      <Appointments />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/health-blog"
                  element={
                    <ProtectedRoute>
                      <HealthBlog />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/reviews"
                  element={
                    <ProtectedRoute>
                      <Reviews />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/profile"
                  element={
                    <ProtectedRoute>
                      <Profile />
                    </ProtectedRoute>
                  }
                />
              </Route>
            </Routes>
          </BrowserRouter>
        </Suspense>
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
