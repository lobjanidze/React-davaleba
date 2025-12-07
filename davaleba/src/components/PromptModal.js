import React, { useState } from 'react';
import './PromptModal.css'; 

const PromptModal = ({ 
  onApply, 
  onCancel, 
  initialValue = '', 
  mode = 'add' 
}) => {
  const [inputValue, setInputValue] = useState(initialValue);

  const isEditMode = mode === 'edit';
  const title = isEditMode ? 'EDIT NOTE' : 'NEW NOTE';
  const applyText = isEditMode ? 'SAVE' : 'APPLY';
  
  const isApplyDisabled = !inputValue.trim();

  const handleApply = () => {
    const trimmedValue = inputValue.trim();

    if (!trimmedValue) {
      return;
    }

    onApply(trimmedValue);
    
    if (!isEditMode) {
        setInputValue('');
    }
  };

  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <h3 className="modal-title">{title}</h3>
        
        <input
          type="text"
          placeholder="Input your note..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)} 
          className="modal-input"
        />

        <div className="modal-actions">
          <button 
            className="btn-cancel" 
            onClick={onCancel}
          >
            CANCEL
          </button>
          <button 
            className="btn-apply" 
            onClick={handleApply}
            disabled={isApplyDisabled} 
          >
            {applyText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PromptModal;