import React from "react";
import OutletLayout from "../../Components/Navbar/OutletLayout";
import img from '../../assets/refferal.jpg';

const ApprovingReferral = () => {
    return (
        <div>
      <OutletLayout
        title="Admin Panel Management"
        headline="Approving Referral User"
        subtitle="Streamline Referral Approvals: Easy Validation in Markdowntoday Dashboard."
        img={img}
        description="To approve a referral user in Markdowntoday, log in to the admin dashboard and navigate to the 'Referrals' section. Within this section, select 'Referrals Validation' to access a list that includes 'Referrer Name,' 'Used Code,' and 'Recipient Name.' In this list, you will find an action button that enables the admin to approve a referral. Click on this button to validate and approve the referral user. This straightforward process allows you to efficiently manage referral approvals. Please note that the exact terms and layout may vary depending on your Markdowntoday version or dashboard theme."
      ></OutletLayout>
    </div>
    );
};

export default ApprovingReferral;