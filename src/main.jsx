import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from "./Pages/Home/Home";
import Login from "./Pages/UserAccessibility/Login";
import Signup from "./Pages/UserAccessibility/Signup";
import ChangingLogo from "./Pages/WebFrontPageControlling/ChangingLogo";
import ChangingMainBanner from "./Pages/WebFrontPageControlling/ChangingMainBanner";
import ChangingFavIcon from "./Pages/WebFrontPageControlling/ChangingFavIcon";
import ChangingHomePageSlider from "./Pages/WebFrontPageControlling/ChangingHomePageSlider";
import ChangingTopSmallBanner from "./Pages/WebFrontPageControlling/ChangingTopSmallBanner";
import ChangingLargeBanner from "./Pages/WebFrontPageControlling/ChangingLargeBanner";
import MonitoringInfo from "./Pages/AdminPanelManagement/MonitoringInfo";
import AddProduct from "./Pages/AdminPanelManagement/AddProduct";
import AllProducts from "./Pages/AdminPanelManagement/AllProducts";
import ModifyProducts from "./Pages/AdminPanelManagement/ModifyProducts";
import MonitoringOrders from "./Pages/AdminPanelManagement/MonitoringOrders";
import ApprovingReferral from "./Pages/AdminPanelManagement/ApprovingReferral";
import ManagingPartners from "./Pages/AdminPanelManagement/ManagingPartners";
import ManagingCustomers from "./Pages/AdminPanelManagement/ManagingCustomers";
import ManagingCoupons from "./Pages/AdminPanelManagement/ManagingCoupons";
import ManagingBlogPost from "./Pages/AdminPanelManagement/ManagingBlogPost";
import ManagingSubscribers from "./Pages/AdminPanelManagement/ManagingSubscribers";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "/Signing-up-as-a-new-user",
        element: <Signup />,
      },
      {
        path: "/logging-in",
        element: <Login />,
      },
      {
        path: "/changing-logo",
        element: <ChangingLogo />,
      },
      {
        path: "/changing-main-banner",
        element: <ChangingMainBanner />,
      },
      {
        path: "/changing-favicon",
        element: <ChangingFavIcon />,
      },
      {
        path: "/changing-homepage-slider",
        element: <ChangingHomePageSlider />,
      },
      {
        path: "/changing-top-small-banners",
        element: <ChangingTopSmallBanner />,
      },
      {
        path: "/changing-large-banner",
        element: <ChangingLargeBanner />,
      },
      {
        path: "/monitoring-info",
        element: <MonitoringInfo />,
      },
      {
        path: "/add-products",
        element: <AddProduct />,
      },
      {
        path: "/view-all-products",
        element: <AllProducts />,
      },
      {
        path: "/modify-product",
        element: <ModifyProducts />,
      },
      {
        path: "/monitoring-orders",
        element: <MonitoringOrders />,
      },
      {
        path: "/approving-referral",
        element: <ApprovingReferral />,
      },
      {
        path: "/managing-partners",
        element: <ManagingPartners />,
      },
      {
        path: "/managing-customers",
        element: <ManagingCustomers />,
      },
      {
        path: "/managing-coupons",
        element: <ManagingCoupons />,
      },
      {
        path: "/managing-blogs",
        element: <ManagingBlogPost />,
      },
      {
        path: "/managing-subscribers",
        element: <ManagingSubscribers />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);