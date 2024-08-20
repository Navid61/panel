// Sidebar.tsx
import React, {useState} from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Import Link
import PinButton from '../../Components/Sidebar/PinButton/PinButton';
import DropdownMenu from '../../Components/Sidebar/Menu/DropdownMenu/DropdownMenu';


interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  onPinToggle: () => void;
  isPinned: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose, onPinToggle, isPinned }) => {

  const settingsMenuItems = [
    { to: '/config', label: 'Setup Devices' },
    { to: '/user', label: 'Users Management' },
    { to: '/scene', label: 'Scene Management' },
    { to: '/automation', label: 'Automation' },
    { to: '/filtration', label: 'Filtration' },
  ];

  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleLinkClick = () => {
    // Close the sidebar when a link is clicked
    onClose();

    setDropdownVisible(false);
  };

  const handleDropdownToggle = () => {
    // Toggle the visibility of the dropdown
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`} id="mySidebar">
      <div className="sidebar-control">
      <PinButton isPinned={isPinned} onToggle={onPinToggle} />
      <Button className="close-btn" onClick={onClose}>
        Close &times;
      </Button>
      </div>
  

      {/* Use Link components instead of anchor tags */}
      <Link to="/dashboard" className="sidebar-link" onClick={handleLinkClick}>
        Dashboard
      </Link>
      <div className="sidebar-link">
      <DropdownMenu name="Settings" items={settingsMenuItems} isOpen={dropdownVisible} onToggle={handleDropdownToggle} />
      </div>
      
      {/* Add more Link components for other pages */}
      {/* ... */}

     
    </div>
  );
};

export default Sidebar;
