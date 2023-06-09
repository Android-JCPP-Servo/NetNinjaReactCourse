import BlogList from "./BlogList";
import useFetch from "./UseFetch";

const Home = () => {
    const {data, isPending, error} = useFetch("http://localhost:8000/blogs");
    return ( 
        <div className="home">
            {error && <div className="error">{error}</div>}
            {isPending && <div>Loading...</div>}
            {data && <BlogList blogs={data} title="All Blogs" />}
        </div>
    );
}
 
export default Home;