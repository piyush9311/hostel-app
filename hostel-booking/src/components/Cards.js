import React from 'react'
import { Link } from 'react-router-dom'
import './card.css'
function Cards() {
    return (
        <>
            <h1 style={{ marginTop: '60px' }}>Choose Your Hostel</h1>
            <div className='card-outer' id="card">
                <Link to='/bhostel' style={{ textDecoration: 'none' }}>
                    <div className="card" style={{ backgroundColor: 'lightblue' }}>
                        <img src="https://cdn1.vectorstock.com/i/1000x1000/38/05/male-face-avatar-logo-template-pictograph-vector-11333805.jpg" alt="Avatar" style={{ width: "50%" }} />
                        <div className="cont">
                            <h2 style={{ color: 'black' }}><b>BOY'S HOSTEL</b></h2>
                            <p style={{ color: 'black' }}><i>Click For Hostel</i></p>
                        </div>
                    </div>
                </Link>
                <Link to='/ghostel' style={{ textDecoration: 'none' }}>
                    <div className="card" style={{ backgroundColor: 'lightpink' }}>
                        <img src="https://cdn4.vectorstock.com/i/1000x1000/18/98/user-icon-female-person-symbol-profile-avatar-sign-vector-18991898.jpg" alt="Avatar" style={{ width: "50%" }} />
                        <div className="cont">
                            <h2 style={{ color: 'black' }}><b>GIRL'S HOSTEL</b></h2>
                            <p style={{ color: 'black' }}><i>Click For Hostel</i></p>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default Cards;