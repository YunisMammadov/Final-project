import { Route, Routes } from "react-router-dom";
import "./App.css";
import { lazy, Suspense } from "react";
const Login = lazy(() => import("./pages/Login"));

function App() {
  const routes = [
    {
      path: "/login",
      element: <Login />,
    },
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
export default App