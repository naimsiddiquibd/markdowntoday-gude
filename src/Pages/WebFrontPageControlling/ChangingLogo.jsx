import React from "react";
import OutletLayout from "../../Components/Navbar/OutletLayout";
import img from '../../assets/changelogo.jpg';

const ChangingLogo = () => {
  return (
    <div>
      <OutletLayout
        title="Web Front Page Controlling"
        headline="Changing Logo"
        subtitle="Manage Logos Easily in Markdowntoday's General Settings"
        img={img}
        description="To manage logos in Markdowntoday, navigate to the General Settings section in the admin dashboard. Within General Settings, find the Logo or Logo Settings option. Here, you can update the header logo, footer logo, and invoice logo by selecting or uploading the desired image files. Make sure the images meet the recommended dimensions and format. After making your logo changes in each section, save the modifications. Keep in mind that the exact layout and terminology may vary based on your specific Markdowntoday version or dashboard theme."
      ></OutletLayout>
    </div>
  );
};

export default ChangingLogo;
