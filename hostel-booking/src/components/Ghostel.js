import React from 'react';
import { Link } from 'react-router-dom';
import './hostel.css';

function Ghostel() {
    return (
        <>
            <h1 style={{ marginTop: '120px' }} id="ghostel">Choose a Hostel</h1>
            <div className='h-outer'>
                <div className='h'>
                    <Link to='/room' style={{ textDecoration: 'none', color: 'black' }}><p>G1</p></Link>
                </div>
                <div className='h'>
                    <Link to='/room' style={{ textDecoration: 'none', color: 'black' }}><p>G2</p></Link>
                </div>
                <div className='h'>
                    <Link to='/room' style={{ textDecoration: 'none', color: 'black' }}><p>G3</p></Link>
                </div>
            </div>
            <div className='h-outer'>
                <div className='h'>
                    <Link to='/room' style={{ textDecoration: 'none', color: 'black' }}><p>G4</p></Link>
                </div>
                <div className='h'>
                    <Link to='/room' style={{ textDecoration: 'none', color: 'black' }}><p>G5</p></Link>
                </div>
                <div className='h'>
                    <Link to='/room' style={{ textDecoration: 'none', color: 'black' }}><p>G6</p></Link>
                </div>
            </div>
        </>
    )
}

export default Ghostel