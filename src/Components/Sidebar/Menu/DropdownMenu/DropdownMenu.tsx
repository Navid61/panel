import React from 'react';
import { Link } from 'react-router-dom';

interface MenuItem {
  to: string;
  label: string;
}

interface DropdownMenuProps {
  name: string;
  items: MenuItem[];
  isOpen: boolean;           // new prop
  onToggle: () => void;      // new prop
  customStyles?: React.CSSProperties;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ name, items, isOpen, onToggle, customStyles }) => {
  return (
    <div className='dropdown' style={customStyles}>
      <Link to="#" onClick={onToggle} className='dropdown-link'>
        {name}
      </Link>
      {isOpen && (
        <ul className="dropdown-menu">
          {items.map((item, index) => (
            <li key={index}>
              <Link to={item.to} className="menu-item">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownMenu;
