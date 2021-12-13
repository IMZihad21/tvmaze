import { Link } from "react-router-dom";
import { Shows } from "../../../interfaces/Show";
import './ShortShows.css'

interface iProps {
    show: Shows
}

const ShortShows = ({ show }: iProps) => {
    return (
        <div id='shortShow-container'>
            <div id='shortShowImages-container'>
                <img src={show.show.image.original} alt="" />
            </div>
            <div id='shortShowInfo-container'>
                <h1>{show.show.name}</h1>
                <p>Score <span>{show.score.toFixed(2)}</span></p>
                <Link id='shortShowInfo-detailsbtn' to={`shows/${show.show.id}`}>Details</Link>
            </div>
        </div>
    );
};

export default ShortShows;