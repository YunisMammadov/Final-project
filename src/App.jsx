import { Route, Routes } from "react-router-dom";
import "./App.css";
import { lazy, Suspense, useEffect } from "react";
import Layout from "./components/layout/Layout";
import Layout1 from "./components/layout/Layout1";
import { connect } from "react-redux";
const Product_listing = lazy(() => import("./pages/product/Product_listing"));
const Product_detail = lazy(() =>
  import("./pages/product_detail/Product_detail")
);
const My_profile = lazy(() => import("./pages/my_profile/My_profile"));
const Checkout = lazy(() =>
  import("./pages/payment_process/checkout/Checkout")
);
const ShippingAddress = lazy(() =>
  import("./pages/payment_process/shippingAddress/ShippingAddress")
);

const Payment_review = lazy(() =>
  import("./pages/payment_process/payment_review/Payment_review")
);
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
          <Route
            path="/"
            element={
              <Suspense>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="/product"
            element={
              <Suspense>
                <Product_listing />
              </Suspense>
            }
          />
          <Route
            path="/:id/product_detail"
            element={
              <Suspense>
                <Product_detail />
              </Suspense>
            }
          />
        </Route>

        <Route element={<Layout1 />}>
          <Route
            path="/my_profile"
            element={
              <Suspense>
                <My_profile />
              </Suspense>
            }
          />
          <Route
            path="/checkout"
            element={
              <Suspense>
                <Checkout />
              </Suspense>
            }
          />
          <Route
            path="/shippingaddress"
            element={
              <Suspense>
                <ShippingAddress />
              </Suspense>
            }
          />
          
          <Route
            path="/payment_review"
            element={
              <Suspense>
                <Payment_review />
              </Suspense>
            }
          />
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
