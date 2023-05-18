import { useState } from "react";

const Home = () => {
    const [name, setName] = useState("Hillary");
    const [age, setAge] = useState(28);
    const handleClick = () => {
        setName("Rose");
        setAge(29);
    }
    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <p>{name} is {age} years old.</p>
            <button onClick={handleClick}>Click Me!</button>
        </div>
    );
}
 
export default Home;