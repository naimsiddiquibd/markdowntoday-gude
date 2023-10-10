import React from "react";
import OutletLayout from "../../Components/Navbar/OutletLayout";
import img from '../../assets/subscribers.jpg';

const ManagingSubscribers = () => {
    return (
        <div>
        <OutletLayout
            title="Admin Panel Management"
            headline="Managing Subscribers"
            subtitle="Effortlessly Manage and Export Subscribers in Markdowntoday Platform"
            img={img}
            description="To manage subscribers in Markdowntoday, go to the 'Subscribers' section within the admin dashboard. Here, you'll find a list displaying all your subscribers. To download this list for further analysis or communication, simply locate the 'Download CSV' or similar option and click it. This action will save the subscriber list as a CSV file, which you can easily open in Excel or Google Sheets. This straightforward process allows you to efficiently manage and export your subscriber data within the Markdowntoday platform. Please note that the exact terms and layout may vary depending on your Markdowntoday version or dashboard theme."
        ></OutletLayout>
    </div>
    );
};

export default ManagingSubscribers;