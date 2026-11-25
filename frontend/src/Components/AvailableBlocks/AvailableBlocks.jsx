import { useState, useEffect } from 'react';

import './AvailableBlocks.css';

export default function AvailableBlocks(props) {
    const blockSize = props.value;
    const formattedBlockSize = blockSize.toLocaleString();
    const address = blockSize.toString(16);

    const [isAvailable, setIsAvailable] = useState(true);
    useEffect(() => {
        const checkBlock = () => {
            if (props.used === true) setIsAvailable(false);
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
            {isAvailable
                ?
                <div className='status'>
                    <p style={{ color: 'rgba(0, 255, 0, 0.9)' }}>&#9679;</p>
                    <p>Available</p>
                </div>
                :
                null
            }
        </div>
    )
}