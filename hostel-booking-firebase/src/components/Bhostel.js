import React from 'react';
import "./hostel.css";

function Bhostel() {
    return (
        <>
            <h1 style={{ marginTop: '120px' }} id="bhostel">Choose a Hostel</h1>
            <div className='h-outer'>
                <div className='h'>
                    <p>B1</p>
                </div>
                <div className='h'>
                    <p>B2</p>
                </div>
                <div className='h'>
                    <p>B3</p>
                </div>
            </div>
            <div className='h-outer'>
                <div className='h'>
                    <p>B4</p>
                </div>
                <div className='h'>
                    <p>B5</p>
                </div>
                <div className='h'>
                    <p>B6</p>
                </div>
            </div>
        </>
    )
}

export default Bhostel