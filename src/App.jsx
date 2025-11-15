import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Doctors from "./pages/Doctors";
import HealthBlog from "./pages/HealthBlog";
import Reviews from "./pages/Reviews";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Landing />} />
            <Route path="auth" element={<Login />} />
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
