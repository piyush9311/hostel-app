import React, { useContext } from 'react';
import './success.css';
import { Link } from "react-router-dom";
import { UserAuthContext } from '../context/UserAuthContext';

function Welcome() {
    //const { logOut, user } = useUserAuth();
    //const navigate = useNavigate();
    // const handleLogout = async () => {
    //     try {
    //         await logOut();
    //         // navigate("/login");
    //     } catch (error) {
    //         console.log(error.message);
    //     }
    // };
    const [user, setUser] = useContext(UserAuthContext);
    return (
        <>

            <div className='container' style={{ backgroundColor: "whitesmoke" }} id="welcome">
                {<h2>Welcome {user[0].name}</h2>}
                <h4>You already have a room booked</h4>
                <h3>Your room deatils are as follows :</h3>
                <br></br>
                <br></br>
                <p><b>Hostel No : <span>B4</span></b></p>
                <p><b>Room No : <span>3</span></b></p>
            </div>
            <div>
                <button type='submit' style={{ marginLeftt: "600px", marginTop: "2px" }}>
                    <Link to="/"> Log out </Link>
                </button>
            </div>
        </>
    )
}

export default Welcome