import { Link } from 'react-router';


const HootList = (props) => {
    return (
        <main>
            <h1>Hoot List</h1>
            {props.hoots.map((hoot) => (
                <Link key={hoot._id} to={`/hoots/${hoot._id}`}>
                    <article>
                        <header>
                            <h2>{hoot.title}</h2>
                            <p>
                                {`${hoot.author.username} posted on
                                    ${new Date(hoot.createdAt).toLocaleDateString()}`
                                }
                            </p>
                        </header>
                    </article>
                </Link>
            ))}
        </main>
    )
};

export default HootList;