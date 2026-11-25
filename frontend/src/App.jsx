import { useState } from 'react';

import './App.css';
import AvailableBlocks from './Components/AvailableBlocks/AvailableBlocks';

const initialBlocks = [
    { id: 1, block_size: 85000 },
    { id: 2, block_size: 130000 },
    { id: 3, block_size: 40000 },
    { id: 4, block_size: 70000 }
];
const strategies = ['First Fit', 'Best Fit', 'Worst Fit'];
const totalMemory = initialBlocks.reduce((total, block) => total + block.block_size, 0);

export default function App() {
    const [blocks, setBlocks] = useState(initialBlocks);
    const [memorySize, setMemorySize] = useState(64000);
    const [strategy, setStrategy] = useState(strategies[0]);
    const [error, setError] = useState('');
    const usedMemory = blocks.reduce((total, block) => total + (block.allocation || 0), 0);
    const usedBlocks = blocks.filter(block => block.allocation).length;

    const handleSubmit = (event) => {
        event.preventDefault();
        const candidates = blocks.filter(block => !block.allocation && block.block_size >= memorySize);
        const sortedCandidates = strategy === 'Best Fit'
            ? candidates.sort((a, b) => a.block_size - b.block_size)
            : strategy === 'Worst Fit'
                ? candidates.sort((a, b) => b.block_size - a.block_size)
                : candidates;

        if (!sortedCandidates.length) {
            setError('No available block can fit this request.');
            return;
        }

        const selectedBlock = sortedCandidates[0];
        setBlocks(current => current.map(block =>
            block.id === selectedBlock.id ? { ...block, allocation: memorySize } : block
        ));
        setError('');
    };

    const handleReset = () => {
        setBlocks(initialBlocks);
        setError('');
    };

    return (
        <main className="page-container">
            <h1>Memory Allocation Simulator</h1>

            <div className="row">
                <section className="memory-form-container">
                    <h2>Request Memory</h2>
                    <form onSubmit={handleSubmit} className="memory-form">
                        <div className="size-control">
                            <label htmlFor="memorySize">Size:</label>
                            <input
                                id="memorySize"
                                type="range"
                                min="1"
                                max="130000"
                                value={memorySize}
                                onChange={event => setMemorySize(Number(event.target.value))}
                            />
                            <output htmlFor="memorySize">{memorySize.toLocaleString()}</output>
                            <span className="unit">B</span>
                        </div>

                        <div className="strategy-control">
                            <span>Strategy:</span>
                            <div className="strategy-options">
                                {strategies.map(option => (
                                    <button
                                        key={option}
                                        type="button"
                                        className={strategy === option ? 'selected' : ''}
                                        aria-pressed={strategy === option}
                                        onClick={() => setStrategy(option)}
                                    >
                                        {option}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="form-actions">
                            <button type="submit" className="allocate-button">+&nbsp; Allocate Memory</button>
                            <button type="button" className="reset-button" onClick={handleReset} aria-label="Reset allocations">
                                ↻
                            </button>
                        </div>
                        {error && <p className="allocation-error" role="alert">{error}</p>}
                    </form>
                </section>

                <section className="analytics">
                    <h2>Memory Statistics</h2>
                    <dl className="grid-container">
                        <div className="grid-item">
                            <dd className="used-memory">{usedMemory.toLocaleString()}</dd>
                            <dt>Used Memory (bytes)</dt>
                        </div>
                        <div className="grid-item">
                            <dd className="free-memory">{(totalMemory - usedMemory).toLocaleString()}</dd>
                            <dt>Free Memory (bytes)</dt>
                        </div>
                        <div className="grid-item">
                            <dd className="used-blocks">{usedBlocks}</dd>
                            <dt>Used Blocks</dt>
                        </div>
                        <div className="grid-item">
                            <dd className="free-blocks">{blocks.length - usedBlocks}</dd>
                            <dt>Free Blocks</dt>
                        </div>
                    </dl>
                </section>
            </div>

            <section className="blocks-container">
                <h2>Available Blocks</h2>
                <div className="available-blocks-container">
                    {blocks.map(block => (
                        <AvailableBlocks key={block.id} value={block.block_size} allocation={block.allocation || 0} />
                    ))}
                </div>
            </section>
        </main>
    );
}
