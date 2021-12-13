import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Show } from "../../../interfaces/Show";
import { useForm, SubmitHandler } from "react-hook-form";
import './DetailedShows.css'
import { Link } from "react-router-dom";

interface FormValues {
    showName: string;
    customerName: string;
    customerEmail: string;
    seatQuantity: number;
}

const DetailedShows = () => {
    const { showID } = useParams();
    const [ show, setShow ] = useState<Show>();
    const [ bookingInfo, setBookingInfo ] = useState<FormValues>();
    const [ showForm, setShowForm ] = useState<Boolean>(false);
    const [ booked, setBooked ] = useState<Boolean>(false);
    const { register, handleSubmit } = useForm<FormValues>();
    const onSubmit: SubmitHandler<FormValues> = data => {
        if (data.customerName === '') {
            alert('Please provide your name')
            return
        };
        if (data.customerEmail === '') {
            alert('Please Provide your Email')
            return
        };
        setBookingInfo(data)
        localStorage.setItem(show?.name!, JSON.stringify(data))
        setBooked(true);
    };
    const handleChangeBooking = () => {
        setBooked(false);
        setShowForm(true);
    };

    useEffect(() => {
        fetch(`https://api.tvmaze.com/shows/${showID}`)
            .then(res => res.json())
            .then(data => {
                setShow(data);
                const storedData: FormValues = JSON.parse(localStorage.getItem(data.name)!);
                if (storedData) {
                    setBookingInfo(storedData)
                    setBooked(true)
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }, [ showID ]);

    if (!show?.name) {
        return (
            <div>
                <h1 id='loadingData'>Please Wait a moment!</h1>
            </div>
        )
    }

    return (
        <div id='detailedShow-container'>
            <div id='detailedShowImage-container'>
                <img src={show?.image.original} alt="" />
            </div>
            <div id='detailedShowInfo-container'>
                <Link id='detailedShowInfo-homebtn' to={`/`}>Back to List</Link>
                <h1>{show?.name}</h1>
                <div dangerouslySetInnerHTML={{ __html: show?.summary! }} />
                <p>This {show?.type} show was Premiered On <span>{show?.premiered}</span></p>
                <div id='bookingManagement'>
                    {
                        booked ?
                            (<div>
                                <p>This show is already booked!</p>
                                <p>Booked by <span>{bookingInfo?.customerName}</span></p>
                                <button className='detailedShowInfo-bookbtn' onClick={handleChangeBooking}>Change booking?</button>
                            </div>) :
                            (<div>
                                {
                                    !showForm && <button className='detailedShowInfo-bookbtn' onClick={() => setShowForm(true)}>Get ticket</button>
                                }
                                {
                                    showForm && <form id='bookingForm' onSubmit={handleSubmit(onSubmit)}>
                                        <label htmlFor="showName">Name of the Show</label>
                                        <input id='showName' type='text' defaultValue={show?.name} readOnly {...register("showName")} />
                                        <label htmlFor="customerName">Enter your Name</label>
                                        <input id='customerName' type='text' defaultValue={bookingInfo?.customerName} {...register("customerName")} />
                                        <label htmlFor="customerEmail">Enter your Email</label>
                                        <input id='customerEmail' type="email" defaultValue={bookingInfo?.customerEmail} {...register("customerEmail")} />
                                        <label htmlFor="seatQuantity">How many seats do you want to book?</label>
                                        <input id='seatQuantity' type="number" defaultValue={bookingInfo?.seatQuantity ? bookingInfo?.seatQuantity : 1} min={1} {...register("seatQuantity")} />

                                        <button className='detailedShowInfo-bookbtn' type="submit">Book Now!</button>
                                    </form>
                                }
                            </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default DetailedShows;