import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./app/auth/Login";
import EmployeePage from "./app/dashboard/employee/EmployeePage";
import RolePage from "./app/dashboard/role/RolePage";
import Navbar from "./components/Navbar/Navbar";
import CustomThemeProvider from "./libs/muiTheme/colorProvider";

function App() {

  return (
    <CustomThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path='*' element={<Navigate to={'/login'} />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/employee" element={<Navbar><EmployeePage /></Navbar>} />
          <Route path="/role" element={<Navbar><RolePage /></Navbar>} />
      </Routes>
      </BrowserRouter>
    </CustomThemeProvider>
  );
}

export default App;
