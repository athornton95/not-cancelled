import fetch from 'isomorphic-unfetch';
import theme from '../../theme/theme';
import { css, jsx } from '@emotion/core';
import Nav from '../../components/Nav';

const Movie = props => {
    const hoverColor = '#08009c';
    return(
        <div className="content-container">
        <Nav/>
        <div className="wrapper">
        <div className="list-container">
       
            {props.movies.map((movie) => (
                <li key={movie.id} className="card">
                    <div className="card-content">
                        <h2>{movie.title}</h2>
                        <p>{movie.overview}</p>
                        <p>Rating: {movie.vote_average}/10</p>
                    </div>
                </li>
        ))}

        </div>
        </div>
         <style jsx>{`
            li {
                list-style: none;
                display: block;
            }
            .card {
                background-color: white;
                width: 100%;
                border-radius: 1rem;
                box-shadow: 1px 4px 8px #050066;
            }

            .card:hover {
                transform: translateY(-3px);
            }

            .card h2 {
                border-bottom: 1px solid;
            }

            .card-content {
                margin: 2rem;
            }

            .wrapper {
                display: grid;
                max-width: 100%;
                margin: 2rem;
            }

            .content-container {
                max-height: 100%;
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
                grid-template-columns:repeat(4, 1fr);
                grid-column-gap: 1.5rem;
                grid-row-gap: 1.5rem;
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
                background-color: ${theme.palette.primary.main};
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


Movie.getInitialProps = async function(context) {
    const { id } = context.query;
    const res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=c7bd82b902b003f8df2703ae814169b5&with_genres=${id}`);
    const data = await res.json();
    
    return { movies: data.results};
    };
    
export default Movie;