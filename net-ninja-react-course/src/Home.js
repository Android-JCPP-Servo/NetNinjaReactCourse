import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState([]);

    const [name, setName] = useState('"Gears"');

    useEffect(() => {
        console.log("useEffect ran!");
        console.log(name);
    }, [name]);

    const handleDelete = id => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    return ( 
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
            <button onClick={() => setName("Jackson")}>Change Name</button>
            <p>{name}</p>
        </div>
    );
}
 
export default Home;