import React from 'react';
import plant from '../components/images/third.jpg';

const Third = () => {
    const stoneBg = {
        background: '#ccc',
        borderRadius: '24px',
        boxShadow: `rgb(185, 185, 185) -6px -6px 0px, rgba(0, 0, 0, 0.5) -2px 5px 6px`,
        display: 'inline-block',
        margin: '35px 50px',
        padding: '12px 24px'
    }

    const stoneStyles = {
        color: 'transparent',
        backgroundColor: '#565656',
        font: 'bold 42px Arial',
        textShadow: '2px 2px 3px rgba(255, 255, 255, 0.5)',
        webkitBackgroundClip: 'text',
    }


    return (
        <div style={stoneBg}>
            <h1 style={stoneStyles}>It's written in stone</h1>
            <img src={plant} />
        </div>
    );
}

export default Third;