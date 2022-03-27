import { useEffect, useState } from 'react'
import { getActor } from '../services/MovieService'

export default function Movie() {

    const [actor, setActor] = useState([])

    const getData = async () => {
        const actors = await getActor([])
        setActor(actors)
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div>
            <h1>Actors</h1>
            {actor.map((skuespiller) => (
            <h1 key={skuespiller._id}>{skuespiller.name.current}</h1>
            ))}
            
        </div>
    )
}