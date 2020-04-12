import Trails from '../components/Trails'
import UserInput from '../components/UserInput';
import Link from 'next/link';

export default function Index(props) {
    console.log(props)
    return(
    <div>
        <Trails />
        <ul>
        {/* {props.trails.map((trail) => (
            <li key={trail.id}>
                <Link href="/p/[id]" as={`/p/${trail.id}`}>
                <Trails/>
            </Link>
            </li>
        ))} */}
        </ul>
    </div>
    )
}

// Index.getInitialProps = async function(props) {
//     <Trails />

//     return {
//         trails: props.trails
//     }
// }