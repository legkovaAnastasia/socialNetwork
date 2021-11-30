import React from 'react';
import styles from './users.module.css';
import userPhoto from '../../assets/img/user.png';

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        <div>
            {
                pages.map(page => {
                    return <span className={props.currentPage === page && styles.selectedPage}
                        onClick={(event) => { props.onPageChanged(page); }}>{page}</span>
                })
            }
        </div>
        {
            props.users.map(users => <div key={users.id}>
                <span>
                    <div>
                        <img src={users.photos.small != null ? users.photos.small : userPhoto} className={styles.usersPhoto} />
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