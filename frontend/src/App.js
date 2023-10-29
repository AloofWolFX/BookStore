import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import LandingPage from "./screens/LandingPage/LandingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Books from "./screens/Books/Books";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen/RegisterScreen";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" Component={LandingPage} exact />
        <Route path="/books" Component={() => <Books />} exact />
        <Route path="/login" Component={LoginScreen} exact />
        <Route path="/register" Component={RegisterScreen} exact />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
export default App;
