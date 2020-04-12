import Link from 'next/link';

const Choice = () => {
    return (
        <div>
        <Link href="/movies">
            <a>Watch a Movie</a>
        </Link>
        <Link href="/trails">
            <a>Go for a Hike</a>
        </Link>
        </div>
    )
}

export default Choice;