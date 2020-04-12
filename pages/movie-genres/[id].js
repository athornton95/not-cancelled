import fetch from 'isomorphic-unfetch';

const Movie = props => {
    console.log(props.movies)
    return(
        <ul>
        {props.movies.map((movie) => (
            <li key={movie.id}>
            {/* <Link href="/p/[id]" as={`/p/${movie.id}`}> */}
                <h2>{movie.title}</h2>
                <p>{movie.overview}</p>
                <p>{movie.vote_average}/10</p>
            {/* </Link> */}
            </li>
        ))}
        </ul>
    )
    }


Movie.getInitialProps = async function(context) {
    const { id } = context.query;
    console.log(context);
    const res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=c7bd82b902b003f8df2703ae814169b5&with_genres=${id}`);
    const data = await res.json();
    
    return { movies: data.results };
    };
    
export default Movie;