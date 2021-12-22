import React from 'react';
import styles from './users.module.css';
import userPhoto from '../../assets/img/user.png';
import { NavLink } from 'react-router-dom';
import Paginator from '../common/Paginator/Paginator';

let Users = (props) => {
    return <div>
        <Paginator currentPage={props.currentPage} 
                   onPageChanged={props.onPageChanged} 
                   totalUsersCount={props.totalUsersCount} 
                   pageSize={props.pageSize} />
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
                            ? <button disabled={props.followingInProgress.some(id => id === users.id)} onClick={() => {props.unfollow(users.id)}}>Unfollow</button>
                            : <button disabled={props.followingInProgress.some(id => id === users.id)} onClick={() => {props.follow(users.id)}}>Follow</button>}
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