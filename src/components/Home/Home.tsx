import { useEffect, useState } from "react";

const Home = () => {
    const [ shows, setShows ] = useState([]);
    useEffect(() => {
        fetch('https://api.tvmaze.com/search/shows?q=all')
            .then(res => res.json())
            .then(data => setShows(data))
            .catch((err) => {
                console.log(err);

            });
    }, [])
    return (
        <div>
            <h1>this is home</h1>
        </div>
    );
};

export default Home;