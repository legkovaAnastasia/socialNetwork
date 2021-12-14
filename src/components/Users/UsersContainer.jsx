import React from 'react';
import { connect } from "react-redux";
import { setCurrentPage, follow, unfollow, toggleFollowingProgress, getUsers } from "../../redux/usersReducer";
import Users from './Users';
import Preloader from './../common/preloader/preloader';
import { compose } from 'redux';
import { withAuhtRedirect } from '../../hoc/withAuthRedirect';

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    }

    render() {
        return <>
        { this.props.isFetching ? <Preloader/> : null }
         <Users currentPage={this.props.currentPage}
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            onPageChanged={this.onPageChanged}
            users={this.props.users}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            followingInProgress={this.props.followingInProgress}
        />
        </>
    }
}

let mapStateToProps = (state) => {
    return{
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export default compose (withAuhtRedirect,
    connect(mapStateToProps, 
        { follow, unfollow, setCurrentPage,   
        toggleFollowingProgress, getUsers})
) (UsersContainer)

connect(mapStateToProps, 
    { follow, unfollow, setCurrentPage,   
    toggleFollowingProgress, getUsers}) (UsersContainer);