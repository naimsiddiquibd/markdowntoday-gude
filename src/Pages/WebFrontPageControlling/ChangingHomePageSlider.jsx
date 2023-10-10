import React from "react";
import OutletLayout from "../../Components/Navbar/OutletLayout";
import img from '../../assets/slider.jpg';

const ChangingHomePageSlider = () => {
    return (
        <div>
      <OutletLayout
        title="Web Front Page Controlling"
        headline="Changing Homepage Slider"
        subtitle="Manage Sliders Effortlessly in Markdowntoday Admin Dashboard"
        img={img}
        description="To manage sliders in Markdowntoday, access the 'Home Page Settings' within the admin dashboard. Inside 'Home Page Settings', you'll find the 'Slider Management' option. To create a new slider, select 'Add New Slider'. Configure the slider by adding images, text, links, or other content, following the on-screen instructions, and save it using the provided 'Save' or 'Publish' button. To edit an existing slider, locate the slider you want to modify in the list, click the 'Edit' button, make your changes, and save. To delete a slider, simply click the 'Delete' button next to the slider you wish to remove and confirm the deletion when prompted. Keep in mind that the specific terms and layout may vary based on your particular Markdowntoday version or dashboard theme."
      ></OutletLayout>
    </div>
    );
};

export default ChangingHomePageSlider;