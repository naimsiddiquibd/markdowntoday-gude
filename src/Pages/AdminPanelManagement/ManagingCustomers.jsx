import React from "react";
import OutletLayout from "../../Components/Navbar/OutletLayout";
import img from '../../assets/managingcustomers.jpg';

const ManagingCustomers = () => {
    return (
        <OutletLayout
        title="Admin Panel Management"
        headline="Managing Customers"
        subtitle="Effortlessly Manage Customers: Details, Edit, Email, Delete, Status Contro"
        img={img}
        description="To manage customers in Markdowntoday, go to the 'Customers' section within the admin dashboard and select 'Customers List.' Here, you can view a list of all your customers. To access detailed information about a specific customer, click on the 'Details' button associated with that customer. If you need to edit a customer's information, use the 'Edit' option. Admins can also communicate with customers directly by utilizing the 'Send Email' feature. For account management, you can remove a customer from your database by clicking the 'Delete' button next to their name. Additionally, you have the ability to change a customer's status from 'Unblocked' to 'Blocked' or vice versa, providing flexibility in account management and security. This streamlined process allows for effective customer management within your Markdowntoday platform. Please note that the exact terms and layout may vary depending on your Markdowntoday version or dashboard theme."
      ></OutletLayout>
    );
};

export default ManagingCustomers;