import React from "react";
import OutletLayout from "../../Components/Navbar/OutletLayout";
import img from '../../assets/largebanner.JPG';

const ChangingLargeBanner = () => {
    return (
        <div>
        <OutletLayout
          title="Web Front Page Controlling"
          headline="Changing Large Banner"
          subtitle="Effortlessly Manage Large Banners in Markdowntoday Dashboard."
          img={img}
          description="To change or manage the large banners in Markdowntoday, access the 'Home Page Settings' within the admin dashboard. Inside 'Home Page Settings,' find and click on 'Large Banners.' Here, you can add a new banner by selecting 'Add New Banner' and customize it with images, text, links, or other content as needed. Save the banner changes using the provided 'Save' or 'Publish' button. To edit an existing banner, click the 'Edit' button next to the banner you wish to modify, make your adjustments, and save them. If you need to remove a banner, locate the 'Delete' button associated with the banner you want to delete, and confirm the deletion when prompted. Specific terms and layout may vary depending on your Markdowntoday version or dashboard theme."
        ></OutletLayout>
      </div>
    );
};

export default ChangingLargeBanner;