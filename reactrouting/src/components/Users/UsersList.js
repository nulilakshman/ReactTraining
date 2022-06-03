import React from "react";
import { connect } from "react-redux";
import { getUsers } from "../../actions/userActions";
const UsersList = ({ users, getUsers }) => {
    console.log('users', users)
    return (
        <div>
            <button onClick={getUsers}>Get All Users</button>
            Total Users : {users.length}
        </div>
    )
}

const mapStateToProps = (state) => ({
    users: state.UserReducer.usersList
})

const mapDispatchToProps = {
    getUsers: getUsers
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersList)