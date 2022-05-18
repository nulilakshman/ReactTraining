import React, { useEffect, useState } from "react";
import axios from "axios";
import UserDetailRow from './UserDetailRow'

const Users = () => {

    const [users, setUsers] = useState([]);
    const [rows, setRows] = useState([]);

    // useEffect(async() => {
       
    // }, [])
    useEffect(() => {
        async function fetchData() {
          // You can await here
          await getUsers()
          // ...
        }
        fetchData();
      }, []);

    const getUsers = async() => {
        const x = await axios.get('https://reqres.in/api/users?page=2');
        console.log(x)
        console.log('Method called')
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
