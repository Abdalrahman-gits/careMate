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

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Landing />} />
            <Route path="auth" element={<Auth />}>
              <Route index element={<Navigate replace to="register" />} />
              <Route path="register" element={<SignupForm />} />
              <Route path="login" element={<LoginForm />} />
            </Route>
            <Route path="doctors" element={<Doctors />} />
            <Route path="health-blog" element={<HealthBlog />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
