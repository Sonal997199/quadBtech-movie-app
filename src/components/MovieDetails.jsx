import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const MovieDetails = () => {
    const [data, setData] = useState(undefined);

    const { id } = useParams();

    useEffect(() => {
      const getMovieDetails = async () => {
        try {
            let result = await fetch(`https://api.tvmaze.com/shows/${id}`);
            result = await result.json();
            setData(result);
            console.log(result);
        } catch (err) {
            console.error("Error fetching Data ", err);
        }
    };
        getMovieDetails();
    }, [id]);


    if (!data) {
        return (
            <div
                style={{
                    height: "100vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
                className="loading-text"
            >
                Loading...
            </div>
        );
    }

    return (
        <>
            <div className="container">
                <h1 className='head-text'>Movie Details</h1>
                <div className="details-container">
                    <div className="left">

                        {data && data.image && (
                            <img src={data && data.image.original} alt="" />
                        )}
                    </div>
                    <div className="right">
                        <div className='top'>
                            <div className='titels'>
                                <h2 className='name'>{data.name}</h2>
                                <h3 className='genre'>Genre: {data.genres.join(", ")}</h3>
                            </div>
                            
                        </div>
                        <i>Status: {data.status}</i>
                        <p className='des' dangerouslySetInnerHTML={{ __html: data.summary }}></p>
                        <br />
                        <div>
                          <h4>Rating: {data.rating.average}</h4>
                        </div>
                        <br />
                        <div>
                          <h4>Language: {data.language}</h4>
                        </div>
                        <br />
                        <div>
                          <h4>Type: {data.type}</h4>
                        </div>
                        <br />
                        <div>
                          <h4>Runtime: {data.runtime}</h4>
                        </div>
                        <br />
                        <div>
                          <h4>Average Runtime: {data.averageRuntime}</h4>
                        </div>
                        <br />
                        <div>
                          <h4>Premiered: {data.premiered}</h4>
                        </div>
                        <br />
                        <div>
                          <h4>Ended: {data.ended}</h4>
                        </div>
                        <div className="btn">
                            <a href={data.url} target='_blank' rel="noopener noreferrer">Know More</a>
                            <Link to={`/movie_ticket/${data.id}`}>Book Ticket</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MovieDetails;