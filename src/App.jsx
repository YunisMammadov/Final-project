import { Route, Routes } from "react-router-dom";
import "./App.css";
import { lazy, Suspense, useEffect } from "react";
import Layout from "./components/layout/Layout";
import Layout1 from "./components/layout/Layout1";
import { connect } from "react-redux";
import My_profile from "./pages/my_profile/My_profile";
import Product_listing from "./pages/product/Product_listing";
import Product_detail from "./pages/product_detail/Product_detail";
const Login = lazy(() => import("./pages/registration/Login"));
const Signup = lazy(() => import("./pages/registration/Signup"));
const Enter_otp = lazy(() => import("./pages/registration/Enter_otp"));
const Forgot_password = lazy(() =>
  import("./pages/registration/Forgot_password")
);
const Home = lazy(() => import("./pages/home/Home"));

function App({ dispatch }) {
  useEffect(() => {
    fetch("http://localhost:1313/categories")
      .then((a) => a.json())
      .then((a) =>
        dispatch({
          type: "SET_CATEGORY",
          payload: a,
        })
      )
      .then(() => {
        fetch("http://localhost:1313/products")
          .then((a) => a.json())
          .then((a) =>
            dispatch({
              type: "SET_PRODUCTS",
              payload: [...a],
            })
          );
      });
  }, []);
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
    },
  ];
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Suspense>{<Home />}</Suspense>} />
          <Route path="/product" element={<Product_listing />} />
          <Route path="/product_detail" element={<Product_detail />} />
        </Route>


        <Route element={<Layout1 />}>
          <Route path="/my_profile" element={<My_profile />} />
        </Route>

        {routes.map((a) => (
          <Route
            key={a.path}
            path={a.path}
            element={<Suspense>{a.element}</Suspense>}
          />
        ))}
      </Routes>
    </>
  );
}
export default connect()(App);
