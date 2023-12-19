import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import CustomThemeProvider from './libs/muiTheme/colorProvider';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// const router = createHashRouter([
//   // {
//   //   path: "/*",
//   //   element: <App />,
//   // },
//   {
//     path: "/",
//     element: <Login />,
//   },
//   {
//     path: "/login",
//     element: <Login />,
//   },
//   {
//     path: "/employee",
//     element: <EmployeePage />,
//   },
//   {
//     path: "/role",
//     element: <RolePage />,
//   },
// ]);

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<></>}>
//       <Route path="login" element={<Login />} />
//       <Route path="role" element={<RolePage />} />
//       <Route path="employee" element={<EmployeePage />} />
//       {/* ... etc. */}
//     </Route>
//   )
// );

root.render(
  <React.StrictMode>
    <CustomThemeProvider>
      <App />
    </CustomThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
