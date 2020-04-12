import Link from 'next/link';
import { css, cx } from 'emotion';

const IntroPage = () => {
    const hoverColor = '#08009c';
    return(
    <div className="content-container">
        <div className="title-wrapper">
            <h1 className="title">Yeah, quarantine sucks. <br/><span className="italic-large">Big time.</span> <br/>But that doesn't mean that there isn't fun to be had while we patiently wait for it to be over.</h1>
            <Link href="/choice">
                <a className="global-button">Right?</a>
            </Link>
        </div>
        <style jsx>{`
            .content-container {
                // margin: 0 1rem;
                height: 100vh;
                background: linear-gradient(#e66465, #9198e5);
                position: relative;
            }
            .title-wrapper {
                display: grid;
                margin: 0 auto;
                width: 60%;
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
            }

            .italic-large {
                font-style: italic;
                font-weight: 500;
                font-size: 5rem;
                line-height: 1.1;
            }

            .global-button {
                text-decoration: none;
                padding: 1rem 1.75rem;
                background-color: blue;
                color: white;
                border-radius 2rem;
                font-weight: 700;
                box-shadow: 1px 4px 8px darkBlue;
            }
            .global-button:hover {
                background-color: ${hoverColor};
            }
    `}</style>
    </div>
    )
}

export default IntroPage 

