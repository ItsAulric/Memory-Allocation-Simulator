import { useState, useEffect } from 'react';

import './AvailableBlocks.css';

export default function AvailableBlocks(props) {
    const blockSize = props.value;
    const formattedBlockSize = blockSize.toLocaleString();
    const address = blockSize.toString(16);

    const numbers = [10, 14, 26, 19];
    const randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
    const physicalSize = blockSize - randomNumber;
    const formattedPhysicalSize = physicalSize.toLocaleString();

    const [isUsed, setIsUsed] = useState(false);
    useEffect(() => {
        const checkBlock = () => {
            if (props.used === true) setIsUsed(true);
        }
        checkBlock();
    }, [])

    return (
        <div className='available-block'>
            <h2 style={{ color: 'rgba(128, 0, 250)' }}>0x{address}</h2>
            <div className='block-details'>
                <h1>DATA:</h1>
                <h1>{formattedBlockSize}</h1>
            </div>
        
            <div className='allocation-data'>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <h2>Allocation Size:</h2>
                    <h2>{randomNumber} b</h2>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <h2>Physical Size:</h2>
                    <h2>{formattedPhysicalSize} b</h2>
                </div>

            </div>
            
            <div className='status'>
                <p style={{ color: 'rgba(0, 255, 0, 0.9)' }}>&#9679;</p>
                <p>Available</p>
            </div>
        </div>
    )
}