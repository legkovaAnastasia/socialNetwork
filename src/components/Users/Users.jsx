import styles from './users.module.css'

let Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers( [
            { id: 1, photoUrl: 'https://www.vokrug.tv/pic/person/f/2/0/7/f2073f62bfa96bbc291ebd37ef8c1659.jpg', followed: true, fullName: 'Anna', status: 'going out tonight', location: { city: 'Irkutsk', country: 'Russia' } },
            { id: 2, photoUrl: 'https://www.vokrug.tv/pic/person/f/2/0/7/f2073f62bfa96bbc291ebd37ef8c1659.jpg', followed: true, fullName: 'Elena', status: 'whats the news?', location: { city: 'Brest', country: 'Belarus' } },
            { id: 3, photoUrl: 'https://www.vokrug.tv/pic/person/f/2/0/7/f2073f62bfa96bbc291ebd37ef8c1659.jpg', followed: false, fullName: 'Igor', status: 'avocado and gym', location: { city: 'Lviv', country: 'Ukraine' } },
            { id: 4, photoUrl: 'https://www.vokrug.tv/pic/person/f/2/0/7/f2073f62bfa96bbc291ebd37ef8c1659.jpg', followed: false, fullName: 'Valery', status: 'looking for a company', location: { city: 'Nursultan', country: 'Kazakhstan' } }
        ]
        )
    }

    return <div>
        {
            props.users.map(users => <div key={users.id}>
                <span>
                    <div>
                        <img src={users.photoUrl} className={styles.usersPhoto} />
                    </div>
                    <div>
                        {users.followed
                            ? <button onClick={() => { props.unfollow(users.id) }}>Unfollow</button>
                            : <button onClick={() => { props.follow(users.id) }}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{users.fullName}</div>
                        <div>{users.status}</div>
                    </span>
                    <span>
                        <div>{users.location.country}</div>
                        <div>{users.location.city}</div>
                    </span>
                </span>


            </div>)
        }
    </div>
}

export default Users;