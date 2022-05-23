import React from 'react';
import { Link } from 'react-router-dom';
import "./room.css";
import "./hostel.css";

function Room() {
    return (
        <>
            <h1 style={{ marginTop: '50px' }}> Choose a Floor </h1>
            <div className='room' id="room">
                <form action="#">
                    {/* <label for="lang">Language</label> */}
                    <select name="floors" id="floor">
                        <option value="1st Floor">1st Floor</option>
                        <option value="2nd Floor">2nd Floor</option>
                        <option value="3rd Floor">3rd Floor</option>
                        <option value="4th Floor">4th Floor</option>
                        <option value="5th Floor">5th Floor</option>
                    </select>
                    {/* <input type="submit" value="Submit" /> */}
                </form>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Link to='/success' style={{ textDecoration: 'none', color: 'black' }}><div className='h-outer'>
                <div className='h'>
                    <p>1</p>
                </div>
                <div className='h'>
                    <p>2</p>
                </div>
                <div className='h'>
                    <p>3</p>
                </div>
            </div>
                <div className='h-outer'>
                    <div className='h'>
                        <p>4</p>
                    </div>
                    <div className='h'>
                        <p>5</p>
                    </div>
                    <div className='h'>
                        <p>6</p>
                    </div>
                </div>
                <div className='h-outer'>
                    <div className='h'>
                        <p>7</p>
                    </div>
                    <div className='h'>
                        <p>8</p>
                    </div>
                    <div className='h'>
                        <p>9</p>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default Room