import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState([
        {
            title: "Wielder History",
            body: "lorem ipsum...",
            author: "Warner Valsain",
            id: 1
        },
        {
            title: "Martial Arts History",
            body: "lorem ipsum...",
            author: "Emma Sodergren",
            id: 2
        },
        {
            title: "Texas History",
            body: "lorem ipsum...",
            author: "Sidd Shady",
            id: 3
        }
    ]);

    const handleDelete = id => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    return ( 
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
        </div>
    );
}
 
export default Home;