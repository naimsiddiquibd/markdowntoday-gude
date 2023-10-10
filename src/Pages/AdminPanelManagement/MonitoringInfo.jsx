import React from "react";
import OutletLayout from "../../Components/Navbar/OutletLayout";
import img from '../../assets/dashboard.jpg';

const MonitoringInfo = () => {
    return (
        <div>
      <OutletLayout
        title="Admin Panel Management"
        headline="Monitoring Info"
        subtitle="Dashboard Overview: Key Metrics and Recent Activity Snapshot"
        img={img}
        description="Upon entering the admin dashboard, you'll immediately access essential monitoring information, including key metrics such as 'Orders Pending,' 'Orders Processing,' and 'Orders Completed' to track the status of your orders. Additionally, you can monitor 'Total Products,' 'Total Customers,' and 'Total Posts' to gain insights into your inventory, customer base, and content volume. The 'New Customers' section lets you stay updated on recently registered customers, while 'Total Sales' provides an overview of revenue generated. For real-time activity, you'll find details on the 'Recent Order' and the most recent customer registration in the 'Recent Customer' section. This dashboard is designed to offer a comprehensive overview, enabling efficient management of your platform."
      ></OutletLayout>
    </div>
    );
};

export default MonitoringInfo;