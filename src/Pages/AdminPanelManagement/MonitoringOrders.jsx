import React from "react";
import OutletLayout from "../../Components/Navbar/OutletLayout";
import img from '../../assets/monitoringorders.jpg';

const MonitoringOrders = () => {
    return (
        <div>
      <OutletLayout
        title="Admin Panel Management"
        headline="Monitoring Orders"
        subtitle="Efficient Order Monitoring: All Orders at Your Fingertips"
        img={img}
        description="To monitor orders in Markdowntoday, log in to the admin dashboard and navigate to the 'Orders' section. Within this section, select 'All Orders' to access a comprehensive list displaying all the orders placed on your platform. In this list, you'll find essential buttons and options for each order, allowing you to view order details, process orders, mark them as complete, and perform other necessary actions. This straightforward process enables efficient order monitoring and management. Please note that the exact terms and layout may vary depending on your Markdowntoday version or dashboard theme."
      ></OutletLayout>
    </div>
    );
};

export default MonitoringOrders;