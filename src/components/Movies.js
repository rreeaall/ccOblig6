import { useState, useEffect } from 'react';
import { getMovie } from '../services/MovieService';

export default function Movie() {
    const [movie, setMovie] = useState([])

    const getData = async () => {
        const movies = await getMovie([])
        setMovie(movies)
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div>
        <h1>Filmer</h1>
        {movie.map((mmovie) => (
            <h1 key={mmovie._id}>
            {mmovie.title}
            </h1>
        ))}
        </div>
    )

    
}







