import theme from '../theme/theme';

const Nav = () => {
    return(
    <div className="header-wrapper">
        <h2 className="header-title">#notcancelled</h2>

        <style jsx>{`
            .header-wrapper {
                position: sticky;
                background-color: ${theme.palette.primary.main};
                width: 100vw;
                height: 4rem;
                display: grid;
                padding: 0 2rem;
            }
            .header-title {
                color: white;
                opacity: .7;  
            }
        `}</style>
    </div>
);
};
  
export default Nav;