import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFoundPage from "./app/404/NotFoundPage";
import Login from "./app/auth/Login";
import EmployeePage from "./app/dashboard/employee/EmployeePage";
import RolePage from "./app/dashboard/role/RolePage";
import Navbar from "./components/Navbar/Navbar";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<NotFoundPage />} />
        <Route path="/" element={<Login/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/employee" element={<Navbar><EmployeePage /></Navbar>} />
        <Route path="/role" element={<Navbar><RolePage /></Navbar>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
