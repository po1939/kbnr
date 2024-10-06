import React from 'react';

interface MenuItem {
  image: string;
  secondImage?: string;
  thirdImage?: string;
  label: string;
  icon?: string;
  secondIcon?: string;
  description?: string;
  price: string;
}

interface MenuItemCardProps {
  items: MenuItem[];
  columns?: number; // Optional prop to control the number of columns
}

export default function MenuItemCard({ items, columns = 2 }: MenuItemCardProps) {
  return (
    <div
      className="menu-item-card-grid"
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gap: '1rem',
      }}
    >
      {items.map((item, index) => (
        <div key={index} className="menu-item-card">
          {/* Display three images in single-column layout */}
          {columns === 1 && item.secondImage && item.thirdImage ? (
            <div className="three-images">
              <img src={item.image} alt={item.label} className="menu-item-image" />
              <img src={item.secondImage} alt={`${item.label} second image`} className="menu-item-second-image" />
              <img src={item.thirdImage} alt={`${item.label} third image`} className="menu-item-third-image" />
            </div>
          ) : columns === 1 && item.secondImage ? (
            <div className="two-images">
              <img src={item.image} alt={item.label} className="menu-item-image" />
              <img src={item.secondImage} alt={`${item.label} second image`} className="menu-item-second-image" />
            </div>
          ) : (
          <img src={item.image} alt={item.label} className="menu-item-image" />
          )}
          <div className="label">
            <label>{item.label}</label>
            {item.icon && (
              <img src={item.icon} alt={`${item.label} icon`} className="menu-item-icon" />
            )}
            
            {/* Conditionally render second icon */}
            {item.secondIcon && (
              <img src={item.secondIcon} alt={`${item.label} second icon`} className="menu-item-second-icon" />
            )}
          </div>
          {item.description && <p>{item.description}</p>}
          <b>{item.price}</b>
        </div>
      ))}
    </div>
  );
}
