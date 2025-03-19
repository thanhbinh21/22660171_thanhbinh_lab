
import React from 'react';

const RecipeCard = ({ recipe }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="font-medium text-gray-800">{recipe.title}</h3>
        <div className="flex items-center justify-between gap-2 mt-2">
          <span className="text-pink-500 text-sm">{recipe.time}</span>
          <span className="text-pink-500">🔖</span>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;