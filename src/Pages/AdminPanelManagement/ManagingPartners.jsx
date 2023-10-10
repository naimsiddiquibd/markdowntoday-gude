import React from "react";
import OutletLayout from "../../Components/Navbar/OutletLayout";
import img from '../../assets/partners.jpg';

const ManagingPartners = () => {
    return (
        <OutletLayout
        title="Admin Panel Management"
        headline="Managing Partners"
        subtitle="Effortless Partner Management: Edit and Add Partners with Ease"
        img={img}
        description="To manage partners in Markdowntoday, access the 'Manage Partners' section within the admin dashboard. Here, you'll find a list of all your partners, and each partner entry will have an 'Edit' button associated with it. Click on the 'Edit' button next to a specific partner to make any necessary changes or updates to their information. Additionally, to add a new partner, simply click on the 'Add New Partner' button and provide the required details for the new partner. This straightforward process enables efficient partner management within your Markdowntoday platform. Please note that the exact terms and layout may vary depending on your Markdowntoday version or dashboard theme."
      ></OutletLayout>
    );
};

export default ManagingPartners;