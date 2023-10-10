import React from "react";
import OutletLayout from "../../Components/Navbar/OutletLayout";
import img from '../../assets/landingbanner.jpg';

const ChangingMainBanner = () => {
  return (
    <div>
      <OutletLayout
        title="Web Front Page Controlling"
        headline="Changing Main Banner"
        subtitle="Revamp Your Homepage with New Banners in Markdowntoday"
        img={img}
        description="To change or add a new banner in Markdowntoday, access the Home Page Settings within the admin dashboard. Under Home Page Settings, find the Landing Banners option and click on it. From there, select Add New Banner to begin the process. Configure the banner by providing the image or graphics you want, adding relevant text and links, and adjusting settings like display duration or position on the homepage. After making your desired changes, save them by clicking the Save or Publish button. Please be aware that the terminology and layout might vary depending on your specific Markdowntoday version or dashboard theme."
      ></OutletLayout>
    </div>
  );
};

export default ChangingMainBanner;
