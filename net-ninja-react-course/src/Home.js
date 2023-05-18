import { useState } from "react";

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
    return ( 
        <div className="home">
            {blogs.map(blog => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                </div>
            ))}
        </div>
    );
}
 
export default Home;