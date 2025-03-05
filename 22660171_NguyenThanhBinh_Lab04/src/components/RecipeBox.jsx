// components/RecipeBox.jsx
import React, { useState, useEffect } from 'react';
import Avata from '../assets/avata.PNG';

const RecipeBox = () => {
  // State to hold the recipes fetched from the API
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch('https://67c81c770acf98d07084e515.mockapi.io/tuan04');
        if (!response.ok) {
          throw new Error('Failed to fetch recipes');
        }
        const data = await response.json();
        setRecipes(data); // Set the fetched data to state
        setLoading(false); // Stop loading
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []); // Empty dependency array means this runs once on mount

  // Render loading state
  if (loading) {
    return <div className="text-center p-6">Loading recipes...</div>;
  }

  // Render error state
  if (error) {
    return <div className="text-center p-6 text-red-500">Error: {error}</div>;
  }

  return (
    <div className="max-w-6xl mx-auto p-6 ">
      {/* Breadcrumb */}
      <nav className="text-pink-500 text-sm mb-4">
        <a href="/" className="hover:underline">Home</a> {'>'} 
        <span>Your Recipe Box</span>
      </nav>

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Emma Gonzalez's Recipe Box</h1>
        
        <div className="flex items-center gap-4 mb-6">
          <img 
            src={Avata} 
            alt="Emma Gonzalez" 
            className="w-16 h-16 rounded-full object-cover"
          />
          <div>
            <p className="text-gray-600">
              Emma Gonzalez is a deputy editor at Cheffy, bringing her expertise as a former cooking editor at The Los Angeles Times. She is also an accomplished author, contributing to numerous cookbooks and food publications. Originally from East Los Angeles, Emma now resides in New York City, where she explores a wide range of culinary delights.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-gray-600">6.5k Subscribers</span>
          <button className="bg-pink-500 text-white px-4 py-2 rounded-full hover:bg-pink-600">
            Share <span className="ml-1">↗</span>
          </button>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="mb-6 flex gap-4 text-pink-500">
        <button className="border-b-2 border-pink-500 pb-2">Saved Recipes</button>
        <button className="pb-2">Folders</button>
        <button className="pb-2">Recipes by Genevieve</button>
      </div>

      {/* Recipe Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {recipes.map((recipe) => (
          <div 
            key={recipe.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img 
              src={recipe.image} 
              alt={recipe.title} 
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-medium text-gray-800">{recipe.title}</h3>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-pink-500 text-sm">{recipe.time}</span>
                <span className="text-pink-500">🔖</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeBox;