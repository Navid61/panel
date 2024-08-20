// PinButton.tsx
import React from 'react';

interface PinButtonProps {
  isPinned: boolean;
  onToggle: () => void;
}

const PinButton: React.FC<PinButtonProps> = ({ isPinned, onToggle }) => {
  return (
    <div className='pin-btn'>
<label className='pin-btn-label'>
      Pin:{' '}
      <input type="checkbox" checked={isPinned} onChange={onToggle} />
    </label>
    </div>
    
  );
};

export default PinButton;
