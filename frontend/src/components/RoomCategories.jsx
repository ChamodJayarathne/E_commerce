import React from 'react';


const RoomCategories = () => {
  const categories = [
    {
      id: 1,
      title: 'Dining',
      image: '/dinr.png',
    },
    {
      id: 2,
      title: 'Living',
      image: 'livingrm.png',
    },
    {
      id: 3,
      title: 'Bedroom',
      image: 'bedr.png',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          Browse The Range
        </h2>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category) => (
          <div key={category.id} className="group cursor-pointer">
            <div className="overflow-hidden rounded-lg mb-4">
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-[400px] md:h-[450px] lg:h-[500px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <h3 className="text-xl text-center font-semibold text-gray-800">
              {category.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoomCategories;