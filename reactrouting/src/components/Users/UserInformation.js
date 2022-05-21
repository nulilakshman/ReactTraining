import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import {getUserDetailsById} from '../../api/userapi'
const UserInformation = () => {
    let params = useParams()
    const [userDetails, setUserDetails] = useState({});
    const [showLoader, setShowLoader] = useState(false);
    useEffect(() => {
        async function fetchData() {
            await getUserDetails()
        }
        fetchData();
    }, []);

    const getUserDetails = async () => {
        setShowLoader(true);
        const userData = await getUserDetailsById(params.id) //await axios.get(`https://reqres.in/api/users/${params.id}`)
        //console.log('userData', userData)
        //console.log('userData.data', userData.data)
        //console.log('userData.data.data', userData.data.data)
        setUserDetails(userData.data.data)
        setShowLoader(false);
    }

    return (
        <div>
            <h2>User Information</h2>
            <p>Id passed : {params.id} </p>
            {
                showLoader ? <div class="spinner-border text-primary" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
                    : null
            }

            <p>First Name : {userDetails.first_name} </p>
            <p>Last Name : {userDetails.last_name} </p>
            <p>Email : {userDetails.email} </p>
            <img src={userDetails.avatar}></img>
        </div>
    )

}

export default UserInformation