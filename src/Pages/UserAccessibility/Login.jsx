import React from "react";
import OutletLayout from "../../Components/Navbar/OutletLayout";
import login from '../../assets/login.jpg';

const Login = () => {
  return (
    <div>
      <OutletLayout
        title="User Accessibility"
        headline="Logging in"
        subtitle="Getting enter the dashboard for the authenticated users"
        img={login}
        description="To access the Markdowntoday admin dashboard, begin by navigating to the login page at <a class='text-blue-500' href='https://ap.markdowntoday.com/admin/login'>https://ap.markdowntoday.com/admin/login</a>. Here, enter your registered email address and password. If you've forgotten your password, simply click on the 'Forgot password' link on the login page, enter your email, and follow the instructions sent to your email inbox to reset your password. After successfully resetting your password, return to the login page and enter your email and new password to access the admin dashboard. If you encounter any difficulties, don't hesitate to contact Markdowntoday's support for assistance."
      ></OutletLayout>
    </div>
  );
};

export default Login;
