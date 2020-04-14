import Link from 'next/link';
import { css, jsx } from '@emotion/core'
import theme from '../theme/theme';

const ChoicePage = () => {
    const hoverColor = '#08009c';
    return(
    <div className="content-container">
        <div className="title-wrapper">
            <h1 className="title">Never fear, there are always options. Select your preferred environment.</h1>
            <div className="button-wrapper">
            <Link href="/movies">
                <a className="global-button">Inside</a>
            </Link>
            <Link href="/trails">
                <a className="global-button">Outside</a>
            </Link>
            </div>
        </div>
        <style jsx>{`
            .content-container {
                height: 100vh;
                background: linear-gradient(#e66465, #9198e5);
                position: relative;
            }
            .title-wrapper {
                display: grid;
                margin: 0 auto;
                width: 50%;
                justify-items: center;
                text-align: center;
                position: absolute;
                left: 50%;
                top: 10%;
                transform: translate(-50%, 50%);
            }
            .title {
                color: white;
                opacity: 1;
                font-size: 2rem;
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

export default ChoicePage 

