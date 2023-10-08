import React from "react";
import OutletLayout from "../../Components/Navbar/OutletLayout";

const Signup = () => {
  return (
    <div>
      <OutletLayout
        title="User Accessibility"
        headline="Signing up as a new user"
        subtitle="Create an account and login as a new user"
        description="To obtain admin privileges on Markdowntoday, please note that administrators cannot self-create accounts. Instead, contact an existing admin within your organization or team and communicate your need for admin access, providing a reason for the request. The existing admin will then liaise with the technical or support team at Markdowntoday on your behalf. After approval, you will receive admin credentials, typically a username and password, to log in to the admin dashboard at <a class='text-blue-500' href='https://ap.markdowntoday.com/admin/login'>https://ap.markdowntoday.com/admin/login</a>. Maintain clear communication with the existing admin and the technical team to ensure a smooth process for gaining admin access."
      ></OutletLayout>
    </div>
  );
};

export default Signup;
