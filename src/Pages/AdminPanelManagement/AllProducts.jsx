import React from "react";
import OutletLayout from "../../Components/Navbar/OutletLayout";
import img from '../../assets/allproducts.jpg';


const AllProducts = () => {
    return (
        <div>
        <OutletLayout
          title="Admin Panel Management"
          headline="View All Products"
          subtitle="Effortlessly Manage Your Products: Edit, Delete, Highlight, and More."
          img={img}
          description="To view and manage all products in Markdowntoday, go to the 'Products' section within the admin dashboard. Click on 'View All Products' or 'All Products' to access a comprehensive list of all your products. In this list, you can take various actions: 'Edit' to make changes to a specific product, 'Delete' to remove a product from your inventory, 'Change Active Status' to toggle a product's availability, and 'Highlight' to feature specific products. These options allow you to efficiently manage and customize your product catalog as needed. Please note that the exact terms and layout may vary depending on your Markdowntoday version or dashboard theme."
        ></OutletLayout>
      </div>
    );
};

export default AllProducts;