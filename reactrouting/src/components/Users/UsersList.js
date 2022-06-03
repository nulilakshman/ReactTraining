import React from "react";
import { connect } from "react-redux";
import { getUsers } from "../../actions/userActions";
const UsersList = ({ users, userReducerError, showLoader, getUsers }) => {
    console.log('users', users)
    return (
        <div>
            <button onClick={getUsers}>Get All Users</button>
            <br />
            {
                showLoader ? <div class="spinner-border text-primary" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
                    : null
            }

            Total Users : {users.length}
            <br />
            {
                userReducerError !== '' ? <div class="alert alert-danger" role="alert">
                    {userReducerError}
                </div>
                    : null
            }

        </div>
    )
}

const mapStateToProps = (state) => ({
    users: state.UserReducer.usersList,
    userReducerError: state.UserReducer.iserror,
    showLoader: state.UserReducer.isProcessing
})

const mapDispatchToProps = {
    getUsers: getUsers
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersList)