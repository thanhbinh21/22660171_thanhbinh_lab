import React from 'react'
import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Filter from '../components/Filter'
import Card from '../components/Card'
const Search = () => {
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
        setRecipes(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  return (
    <div className='max-w-7xl mx-auto p-6 flex justify-between '>
      <div className='max-w-[30%]'>
        <Filter></Filter>
      </div>
      <div className="max-w-[70%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
       
        {recipes.map((recipe) => (
          <Card key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  )
}

export default Search
