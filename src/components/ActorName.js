import { useEffect, useState } from 'react'
import { getActor } from '../services/MovieService'

export default function ActorName() {
    const [actorName, setActorName] = useState([])

    const getActorNameData = async () => {
        const actorsName = await getActor([])
        setActorName(actorsName)
    }

    useEffect (() => {
        getActorNameData()
    }, [])

return (
    <div>
        {actorName.map((navn) => (
            <h1 key={navn._id}>{navn.name.current}</h1>
        ))}
    </div>
)
    }