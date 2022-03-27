import {useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { getActor } from '../services/MovieService'

export default function Actor() {
    const [actor, setActor] = useState([])

const getActorData = async () => {
    const actors = await getActor([])
    setActor(actors)
}

useEffect(() => {
    getActorData()
}, [])


return (
    <div>
        {actor.map((skuespiller) => (
            <h1 key={skuespiller._id}>{skuespiller.fullName}
            <NavLink to="/name">, "{skuespiller.name.current}"</NavLink></h1>
        ))}
    </div>
)

}
