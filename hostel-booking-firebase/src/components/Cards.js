import React from 'react'
import './card.css'
function Cards() {
    return (
        <>
            <h1 style={{ marginTop: '60px' }}>Choose Your Hostel</h1>
            <div className='card-outer' id="card">
                <div className="card" style={{ backgroundColor: 'lightblue' }}>
                    <img src="https://cdn1.vectorstock.com/i/1000x1000/38/05/male-face-avatar-logo-template-pictograph-vector-11333805.jpg" alt="Avatar" style={{ width: "50%" }} />
                    <div className="cont">
                        <h2><b>BOY'S HOSTEL</b></h2>
                        <p><i>Click For Hostel</i></p>
                    </div>
                </div>
                <div className="card" style={{ backgroundColor: 'lightpink' }}>
                    <img src="https://cdn4.vectorstock.com/i/1000x1000/18/98/user-icon-female-person-symbol-profile-avatar-sign-vector-18991898.jpg" alt="Avatar" style={{ width: "50%" }} />
                    <div className="cont">
                        <h2><b>GIRL'S HOSTEL</b></h2>
                        <p><i>Click For Hostel</i></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards;