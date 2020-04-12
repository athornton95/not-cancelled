import IntroPage from '../components/IntroPage';
import Nav from '../components/Nav';

export default function Index() {
    return(
    <div className="body">
        <Nav/>
       <IntroPage />
       <style jsx>{`
            .body {
                overflow-y: hidden;
            }
        `}</style>
    </div>
    )
}