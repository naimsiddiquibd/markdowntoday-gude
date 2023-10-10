import React from "react";
import OutletLayout from "../../Components/Navbar/OutletLayout";
import img from '../../assets/favicon.jpg';

const ChangingFavIcon = () => {
    return (
        <div>
      <OutletLayout
        title="Web Front Page Controlling"
        headline="Changing Favicon"
        subtitle="Updating Your Favicon in Markdowntoday: Easy Steps!"
        img={img}
        description="To change the favicon in Markdowntoday, go to the General Settings section in the admin dashboard. Look for the Favicon option and click on it. You can then choose a file by clicking the relevant button and uploading your preferred favicon image from your computer. Remember to save your changes by clicking an appropriate save or update button within the Favicon settings. The exact terminology and layout may vary depending on your specific Markdowntoday version or dashboard theme."
      ></OutletLayout>
    </div>
    );
};

export default ChangingFavIcon;