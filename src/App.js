import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import OnBoard from "./components/Onboard";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Nav from "./Nav";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="onboard" element={<OnBoard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
