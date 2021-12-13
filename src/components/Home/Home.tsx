import { useEffect, useState } from "react";
import { Shows } from "../../interfaces/Show";
import ShortShows from "../Shows/ShortShows/ShortShows";
import './Home.css'

const Home = () => {
    const [ shows, setShows ] = useState<Array<Shows>>();
    useEffect(() => {
        fetch('https://api.tvmaze.com/search/shows?q=all')
            .then(res => res.json())
            .then(data => setShows(data))
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div id='shows-container'>
            {
                shows?.map(e => <ShortShows key={e.score} show={e} />)
            }
        </div>
    );
};

export default Home;