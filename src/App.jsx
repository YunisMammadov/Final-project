import { Route, Routes } from "react-router-dom";
import "./App.css";
import { lazy, Suspense } from "react";
const Login = lazy(() => import("./pages/registration/Login"));
const Signup = lazy(() => import("./pages/registration/Signup"));
const Enter_otp = lazy(() => import("./pages/registration/Enter_otp"));
const Forgot_password = lazy(() => import("./pages/registration/Forgot_password"));


function App() {
  const routes = [
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/forgot_password",
      element: <Forgot_password />,
    },
    {
      path: "/enter_otp",
      element: <Enter_otp />,
    }
  ];
  return (
    <>
      <Routes>
        {routes.map((a) => (
          <Route
            key={a.path}
            path={a.path}
            element={
              <Suspense fallback={<div>Loading...</div>}>{a.element}</Suspense>
            }
          />
        ))}
      </Routes>
    </>
  );
}
export default App;
