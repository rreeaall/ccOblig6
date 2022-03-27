import client from '../lib/client';

// const movieFields = `
//     title,
//     poster,
// `

// const actorFields = `
// Info,
// slugName,
// Name
// `

const movieFields = `
    title,
    poster,
`

const actorFields = `
Info,
slugName,
Name,
`
export const getMovie = async () => {
  const data = await client.fetch(`*[_type == "movie" ]{${movieFields}}`)
  return data
}

export const getActor = async () => {
  const data = await client.fetch(`*[_type == "actor" ]{${actorFields}}`)
  return data
}







// Før:
// import Movie from "../components/Movie";
// import client from '../lib/client';

// const MovieService = ({ movie, actor }) => <section>
//     {movie?.length > 0 ? movie.map((movies) => <Movie key={actor.name} actor={movies}/>) 
//     : null}
// </section>

// const movieFields = `
//     string,
//     reference,
//   `
  
//   const actorFields = `
//   string,
//   'slug': slug.current,
//   `

//   export const getEvents = async () => {
//     const data = await client.fetch(`*[_type == "movie"]{${movieFields}}`)(`*[_type == "slug"]{${actorFields}}`);
//     return data;
//   };

// export default MovieService;
