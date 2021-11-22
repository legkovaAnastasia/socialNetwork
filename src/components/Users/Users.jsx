import axios from 'axios';
import styles from './users.module.css';
import userPhoto from '../../assets/img/user.png'

let Users = (props) => {
    let getUsers = () => {
    if (props.users.length === 0) {
        
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            props.setUsers(response.data.items);
        });
    }
    }

    return <div>
        <button onClick={getUsers}>Get Users</button>
        {
            props.users.map(users => <div key={users.id}>
                <span>
                    <div>
                        <img src={users.photos.small !=null ? users.photos.small : userPhoto} className={styles.usersPhoto} />
                    </div>
                    <div>
                        {users.followed
                            ? <button onClick={() => { props.unfollow(users.id) }}>Unfollow</button>
                            : <button onClick={() => { props.follow(users.id) }}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{users.name}</div>
                        <div>{users.status}</div>
                    </span>
                    <span>
                        <div>{"users.location.country"}</div>
                        <div>{"users.location.city"}</div>
                    </span>
                </span>


            </div>)
        }
    </div>
}

export default Users;