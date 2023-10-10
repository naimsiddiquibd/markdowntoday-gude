import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { Link, Outlet } from "react-router-dom";
import {
  FaUser,
  FaCog,
  FaClipboardList,
  FaShoppingCart,
  FaMoneyBill,
  FaFile,
  FaListAlt,
  FaShoppingBasket,
  FaTags,
  FaChartLine,
  FaBullhorn,
  FaStore,
  FaThumbsUp,
  FaUsers,
  FaDollarSign,
  FaNewspaper,
  FaStar,
  FaCreditCard,
} from "react-icons/fa";// Import suitable icons

const sidebarData = [
  {
    title: "User Accessibility",
    items: [
      { text: "Signing up as a new user", route: "/Signing-up-as-a-new-user", icon: <FaUser /> },
      { text: "Logging in", route: "/logging-in", icon: <FaUser /> },
    ],
  },
  {
    title: "Web frontpage controlling",
    items: [
      { text: "Changing logo", route: "/changing-logo", icon: <FaCog /> },
      { text: "Changing main Banner", route: "/changing-main-banner", icon: <FaBullhorn /> },
      // { text: "Changing loader", route: "/change-loader", icon: <FaCog /> },
      { text: "Changing favicon", route: "/changing-favicon", icon: <FaMoneyBill /> },
      { text: "Changing homepage slider", route: "/changing-homepage-slider", icon: <FaFile /> },
      { text: "Changing top small banners", route: "/changing-top-small-banners", icon: <FaBullhorn /> },
      { text: "Changing large banner", route: "/changing-large-banner", icon: <FaBullhorn /> },
      // { text: "Switching on/off banner or homepage content", route: "/switch-content", icon: <FaCog /> },
    ],
  },
  {
    title: "Admin Panel Management",
    items: [
      { text: "Monitoring Info", route: "/monitoring-info", icon: <FaClipboardList /> },
      // { text: "Approving new user", route: "/approve-user", icon: <FaThumbsUp /> },
      { text: "Add Products", route: "/add-products", icon: <FaShoppingBasket /> },
      { text: "View all products", route: "/view-all-products", icon: <FaListAlt /> },
      { text: "Modify Products", route: "/modify-product", icon: <FaShoppingBasket /> },
      { text: "Monitoring orders", route: "/monitoring-orders", icon: <FaShoppingCart /> },
      { text: "Approving referral status for new user", route: "/approving-referral", icon: <FaThumbsUp /> },
      { text: "Managing partners", route: "/managing-partners", icon: <FaUsers /> },
      { text: "Viewing and managing customer", route: "/managing-customers", icon: <FaUsers /> },
      // { text: "Monitoring withdrawals", route: "/monitor-withdrawals", icon: <FaDollarSign /> },
      // { text: "Managing Category (Main, sub, child)", route: "/manage-categories", icon: <FaTags /> },
      { text: "Managing coupons", route: "/managing-coupons", icon: <FaTags /> },
      { text: "Creating a Blog post", route: "/managing-blogs", icon: <FaNewspaper /> },
      // { text: "Maintaining reviews", route: "/maintain-reviews", icon: <FaStar /> },
      { text: "Manage Subscribers", route: "/managing-subscribers", icon: <FaCreditCard /> },
    ],
  },
];


const Home = () => {
  return (
    <div>
    <Navbar htmlForValue="my-drawer-2" />
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-start justify-start md:p-10 p-2">
        <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          {sidebarData.map((section, index) => (
            <div key={index}>
              <li className="text-base font-bold mt-4 mb-2 font-title">{section.title}</li>
              <ul>
                {section.items.map((item, i) => (
                  <li key={i}>
                    <Link to={item.route}>
                      {item.icon} {item.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </ul>
      </div>
    </div>
  </div>
  );
};

export default Home;
