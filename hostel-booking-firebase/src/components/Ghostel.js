import React from 'react';
import './hostel.css';

function Ghostel() {
    return (
        <>
            <h1 style={{ marginTop: '120px' }} id="ghostel">Choose a Hostel</h1>
            <div className='h-outer'>
                <div className='h'>
                    <p>G1</p>
                </div>
                <div className='h'>
                    <p>G2</p>
                </div>
                <div className='h'>
                    <p>G3</p>
                </div>
            </div>
            <div className='h-outer'>
                <div className='h'>
                    <p>G4</p>
                </div>
                <div className='h'>
                    <p>G5</p>
                </div>
                <div className='h'>
                    <p>G6</p>
                </div>
            </div>
        </>
    )
}

export default Ghostel