import React from "react";
import OutletLayout from "../../Components/Navbar/OutletLayout";
import img from '../../assets/blog.jpg';

const ManagingBlogPost = () => {
    return (
        <div>
        <OutletLayout
            title="Admin Panel Management"
            headline="Managing Blog Post"
            subtitle="Effortlessly Manage Blog Posts: Edit, Delete, and Create Easily."
            img={img}
            description="To manage blog posts in Markdowntoday, navigate to the 'Blog' section within the admin dashboard and select 'Posts.' Here, you will find a list displaying all your blog posts, with options to 'Edit' or 'Delete' each post as needed. Clicking the 'Edit' button allows you to modify the content and details of a specific blog post, while clicking 'Delete' removes a post from your blog. Additionally, you can create a new blog post by using the 'Add New Post' button, allowing you to write, publish, and manage fresh articles seamlessly. This user-friendly process streamlines blog post management within your Markdowntoday platform. Please note that the exact terms and layout may vary depending on your Markdowntoday version or dashboard theme."
        ></OutletLayout>
    </div>
    );
};

export default ManagingBlogPost;