import React from "react";
import OutletLayout from "../../Components/Navbar/OutletLayout";
import img from '../../assets/addproduct.JPG';


const AddProduct = () => {
    return (
        <div>
        <OutletLayout
          title="Admin Panel Management"
          headline="Add Products"
          subtitle="Effortlessly Add Physical Products: Markdowntoday Admin Guide"
          img={img}
          description="To add a new product in Markdowntoday as an admin, access the 'Product' section within the admin dashboard. Once there, select the 'Add New Product' option. You'll be prompted to choose the product type, with options for 'Physical,' 'Digital,' or 'Scrape.' To add a physical product, select 'Physical' and proceed to enter all relevant product information, including the product name, description, price, quantity available, and any other necessary specifications. After inputting these details, click the 'Create Product' or equivalent button to add the new physical product to your inventory. Keep in mind that the exact phrasing and layout may vary depending on your Markdowntoday version or dashboard theme."
        ></OutletLayout>
      </div>
    );
};

export default AddProduct;