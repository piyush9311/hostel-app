import React from 'react';
import { Link } from 'react-router-dom';
import "./hostel.css";

function Bhostel() {
    return (
        <>
            <h1 style={{ marginTop: '120px' }} id="bhostel">Choose a Hostel</h1>
            <div className='h-outer'>
                <div className='h'>
                    <Link to='/room' style={{ textDecoration: 'none', color: 'black' }}><p>B1</p></Link>
                </div>
                <div className='h'>
                    <Link to='/room' style={{ textDecoration: 'none', color: 'black' }}><p>B2</p></Link>
                </div>
                <div className='h'>
                    <Link to='/room' style={{ textDecoration: 'none', color: 'black' }}><p>B3</p></Link>
                </div>
            </div>
            <div className='h-outer'>
                <div className='h'>
                    <Link to='/room' style={{ textDecoration: 'none', color: 'black' }}><p>B4</p></Link>
                </div>
                <div className='h'>
                    <Link to='/room' style={{ textDecoration: 'none', color: 'black' }}><p>B5</p></Link>
                </div>
                <div className='h'>
                    <Link to='/room' style={{ textDecoration: 'none', color: 'black' }}><p>B6</p></Link>
                </div>
            </div>
        </>
    )
}

export default Bhostel