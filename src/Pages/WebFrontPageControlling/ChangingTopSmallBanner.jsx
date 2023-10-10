import React from "react";
import OutletLayout from "../../Components/Navbar/OutletLayout";
import img from '../../assets/topsmallbanner.jpg';

const ChangingTopSmallBanner = () => {
    return (
        <div>
        <OutletLayout
          title="Web Front Page Controlling"
          headline="Changing Top Small Banners"
          subtitle="Manage Top Banners Easily: Add, Edit, Delete in Markdowntoday."
          img={img}
          description="To change or manage the top small banners in Markdowntoday, access the 'Home Page Settings' within the admin dashboard. Inside 'Home Page Settings,' locate and click on 'Top Small Banners.' Here, you can add a new banner by selecting 'Add New Banner' and configuring it with images, text, links, or other content as desired. Save the banner changes using the provided 'Save' or 'Publish' button. To edit an existing banner, click the 'Edit' button next to the banner you wish to modify and make your adjustments before saving. To delete a banner, simply click the 'Delete' button associated with the banner you want to remove and confirm the deletion when prompted. The specific terms and layout may vary depending on your Markdowntoday version or dashboard theme."
        ></OutletLayout>
      </div>
    );
};

export default ChangingTopSmallBanner;