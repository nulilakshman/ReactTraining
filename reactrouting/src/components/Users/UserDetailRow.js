import React from "react";
import { Link } from "react-router-dom";

const UserDetailRow = (props) => {
    return (
        <tr key={props.id}>
            <td>
                {props.first_name}
            </td>
            <td>
                {props.last_name}
            </td>
            <td>
                {props.email}
            </td>
            <td>
                <Link to={`/userinfo/uname/${props.first_name}/uid/${props.id}`}>View</Link>
            </td>
        </tr>
    )
}

export default UserDetailRow