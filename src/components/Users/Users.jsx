import React from 'react';
import styles from './users.module.css';
import userPhoto from '../../assets/img/user.png';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

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
                        <NavLink to={'/profile/' + users.id}>
                            <img src={users.photos.small != null ? users.photos.small : userPhoto} className={styles.usersPhoto} />
                        </NavLink>
                    </div>
                    <div>
                        {users.followed
                            ? <button onClick={() => { 
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${users.id}`, {
                                    withCredentials: true, //в делит запросах креды - второй  параметр
                                    headers:{
                                    'API-KEY': '25066eda-ac09-4ba6-9e26-d4248fa2dda3'
                                    }
                                }).then(response => {
                                    if (response.data.resultCode === 0) {
                                        props.unfollow(users.id)
                                    }
                                });
                                }}>Unfollow</button>
                            : <button onClick={() => {
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${users.id}`, {}, {
                                    withCredentials: true, //в гет запросах креды - третий параметр
                                    headers:{
                                        'API-KEY': '25066eda-ac09-4ba6-9e26-d4248fa2dda3'
                                        }
                                }).then(response => {
                                    if (response.data.resultCode === 0) {
                                        props.follow(users.id)
                                    }
                                });
                            }}>Follow</button>}
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