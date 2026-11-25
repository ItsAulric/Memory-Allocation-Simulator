import './AvailableBlocks.css';

export default function AvailableBlocks({ value, allocation }) {
    const isUsed = allocation > 0;
    const physicalSize = value - allocation;

    return (
        <article className={`available-block ${isUsed ? 'used' : ''}`}>
            <h3>0x{value.toString(16)}</h3>
            <div className="block-details">
                <strong>DATA:</strong>
                <strong>{value.toLocaleString()}</strong>
            </div>
            <div className="allocation-data">
                <div>
                    <span>Allocation Size:</span>
                    <span>{allocation.toLocaleString()} B</span>
                </div>
                <div>
                    <span>Physical Size:</span>
                    <span>{physicalSize.toLocaleString()} B</span>
                </div>
            </div>
            <div className="status">
                <span aria-hidden="true">●</span>
                <span>{isUsed ? 'Allocated' : 'Available'}</span>
            </div>
        </article>
    );
}
