import React from "react";
import OutletLayout from "../../Components/Navbar/OutletLayout";
import img from '../../assets/editproducts.jpg';

const ModifyProducts = () => {
    return (
        <div>
        <OutletLayout
          title="Admin Panel Management"
          headline="Modify Products"
          subtitle="Easily Modify Products: Edit, Update, and Save Changes"
          img={img}
          description="To modify a product in Markdowntoday, start by logging into the admin dashboard and access the 'Products' section. Click on 'All Products' or 'View All Products' to see a list of your products. Find the specific product you wish to modify and select 'Edit Product.' Inside the product editor, you have the flexibility to change any aspect of the product, including its name, description, price, quantity, and more. Once you've made the necessary adjustments, simply save your changes by clicking the 'Save' or 'Update' button within the product editing interface. This straightforward process allows you to efficiently update product details as needed. Please be aware that the exact terms and layout may vary depending on your Markdowntoday version or dashboard theme."
        ></OutletLayout>
      </div>
    );
};

export default ModifyProducts;