import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

const Movies = (props) => {
    console.log(props.genres)
    return(
        <div>
            {props.genres.map((genre) => (
                <li key={genre.id}>
                    <Link href="/movie-genres/[id]" as={`/movie-genres/${genre.id}`}>
                        <a>{genre.name}</a>
                    </Link>
                </li>
            ))}
        </div>
    )
}

Movies.getInitialProps = async function() {
    const res = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=c7bd82b902b003f8df2703ae814169b5&language=en-US`)
    const data = await res.json();

    console.log(`Show data fetched. Count: ${data.length}`);
    return {
        genres : data.genres
    }
}

export default Movies;