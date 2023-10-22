import React, { useState } from 'react';

const CategoryDropdown = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const categories = [
    {
      title: 'OLX Autos (Cars)',
      subcategories: [
        'Properties',
        'For Sale: Houses & Apartments',
        'For Rent: Houses & Apartments',
        'Lands & Plots',
        'For Rent: Shops & Offices',
        'For Sale: Shops & Offices',
        'PG & Guest Houses',
      ],
    },
    {
      title: 'Mobiles',
      subcategories: [
        'Mobile Phones',
        'Accessories',
        'Tablets',
      ],
    },
    {
      title: 'Jobs',
      subcategories: [
        'Data entry & Back office',
        'Sales & Marketing',
        'BPO & Telecaller',
        'Driver',
        'Office Assistant',
        'Delivery & Collection',
        'Teacher',
        'Cook',
        'Receptionist & Front office',
        'Operator & Technician',
        'IT Engineer & Developer',
        'Hotel & Travel Executive',
        'Accountant',
        'Designer',
        'Other Jobs',
      ],
    },
    {
      title: 'Bikes',
      subcategories: [
        'Motorcycles',
        'Scooters',
        'Spare Parts',
        'Bicycles',
      ],
    },
    {
      title: 'Electronics & Appliances',
      subcategories: [
        'TVs, Video - Audio',
        'Kitchen & Other Appliances',
        'Computers & Laptops',
        'Cameras & Lenses',
        'Games & Entertainment',
        'Fridges',
        'Computer Accessories',
        'Hard Disks, Printers & Monitors',
        'ACs',
        'Washing Machines',
      ],
    },
    {
      title: 'Commercial Vehicles & Spares',
      subcategories: [
        'Commercial & Other Vehicles',
        'Spare Parts',
      ],
    },
    {
      title: 'Furniture',
      subcategories: [
        'Sofa & Dining',
        'Beds & Wardrobes',
        'Home Decor & Garden',
        'Kids Furniture',
        'Other Household Items',
      ],
    },
    {
      title: 'Fashion',
      subcategories: [
        'Men',
        'Women',
        'Kids',
      ],
    },
    {
      title: 'Books, Sports & Hobbies',
      subcategories: [
        'Books',
        'Gym & Fitness',
        'Musical Instruments',
        'Sports Equipment',
        'Other Hobbies',
      ],
    },
    {
      title: 'Pets',
      subcategories: [
        'Fishes & Aquarium',
        'Pet Food & Accessories',
        'Dogs',
        'Other Pets',
      ],
    },
    {
      title: 'Services',
      subcategories: [
        'Education & Classes',
        'Tours & Travel',
        'Electronics Repair & Services',
        'Health & Beauty',
        'Home Renovation & Repair',
        'Cleaning & Pest Control',
        'Legal & Documentation Services',
        'Packers & Movers',
        'Other Services',
      ],
    },
  ];

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <div className="category-dropdown">
      <ul className="category-list">
        {categories.map((category, index) => (
          <li key={index}>
            <div
              className={`category-title ${openDropdown === index ? 'active' : ''}`}
              onClick={() => toggleDropdown(index)}
            >
              {category.title}
            </div>
            {openDropdown === index && (
              <ul className="subcategory-list">
                {category.subcategories.map((subcategory, subIndex) => (
                  <li key={subIndex}>{subcategory}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryDropdown;
