import TrailFinder from '../components/TrailFinder';
import Nav from '../components/Nav';
import { css, jsx } from '@emotion/core'

const Trails = () => {
    const hoverColor = '#08009c';
    return(
        <div className="content-container">
            <Nav/>
            <div className="wrapper">
                <div className="title-wrapper">
                    <h1 className="title">Get outside and take a hike!</h1>
                    <p className="subtitle">Enter your location and hike style preferences to get inspired!</p>
                </div>
                <TrailFinder />
            </div>
            <style jsx>{`
            li {
                list-style: none;
                display: block;
            }
            .wrapper {
                display: grid;
                max-width: 100%;
                margin: 2rem;
            }
            .content-container {
                min-height: 100vh;
                background: linear-gradient(#e66465, #9198e5);
                position: relative;
            }
            .title-wrapper {
                display: grid;
                margin: 0 auto;
                margin-top: -5rem;
                width: 70%;
                justify-items: center;
                text-align: center;
                position: absolute;
                left: 50%;
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

export default Trails;


