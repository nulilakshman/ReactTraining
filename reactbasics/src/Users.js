import React, { useEffect, useState } from "react";
import axios from "axios";
import UserDetailRow from './UserDetailRow'

const Users = () => {

    const [users, setUsers] = useState([]);
    const [rows, setRows] = useState([]);

    useEffect(() => {
        getUsers()
    }, [])

    const getUsers = () => {
        axios.get('https://reqres.in/api/users?page=2').then((x) => {
            console.log('Response Received !!')
            console.log(x.data.data)
            const usersList = x.data.data;
            setUsers(usersList)

            const records = usersList.map(x => {

                return x.id;

            });

            console.log(records)

            const temp = usersList.map(x => {

                return <tr>
                    <td>
                        {x.first_name}
                    </td>
                    <td>
                        {x.last_name}
                    </td>
                    <td>
                        {x.email}
                    </td>
                </tr>;

            });

            setRows(temp)

        }).catch(e => {
            console.log('Error !!!');
        })
        console.log('Method called')
    }

    return (
        <React.Fragment>
            <h1>Users List</h1>
            <table className="table table-bordered table-hover">
                <thead>
                    <tr>
                        <td>
                            First Name
                        </td>
                        <td>
                            Last Name
                        </td>
                        <td>
                            Email
                        </td>
                    </tr>
                </thead>
                <tbody>
                    {/* {rows} */}
                    {/* {
                        users.map(x => {

                            return <tr key={x.id}>
                                <td>
                                    {x.first_name}
                                </td>
                                <td>
                                    {x.last_name}
                                </td>
                                <td>
                                    {x.email}
                                </td>
                            </tr>;

                        })
                    } */}
                    {/* <UserDetailRow users={users}></UserDetailRow> */}

                    {
                        users.map(x => {
                            return <UserDetailRow {...x}></UserDetailRow>
                        })
                    }
                </tbody>
            </table>
        </React.Fragment>
    )
}

export default Users
