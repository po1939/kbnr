import React from 'react';
import NavTabs from './NavTab';
import Legends from './Legends';
import VeganIcon from './../../assets/images/vegan-icon.svg';
import SpicyIcon from './../../assets/images/spicy-icon.svg';
import VeggieKimbap from './../../assets/images/menu/veggie_kimbap.png';
import MenuItemCard from './MenuItemCard';
import { Link as ScrollLink, LinkProps } from 'react-scroll';

const MyComponent: React.FC = ({ }) => {
  const legends = [
    { icon: VeganIcon, text: 'Vegan option available' },
    { icon: SpicyIcon, text: 'Spicy' },
  ];
  const menuItems = [
    {
      image: VeggieKimbap,
      label: 'Veggie Kimbap',
      icon: VeganIcon,
      description: 'Steamed rice with eggs, imitation crab stick, sweet radish, carrots, & spinach rolled in seaweed paper.',
      price: '$5.99',
    },
    {
      image: VeggieKimbap,
      label: 'Veggie Kimbap',
      icon: VeganIcon,
      description: 'Steamed rice with eggs, imitation crab stick, sweet radish, carrots, & spinach rolled in seaweed paper.',
      price: '$5.99',
    },
    {
      image: VeggieKimbap,
      label: 'Veggie Kimbap',
      icon: VeganIcon,
      description: 'Steamed rice with eggs, imitation crab stick, sweet radish, carrots, & spinach rolled in seaweed paper.',
      price: '$5.99',
    },
    {
      image: VeggieKimbap,
      label: 'Veggie Kimbap',
      icon: VeganIcon,
      description: 'Steamed rice with eggs, imitation crab stick, sweet radish, carrots, & spinach rolled in seaweed paper.',
      price: '$5.99',
    },
    {
      image: VeggieKimbap,
      label: 'Veggie Kimbap',
      icon: VeganIcon,
      description: 'Steamed rice with eggs, imitation crab stick, sweet radish, carrots, & spinach rolled in seaweed paper.',
      price: '$5.99',
    },

    // Add more items as needed
  ];


  return (
    <div className="menu">
      <NavTabs links={[
        { href: "/menu#kimbap", label: "Kimbap" },
        { href: "/menu#special-combo", label: "Sepcial Combo" },
        { href: "/menu#entree", label: "Entree" },
        { href: "/menu#noodle", label: "Noddle" },
        { href: "/menu#snack", label: "Snack" },
      ]} />
      <div className='menu-content'>
        <Legends items={legends} />
        <section id="kimbap">
          <h6>Kimbap</h6>
          <p>“Kimbap” (김밥)  is a popular Korean dish that consists of seaweed rice rolls filled with various ingredients. The name "kimbap" translates to "seaweed rice" in Korean. This dish is often considered the Korean version of sushi, but it has its own distinct flavors and ingredients.
          </p>
          <MenuItemCard items={menuItems} />
        </section>
        <section id="special-combo">
          <h6>Special Combo</h6>
          <p>sepcial combo description...</p>
          <MenuItemCard items={menuItems} />
        </section>
      </div>
    </div>
  );
};

export default MyComponent;
