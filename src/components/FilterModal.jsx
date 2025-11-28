import React, { useState } from 'react';
import { X } from 'lucide-react';

const FilterModal = ({ isOpen, onClose, onApply, currentSort }) => {
    const [selectedSort, setSelectedSort] = useState(currentSort);

    if (!isOpen) return null;

    const handleApply = () => {
        onApply(selectedSort);
        onClose();
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                    <button className="close-btn" onClick={onClose}>
                        <X size={20} />
                    </button>
                    <h3>Filters</h3>
                    <div style={{ width: 20 }}></div>
                </div>

                <div className="modal-body">
                    <section>
                        <h4>Sort by</h4>
                        <div className="radio-group">
                            {['Recommended', 'Highest Rated', 'Most Reviews'].map(option => (
                                <label key={option} className="radio-label">
                                    <span>{option}</span>
                                    <input
                                        type="radio"
                                        name="sort"
                                        checked={selectedSort === option}
                                        onChange={() => setSelectedSort(option)}
                                    />
                                </label>
                            ))}
                        </div>
                    </section>
                </div>

                <div className="modal-footer">
                    <button className="clear-btn" onClick={() => setSelectedSort('Recommended')}>Clear all</button>
                    <button className="apply-btn" onClick={handleApply}>Show results</button>
                </div>
            </div>
            <style>{`
                .modal-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(0,0,0,0.5);
                    z-index: 1000;
                    display: flex;
                    align-items: flex-end;
                    animation: fadeIn 0.2s;
                }
                .modal-content {
                    background: white;
                    width: 100%;
                    border-radius: 16px 16px 0 0;
                    padding: 20px;
                    max-height: 80vh;
                    overflow-y: auto;
                    animation: slideUp 0.3s;
                }
                @media (min-width: 768px) {
                    .modal-overlay {
                        align-items: center;
                        justify-content: center;
                    }
                    .modal-content {
                        width: 400px;
                        border-radius: 16px;
                    }
                }
                .modal-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 20px;
                    border-bottom: 1px solid #eee;
                    padding-bottom: 10px;
                }
                .close-btn {
                    background: none;
                    border: none;
                    cursor: pointer;
                    padding: 0;
                }
                .modal-body {
                    padding-bottom: 80px;
                }
                .radio-label {
                    display: flex;
                    justify-content: space-between;
                    padding: 16px 0;
                    border-bottom: 1px solid #f0f0f0;
                    cursor: pointer;
                }
                .modal-footer {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    padding: 16px 24px;
                    background: white;
                    border-top: 1px solid #eee;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                .clear-btn {
                    background: none;
                    border: none;
                    text-decoration: underline;
                    font-weight: 600;
                    cursor: pointer;
                }
                .apply-btn {
                    background: #222;
                    color: white;
                    border: none;
                    padding: 12px 24px;
                    border-radius: 8px;
                    font-weight: 600;
                    cursor: pointer;
                }
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                @keyframes slideUp {
                    from { transform: translateY(100%); }
                    to { transform: translateY(0); }
                }
            `}</style>
        </div>
    );
};

export default FilterModal;
