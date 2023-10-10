import React from "react";
import OutletLayout from "../../Components/Navbar/OutletLayout";
import img from '../../assets/coupons.jpg';

const ManagingCoupons = () => {
    return (
        <div>
            <OutletLayout
                title="Admin Panel Management"
                headline="Managing Coupons"
                subtitle="Effortlessly Manage Coupons: Add, Update, and Delete with Ease"
                img={img}
                description="To manage coupons in Markdowntoday, navigate to the 'Deals' section within the admin dashboard and select 'Set Coupons.' Here, you will find a list displaying all your coupons, with options to 'Update' or 'Delete' each coupon as needed. Clicking the 'Update' button allows you to modify the details of a specific coupon, while clicking 'Delete' removes a coupon from your list. Additionally, you can create a new coupon by using the 'Add New Coupon' button, enabling you to input the details for the new coupon. This straightforward process facilitates efficient coupon management within your Markdowntoday platform. Please note that the exact terms and layout may vary depending on your Markdowntoday version or dashboard theme."
            ></OutletLayout>
        </div>
    );
};

export default ManagingCoupons;
