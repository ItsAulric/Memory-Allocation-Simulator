import { useState, useEffect } from 'react';

import './App.css'
import AvailableBlocks from './Components/AvailableBlocks/AvailableBlocks';

export default function App() {
    const [usedMemory, setUsedMemory] = useState(0);
    const formattedUsedMemory = usedMemory.toLocaleString();
    const [freeMemory, setFreeMemory] = useState(255000);
    const formattedFreeMemory = freeMemory.toLocaleString();

    const [usedBlocks, setUsedBlocks] = useState(0);
    const [freeBlocks, setFreeBlocks] = useState(4);

    const availableBlocks = [
        {
            id: 1,
            block_size: 85000
        },
        {
            id: 2,
            block_size: 130000
        },
        {
            id: 3,
            block_size: 40000
        },
        {
            id: 4,
            block_size: 70000
        }
    ];

    useEffect(() => {
        const execute = () => {
            availableBlocks.map(block => console.log(block.block_size));
        }
        execute();
    }, [])

    return (
        <div className='page-container'>
            <h1>Memory Allocation Simulator</h1>

            <div className='row'>
                <section className='memory-form-container'>
                    <h1>Request Memory</h1>

                    <form onSubmit='' className='memory-form'>

                    </form>
                    <div className='created-blocks-container'>

                    </div>
                </section>
                
                <section className='analytics'>
                    <h1>Memory Statistics</h1>

                    <dl className='grid-container'>
                        <div className='grid-item'>
                            <dd style={{color: 'rgba(255, 0, 0, 0.7)'}}>{formattedUsedMemory}</dd>
                            <dt>Used Memory (bytes)</dt>
                        </div>
                        <div className='grid-item'>
                            <dd style={{color: 'rgba(0, 255, 0, 0.7)'}}>{formattedFreeMemory}</dd>
                            <dt>Free Memory (bytes)</dt>
                        </div>
                        <div className='grid-item'>
                            <dd style={{color: 'rgba(128, 0, 250)'}}>{usedBlocks}</dd>
                            <dt>Used Blocks</dt>
                        </div>
                        <div className='grid-item'>
                            <dd style={{color: 'rgba(255, 180, 0)'}}>{freeBlocks}</dd>
                            <dt>Free Blocks</dt>
                        </div>
                    </dl>
                </section>
            </div>

            <div className='blocks-container'>
                <h1>Available Blocks</h1>
                <div className='available-blocks-container'>
                    {availableBlocks.map(block => (
                        <AvailableBlocks key={block.id} value={block.block_size}/>
                    ))}
                </div>
                
            </div>
        </div>
    )
}