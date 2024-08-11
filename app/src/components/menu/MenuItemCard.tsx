import React from 'react';

interface MenuItem {
  image: string;
  label: string;
  icon: string;
  description: string;
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
          <img src={item.image} alt={item.label} className="menu-item-image" />
          <div className="label">
            <label>{item.label}</label>
            <img src={item.icon} alt={`${item.label} icon`} className="menu-item-icon" />
          </div>
          <p>{item.description}</p>
          <b>{item.price}</b>
        </div>
      ))}
    </div>
  );
}
