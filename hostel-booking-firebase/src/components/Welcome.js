import React from 'react';
import './success.css';
import { useUserAuth } from "../context/UserAuthContext";
import { useNavigate } from 'react-router-dom';

function Welcome() {
    const { logOut, user } = useUserAuth();
    const navigate = useNavigate();
    // const handleLogout = async () => {
    //     try {
    //         await logOut();
    //         // navigate("/login");
    //     } catch (error) {
    //         console.log(error.message);
    //     }
    // };
    return (
        <>

            <div className='container' style={{ backgroundColor: "whitesmoke" }} id="welcome">
                <h2>Welcome {user && user.name}</h2>
                <h4>You already have a room booked</h4>
                <h3>Your room deatils are as follows :</h3>
                <br></br>
                <br></br>
                <p><b>Hostel No : <span>B4</span></b></p>
                <p><b>Room No : <span>3</span></b></p>
            </div>
            <div>
                <button type='submit' style={{ marginLeftt: "600px", marginTop: "2px" }}>
                    Log out
                </button>
            </div>
        </>
    )
}

export default Welcome