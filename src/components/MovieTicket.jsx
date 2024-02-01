import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

const MovieTicket = () => {

    const [mname, setMname] = useState('')
    const [num, setNum] = useState('')
    const [email, setEmail] = useState('')
    const [name,setName] = useState('');
    const [mobNum,setMobNum] = useState('');

    const { id } = useParams();

    useEffect(() => {
      const getMovieDetails = async () => {
        try {
            let result = await fetch(`https://api.tvmaze.com/shows/${id}`);
            result = await result.json();
            setMname(result.name);
        } catch (err) {
            console.error("Error fetching Data ", err);
        }
    };
        getMovieDetails();
    }, [id]);

    


    return (
        <>
            <div className="container">
                <h1 className="head-text">Booking Form</h1>
                <div className="item">
                    <label >Movie Name:</label>
                    <input type="text" placeholder="Enter Name"
                        value={mname} onChange={(e) => setMname(e.target.value)} />
                </div>
                <div className="item">
                  <label>Your Name:</label>
                  <input type="text" placeholder="Enter Your Name"
                    value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="item">
                  <label>Mobile Number:</label>
                  <input type="tel" placeholder="Enter Mobile Number"
                    value={mobNum} onChange={(e) => setMobNum(e.target.val)}/>
                </div>
                <div className="item">
                    <label >Your Email:</label>
                    <input type="text" placeholder="Enter Email Address"
                        value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="item">
                    <label >Number of Tickets:</label>
                    <input type="number" placeholder="Enter Number"
                        value={num} onChange={(e) => setNum(e.target.value)} />
                </div>

                <button className="add-btn">Submit</button>



            </div>
        </>
    )
}

export default MovieTicket;