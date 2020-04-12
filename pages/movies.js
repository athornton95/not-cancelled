import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import { css, jsx } from '@emotion/core'
import Nav from '../components/Nav';

const Movies = (props) => {
    const hoverColor = '#08009c';
    return(
        <div className="content-container">
            <Nav/>
            <div className="title-wrapper">
                <h1 className="title">Staying inside? Watch a movie</h1>
                <p className="subtitle">Choose a genre to get started</p>
            <div className="list-container">
            {props.genres.map((genre) => (
                <li key={genre.id} className="list-item">
                    <Link href="/movie-genres/[id]" as={`/movie-genres/${genre.id}`}>
                        <a className="global-button">{genre.name}</a>
                    </Link>
                </li>
            ))}
            </div>
            </div>
        <style jsx>{`
            li {
                list-style: none;
                display: block;
            }
            .content-container {
                height: 100vh;
                background: linear-gradient(#e66465, #9198e5);
                position: relative;
            }
            .title-wrapper {
                display: grid;
                margin: 0 auto;
                width: 70%;
                justify-items: center;
                text-align: center;
                position: absolute;
                left: 50%;
                top: -15%;
                transform: translate(-50%, 50%);
            }
            .title {
                color: white;
                opacity: 1;
                font-size: 2rem;
                text-shadow: 2px 2px #e66465;
            }

            .subtitle {
                color: white;
                font-size: 1.5rem;
                opacity: .7;
                font-style: italic;
            }
            .list-container {
                display: grid;
                grid-template-columns:repeat(5, 1fr);
                grid-column-gap: 1rem;
                width: 100%;
            }

            .list-item {
                margin: 2rem 0;
            }

            .button-wrapper {
                margin-top: 1rem;
            }
            .global-button {
                text-decoration: none;
                padding: 1rem 1.75rem;
                background-color: blue;
                color: white;
                border-radius 2rem;
                font-weight: 700;
                box-shadow: 1px 4px 8px #050066;
                margin: 1rem 1rem;
            }
            .global-button:hover {
                background-color: ${hoverColor};
            }
    `}</style>
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